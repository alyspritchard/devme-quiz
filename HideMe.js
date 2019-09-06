import React, { Component } from 'react';

class HideMe extends Component {

	constructor(props) {
		super(props);
		
		this.state = {
			hidden: false,
		};

		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		this.setState({
			hidden: !this.state.hidden,
		});

	}

	render() {
		let { children } = this.props;
		let { hidden } = this.state;

		return (
			<div className="card">
				<p className="card-body">
				{ hidden ? "" : children }
				</p>
				<button onClick={ this.handleClick } className="btn btn-warning">Clicker</button>
			</div>
		);
	}
}

export default HideMe;