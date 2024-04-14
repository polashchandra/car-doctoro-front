import React from 'react';
import {Outlet} from 'react-router-dom'
import Fotter from '../shared/Fotter';
import Navbar from '../shared/Navbar';


const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Fotter></Fotter>
        </div>
    );
};

export default Main;