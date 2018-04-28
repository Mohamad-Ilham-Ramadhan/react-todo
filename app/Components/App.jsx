import React from 'react';
import uuid from 'uuid';
import Todo from './Todo';
import '../main.css';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			todos: [
				{
					id: uuid.v4(),
					task: 'Learn React',
					checked: true
				},
				{
					id: uuid.v4(),
					task: 'Learn React until bleed',
					checked: false
				},
				{
					id: uuid.v4(),
					task: 'Become Front end developer',
					checked: true
				},
			],
			inputValue: ''
		}
	}

	render() {
		const { todos, inputValue } = this.state;

		return (
			<Todo 
				todos={ todos }
				inputValue={ inputValue }

				addTodo={ this.addTodo }
				updateInputValue={ this.updateInputValue }
				deleteTodo={ this.deleteTodo }
				todoCheck={ this.todoCheck }
			/>
		)
	}

	todoCheck = ( id ) => {
		this.setState( ( prevState) => {
			const checked = prevState.todos.map( todo => {
				if ( todo.id === id) {
					todo.checked = !todo.checked;
				}
				return todo;
			});
			return {
				todos: checked
			}
		})
	};

	updateInputValue = (e) => {
		this.setState({
			inputValue: e.target.value
		})
	};

	addTodo = ( value ) => {
		if ( value.trim() === "" ) {
			alert('Please write something!');

			return;
		}

		this.setState( ( prevState ) => {
			return {
				todos: prevState.todos.concat({ id: uuid.v4(), task: value, checked: false }),
				inputValue: ''
			}
		})
	};

	deleteTodo = ( id ) => {
		this.setState( ( prevState ) => ({
			todos: prevState.todos.filter( todo => todo.id !== id )
		}) )
	}
}

export default App;