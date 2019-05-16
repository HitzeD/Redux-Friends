import React from 'react';
import {  Route, NavLink } from 'react-router-dom';
import Login from './Login'

const NavBar = () => {
    return (
        <>
            <ul>
                <li>
                    <NavLink to='/'>Home</NavLink>
                </li>
                <li>
                    <NavLink to='/login'>Login</NavLink>
                </li>
            </ul>
            <Route path='/login' component={Login} />
        </>
    );
}

export default NavBar;