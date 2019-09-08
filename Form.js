import React, { Component } from 'react';
import Field from './Field';

class Form extends Component {

	constructor(props) {
		super(props);
		
		this.state = { 
			title: "",
			text: "",
			submitted: false,
		};

		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	handleSubmit(e) {
		e.preventDefault();

		let { title, text } = this.state;
		let post = {
			title: title, 
			text: text,
		};

		this.setState({
			submitted: true,
		});	

		// if submission is valid, data is sent up to Posts, and form is reset
		if (title !== "" && text !== "") {
			this.props.addPost(post);
			this.setState({
				title: "",
				text: "",
				submitted: false,
				valid: false,
			});
		}	
	}

	handleChange(e, name) {
		let change = {};
		change[name] = e.currentTarget.value;
		this.setState(change);
	}

	render() {
		let { title, text, submitted } = this.state;

		return (
			<>
				<h2>Add Post</h2>
				<form onSubmit={ this.handleSubmit } className="form-group">
					<Field 
						value={ title }
						label="Title"
						valid={ !submitted || title !== "" }
						handleChange={ (e) => this.handleChange(e, "title") }
					/>
					<Field 
						value={ text }
						label="Text"
						valid={ !submitted || text !== "" }
						handleChange={ (e) => this.handleChange(e, "text") }
					/>
					<button type="submit" className="btn btn-primary">Submit</button>
				</form>
			</>
		);
	}
}

export default Form;
