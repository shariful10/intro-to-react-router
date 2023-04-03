import React from "react";
import { Outlet, useNavigation } from "react-router-dom";
import Header from "../Header/Header";

const Home = () => {
	const navigation = useNavigation();

	return (
		<div>
			<Header></Header>
            <div>{navigation.state === 'loading' && 'Loading...'}</div>
			<Outlet></Outlet>
			<h4>Copy right 2023 | All rights reserved powered by router</h4>
		</div>
	);
};

export default Home;
