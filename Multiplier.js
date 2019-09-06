import React from 'react';

let Header = ({ x, y }) => (
	<div className="card">
		<p className="card-body">
			{ x * y }
		</p>
	</div>
); 


export default Header;
