import React from 'react';

let Field = ({ label, handleChange, valid, value }) => (
	<div className="form-group">
		<label>{ label }</label>
		<input 
			value={ value }
			onChange={ handleChange }
			className={ `form-control border-${ valid ? "primary" : "danger" }` }
		/>
		{valid ? null : <p>This is a required field</p>}
	</div>
); 

export default Field;