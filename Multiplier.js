import React from 'react';

let Multiplier = ({ x, y }) => (
	<div className="card">
		<p className="card-body">
			{ x * y }
		</p>
	</div>
); 

export default Multiplier;
