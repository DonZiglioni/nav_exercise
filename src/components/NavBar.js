import React from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className='nav-bar'>
            <Link to={'/dogs'}>Home</Link>
            <Link to={'/'}>Log Out</Link>
        </div>
    );
};

export default NavBar;