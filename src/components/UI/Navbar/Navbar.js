import React from 'react';
import classes from './Navbar.module.css';
import NavItem from './NavItem/NavItem';

const Navbar = props => (
        <ul className={classes.Navbar}>
            <NavItem to='/' exact>BURGER BUILDER</NavItem>
            <NavItem to='/cart' exact>CARRELLO</NavItem>
        </ul>
)

export default Navbar;