import React, { Component } from 'react';

class RegisterUser extends Component {
	constructor(props) {
	  super(props);
		this.state = {
			title: this.props.title || 'Title',
			text: this.props.text || 'Description',
			isEdit: this.props.edit || false
		}
	}
	
	enteringHandler = evt => {
		this.setState({
			[evt.target.name]: evt.target.value
		})
	}

	submitHandler = evt => {
		evt.preventDefault();
		const { title, text } = this.state;
		this.props.onSubmit({ title, text });
	}
  
	render() {
		const { isEdit } = this.state;
		const css = { backgroundColor: this.props.color }
		return (
			<div className="task edit col-lg-4 col-md-6 col-sm-12">
				<form onSubmit={this.submitHandler}>
					<div className="task-header" style={css}>
						<input type="text" name="title" onChange={this.enteringHandler} value={this.state.title}></input>
						<div className="task-controls">
							<button type="submit" >{isEdit ? 'Actualize task' : 'Add Task'}</button>
						</div>
					</div>
					<div className="task-content">
						<textarea name="text" onChange={this.enteringHandler} value={this.state.text}></textarea>
					</div>
				</form>
			</div>
		);
	}
  }

export default RegisterUser;