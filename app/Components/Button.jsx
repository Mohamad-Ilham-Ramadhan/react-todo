import React from 'react';

class Button extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		const { children, className, addTodo, deleteTodo } = this.props 

		return (
			<button onClick={addTodo || deleteTodo} className={className}>
				{ children }
			</button>
		)
	}
}

export default Button;