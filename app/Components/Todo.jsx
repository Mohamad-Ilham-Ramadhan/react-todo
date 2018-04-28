import React from 'react';
import Button from './Button';

class Todo extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		const { todos, inputValue, addTodo, updateInputValue } = this.props;

		return (
			<div className="todo">
				<h3 className="todo-remains">{todos.length} to do left</h3>
				<div>
					<input 
						type="text"
						className="todo-add"
						placeholder="new todo..."
						value={ inputValue }
						onChange={ updateInputValue }
					/>
					<Button addTodo={() => addTodo(inputValue)} className="btn-add">+</Button>
				</div>
				<ul>
					{ todos.map( todo => 
						<li key={todo.id}>
							<div>
								{todo.task}
								<Button className="btn-delete">x</Button>
							</div>
						</li>
					) }
				</ul>
			</div>
		);
	}
}

export default Todo;