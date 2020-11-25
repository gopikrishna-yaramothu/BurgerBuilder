import React, { Component } from 'react';
import classes from './BurgerIngrediant.module.css';
import Proptypes from 'prop-types';

class BurgerIngrediant extends Component {
    render() {
        let ingrediant = null;
        switch (this.props.type) {

            case ('bread-bottom'):
                ingrediant = <div className={classes.BreadBottom}></div>;
                break;

            case ('bread-top'):
                ingrediant = (
                    <div className={classes.BreadTop}>
                        <div className={classes.Seeds1}></div>
                        <div className={classes.Seeds2}></div>
                    </div>
                );
                break;

            case ('meat'):
                ingrediant = <div className={classes.Meat}></div>;
                break;

            case ('cheese'):
                ingrediant = <div className={classes.Cheese}></div>;
                break;

            case ('bacon'):
                ingrediant = <div className={classes.Bacon}></div>;
                break;

            case ('salad'):
                ingrediant = <div className={classes.Salad}></div>;
                break;

            default:
                ingrediant = null;
        }
        return ingrediant;
    }
}

// BurgerIngrediant.proptypes = {
//     type : Proptypes.string.isRequired
// };

export default BurgerIngrediant;