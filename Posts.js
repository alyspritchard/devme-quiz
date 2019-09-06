import React, { Component } from 'react';
import Form from './Form';

class Posts extends Component {

	constructor(props) {
		super(props);
		
		this.state = { 
			posts: [],
		};

		this.addPost = this.addPost.bind(this);
	}

	addPost(post) {
		this.setState({
			posts: [...this.state.posts, post],
		});
	}

	render() {
		let { posts } = this.state;

		return (
			<>
				<h2>Posts</h2>
				{ posts.length === 0 ? <h4>No posts</h4> :
					posts.map((post, index) => (
						<div key={ index }className="card">
							<h4>{ post.title }</h4>
							<p>{ post.text }</p>
						</div>
					))
				}
				<Form 
					addPost={ (post) => this.addPost(post) }
				/>
			</>
		);
	}
}

export default Posts;
