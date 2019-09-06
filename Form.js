import React, { Component } from 'react';

class Form extends Component {

	constructor(props) {
		super(props);
		
		this.state = { 
			title: "",
			text: "",
			valid: false,
			posts: [],
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
			valid: title !== "" && text !== "",
			posts: valid ? [...this.state.posts, post] : [...this.state.posts],
		});		
	}

	handleChange(e, name) {
		let change = {};
		change[name] = e.currentTarget.value;
		this.setState(change);
	}

	render() {
		let { title, text, } = this.state;

		return (
			<>
				<h2>Add Post</h2>
				<form onSubmit={ this.handleSubmit } className="form-group">
					<label>Title</label>
					<input
						value={ title }
						className="form-control"
						onChange={ (e) => this.handleChange(e, "title") }
					/>
					<label>Text</label>
					<input
						value={ text }
						className="form-control"
						onChange={ (e) => this.handleChange(e, "text") }
					/>
					<button type="submit" className="btn btn-primary">Submit</button>
				</form>
			</>
		);
	}
}

export default Form;
