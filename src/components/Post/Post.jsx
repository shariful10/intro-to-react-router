import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Post.css";

const Post = ({ post }) => {
	const { id, title, body } = post;
	const navigate = useNavigate();

	// Button handler here
	const handleNavigation = () => {
		navigate(`/post/${id}`);
	};

	return (
		<div className="post">
			<h5>ID: {id}</h5>
			<h5>{title}</h5>
			<Link to={`/post/${id}`}>Details</Link>
			<Link to={`/post/${id}`}>
				<button>Post Details</button>
			</Link>
			<button onClick={handleNavigation}>With button handler</button>
		</div>
	);
};

export default Post;
