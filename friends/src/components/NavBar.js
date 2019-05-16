import React from 'react';
import {  Route, Link } from 'react-router-dom';
import Login from './Login'

const NavBar = () => {
    return (
        <>
            <ul>
                <li>
                    <Link to='/login'>Login</Link>
                </li>
            </ul>
            <Route path='/login' component={Login} />
        </>
    )
}

export default NavBar;