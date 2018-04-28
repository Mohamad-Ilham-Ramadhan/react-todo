import React from 'react';
import Button from './Button';

class Todo extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		const { todos, inputValue, addTodo, updateInputValue, deleteTodo, todoCheck } = this.props;

		const todoLeft = todos.filter( todo => todo.checked == false );

		return (
			<div className="todo">
				<h3 className="todo-remains">{todoLeft.length} to do left</h3>
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
				<ul className="todo-list">
					{ todos.map( todo => 
						{	
							const style = todo.checked ? { textDecoration: 'line-through' } : {};
							return (
								<li key={todo.id} className="todo-item" style={style}>
									<div>
										<input type="checkbox" checked={todo.checked} onChange={ () => todoCheck(todo.id) }/>
										{todo.task}
										<Button deleteTodo={ deleteTodo.bind( null, todo.id )} className="btn btn-delete">x</Button>
									</div>
								</li>	
							);
						}
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