import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

const PostDetails = () => {
	const post = useLoaderData();
	const { id, title, body } = post;
	const navigate = useNavigate();

    // Go back button handler here
	const handleGoBack = () => {
		navigate(-1);
	};

	return (
		<div>
			<h3>Post Details: {id}</h3>
			<h4>{title}</h4>
			<p>{body}</p>
            {/* Go back button is here */}
			<button onClick={handleGoBack}>Go Back</button>
		</div>
	);
};

export default PostDetails;
