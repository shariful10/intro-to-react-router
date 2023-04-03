import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <h4>Copy right 2023 | All rights reserved powered by router</h4>
        </div>
    );
};

export default Home;