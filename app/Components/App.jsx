import React from 'react';
import uuid from 'uuid';
import Todo from './Todo';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			todos: [
				{
					id: uuid.v4(),
					task: 'Learn React'
				},
				{
					id: uuid.v4(),
					task: 'Learn React until bleed'
				},
				{
					id: uuid.v4(),
					task: 'Become Front end developer'
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
			/>
		)
	}

	updateInputValue = (e) => {
		this.setState({
			inputValue: e.target.value
		})
	}

	addTodo = ( value ) => {
		this.setState( ( prevState ) => {
			prevState.todos.push({ id: uuid.v4(), task: value });
			
			return {
				todos: prevState.todos,
				inputValue: ''
			}
		})
	}
}

export default App;