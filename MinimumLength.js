import React, { Component } from 'react';

class MinimumLength extends Component {

	constructor(props) {
		super(props);
		
		this.state = {
			value: "",
		};

		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(e) {
		this.setState({
			value: e.currentTarget.value,
		});
	}

	render() {
		let { minLength } = this.props;
		let { value } = this.state;

		return (
			<form>
				<div className="form-group">
					<h4>Give me words</h4>
					<input
						onChange={ this.handleChange }
						value={ value }
						className="form-control"
					/>
					{ value.length >= minLength ? null : <p className="text-danger form-text">Too short!</p> }
				</div>
			</form>
		);
	}
}

export default MinimumLength;