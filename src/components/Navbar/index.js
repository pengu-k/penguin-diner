import React from 'react';
import {Bars, Nav, NavIcon, NavLink} from './NavbarElements';


const Navbar = () => {
    return (
        <>
            <Nav>
                <NavLink to='/'>Penguin Diner</NavLink>
                <NavIcon>
                    <p>Menu</p>
                    <Bars />
                </NavIcon>
            </Nav>
        </>
    )
}

export default Navbar;
