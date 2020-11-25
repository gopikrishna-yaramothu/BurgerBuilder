import React from 'react';
import BurgerIngrediant from './BurgerIngrediant/BurgerIngrediant';
import { withRouter } from 'react-router-dom';
import classes from './Burger.module.css';

let KEY=1;
const burger = (props) => {
    let transformedIngredients = Object.keys(props.ingredients)
            .map(igKey => {
                return [...Array(props.ingredients[igKey])].map(
                    (_,index) => 
                    {
                        //let number = props.ingredients[igKey]+1;
                        let keyName = igKey + KEY++;
                        //console.log(keyName)
                        return <BurgerIngrediant key={igKey+1} type={igKey} />
                    }
                )
            }).reduce((arr,el) => {
                return arr.concat(el)
            },[]);

            if(transformedIngredients.length === 0)
            {
                transformedIngredients = <p>Please Start Adding Ingrediants</p>
            }
    return(
        <div className={classes.Burger}>
            <p className={classes.P}>Hello</p>
            <BurgerIngrediant type="bread-top" />
            {transformedIngredients}
            <BurgerIngrediant type="bread-bottom" />
        </div>
    );
};

export default withRouter(burger);