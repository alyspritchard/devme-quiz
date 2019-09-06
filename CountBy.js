import React, { Component } from 'react';

class CountBy extends Component {

	constructor(props) {
		super(props);
		
		this.state = {
			count: 0,
			
		};

		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		let current = this.state.count;

		this.setState({
			count: current + this.props.step,
		});

	}

	render() {
		let { count } = this.state;
		
		return (
			<div className="card">
				<p className="card-body">
					{ count }
				</p>
				<button onClick={ this.handleClick } className="btn btn-danger">Clicker</button>
			</div>
		);
	}
}

export default CountBy;