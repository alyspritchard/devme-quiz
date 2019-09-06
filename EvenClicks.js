import React, { Component } from 'react';

class EvenClicks extends Component {

	constructor(props) {
		super(props);
		
		this.state = {
			even: true,
		};

		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		this.setState({
			even: !this.state.even,
		});

	}

	render() {
		let { even } = this.state;
		
		return (
			<div className="card">
				<p className="card-body">
				{ even ? "Even" : "Odd" }
				</p>
				<button onClick={ this.handleClick } className="btn btn-warning">Clicker</button>
			</div>
		);
	}
}

export default EvenClicks;