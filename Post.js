import React from 'react';

let Post = ({ post, index }) => (
	<div key={ index }className="card">
		<h4>{ post.title }</h4>
		<p>{ post.text }</p>
	</div>
); 

export default Post;