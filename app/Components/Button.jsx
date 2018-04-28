import React from 'react';

class Button extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		const { children, className, addTodo } = this.props 

		return (
			<button onClick={addTodo} className={className}>
				{ children }
			</button>
		)
	}
}

export default Button;