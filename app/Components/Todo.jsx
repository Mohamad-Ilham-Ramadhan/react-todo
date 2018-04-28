import React from 'react';
import Button from './Button';

class Todo extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		const { todos, inputValue, addTodo, updateInputValue, deleteTodo } = this.props;

		return (
			<div className="todo">
				<h3 className="todo-remains">{todos.length} to do left</h3>
				<div className="todo-add">
					<input 
						type="text"
						placeholder="new todo..."
						value={ inputValue }
						onChange={ updateInputValue }
						onKeyPress= { this.checkEnter }
					/>
					<Button addTodo={() => addTodo(inputValue)} className="btn btn-add">+</Button>
				</div>
				<ul>
					{ todos.map( todo => 
						<li key={todo.id}>
							<div>
								{todo.task}
								<Button deleteTodo={ deleteTodo.bind( null, todo.id )} className="btn btn-delete">x</Button>
							</div>
						</li>
					) }
				</ul>
			</div>
		);
	}

	checkEnter = ( e ) => {
		if ( e.key === 'Enter' ) {
			this.props.addTodo( e.target.value )
		}
	}
}

export default Todo;