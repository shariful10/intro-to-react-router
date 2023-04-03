import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Home from "./components/Home/Home";
import Fast from "./components/Fast/Fast";
import Friends from "./components/Friends/Friends";
import FriendDetails from "./FriendDetails/FriendDetails";
import Posts from "./components/Posts/Posts";
import PostDetails from "./PostDetails/PostDetails";

// const router = createBrowserRouter([
// 	{
// 		path: "/",
// 		element: <App />,
// 	},
// 	{
// 		path: "/about",
// 		element: <About></About>
// 	},
// 	{
// 		path: "/contact",
// 		element: <Contact></Contact>
// 	},
// ]);

const router = createBrowserRouter([
	{
		path: "/",
		element: <Home></Home>,
		children: [
			{
				path: "/",
				element: <Fast></Fast>,
			},
			{
				path: "friends",
				element: <Friends></Friends>,
				loader: () =>
					fetch("https://jsonplaceholder.typicode.com/users"),
			},
			{
				path: "friend/:friendId",
				element: <FriendDetails />,
				loader: ({ params }) =>
					fetch(
						`https://jsonplaceholder.typicode.com/users/${params.friendId}`
					),
			},
			{
				path: "posts",
				element: <Posts />,
				loader: () => fetch("https://jsonplaceholder.typicode.com/posts"),
			},
			{
				path: "post/:postId",
                element: <PostDetails />,
                loader: ({ params }) =>
                    fetch(
                        `https://jsonplaceholder.typicode.com/posts/${params.postId}`
                    ),
			},
			{
				path: "about",
				element: <About></About>,
			},
			{
				path: "contact",
				element: <Contact></Contact>,
			},
			{
				path: "*",
                element: <h1>404 <br /> Not Found</h1>
			}
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
