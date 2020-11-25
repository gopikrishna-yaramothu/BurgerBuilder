import React, { Component } from 'react';
import Aux from '../Aux/Aux';
import classes from './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {

    state = {
        showSideDrawer: true
    }

    sideDrawerClosed = () => {
        this.setState({ showSideDrawer: this.state.showSideDrawer ? false : true });
    }

    render() {
        return (
            <Aux>
                <Toolbar toggleSideDrawer={this.sideDrawerClosed.bind(this)}/>
                <SideDrawer closed={this.sideDrawerClosed}
                    open={this.state.showSideDrawer} 
                    toggleSideDrawer={this.sideDrawerClosed.bind(this)}/>
                <main className={classes.Main}>{this.props.children}</main>
            </Aux>
        );
    }
}

export default Layout;