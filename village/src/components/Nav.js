import React from 'react';
import { Link } from 'react-router-dom';

const Nav = props => {
    return (
        <nav className = 'nav'>
            <Link className = 'nav_link' to = '/'>Home</Link>
            <Link className = 'nav_link' to = '/smurfs'>Smurf List</Link>
            <Link className = 'nav_link' to = '/smurfs-form'>Add Smurf</Link>
        </nav>
    );
};

export default Nav;