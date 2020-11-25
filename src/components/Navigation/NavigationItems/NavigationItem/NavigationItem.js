import React,{Component} from 'react';
import NavigationItems from '../NavigationItems';
import classes from './NavigationItem.module.css';
import { NavLink } from "react-router-dom";

class NavigationItem extends Component {
    render(){
        return (
            <li className={classes.NavigationItem}>
        <NavLink to={this.props.link}
            exact={this.props.exact}>
            <div onClick={this.props.toggleSideDrawer}>
            {this.props.children}
            </div>
        </NavLink>
    </li>
        );
    }
}
export default NavigationItem;