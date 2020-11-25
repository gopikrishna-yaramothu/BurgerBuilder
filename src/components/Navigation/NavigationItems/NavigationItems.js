import React from 'react';
import NavItem from '../NavigationItems/NavigationItem/NavigationItem';
import classes from'./NavigationItems.module.css';

const NavigationItems = (props) => (
    <ul className={classes.NavigationItems}>
        <NavItem link="/" toggleSideDrawer={props.toggleSideDrawer}>Burger Builder</NavItem>
        {/* <NavItem>Checkout</NavItem> */}
        <NavItem link="/orders" active toggleSideDrawer={props.toggleSideDrawer}>Orders</NavItem>
    </ul>
);

export default NavigationItems;