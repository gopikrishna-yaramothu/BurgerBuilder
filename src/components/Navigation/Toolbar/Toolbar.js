import React from 'react';
import classes from './Toolbar.module.css';
import Logo from '../../Logo/Logo';
import NavItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

const Toolbar = (props) => (
    <header className={classes.Toolbar}>
        <DrawerToggle toggleSideDrawer={props.toggleSideDrawer} />
        <Logo height="80%"/>
        <nav className={classes.DesktopOnly}> 
        <NavItems />
        </nav>
    </header>
);

export default Toolbar;