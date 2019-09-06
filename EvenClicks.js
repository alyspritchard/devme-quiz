import React, { Component } from 'react';

class EvenClicks extends Component {

	constructor(props) {
		super(props);
		
		this.state = {
			clicks: 0,
			even: true,
		};

		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		let current = this.state.clicks;

		this.setState({
			clicks: current + 1,
			even: current % 2 === 0,
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