import React, { Component } from 'react';
import Form from './Form';

class Posts extends Component {

	constructor(props) {
		super(props);
		
		this.state = { 
			posts: [],
		};
	}

	render() {
		let { posts } = this.state;

		return !loaded ? <p>Loading...</p> : (
			<>
				<h1>Posts</h1>
				<ul className="list-group">
					{ posts.map(post => (
						<li key={ post.id } className="list-group-item">
							<Link to={ `posts/${post.id}` }>{ post.title}</Link>
							<Tags tags={ post.tags }/>
						</li>
					)) }
				</ul>
			</>
		);
	}
}

export default Posts;
