import React from 'react';
import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

const controls =[
    {label:'Salad',type:'salad'},
    {label:'Bacon',type:'bacon'},
    {label:'Meat',type:'meat'},
    {label:'Cheese',type:'cheese'}
]
const buildControls = (props) => (
    <div className={classes.BuildControls}>
        <p>Current Price is <strong>{props.price.toFixed(2)}</strong></p>
        {controls.map(ctrl => (
            <BuildControl key={ctrl.label} 
            label={ctrl.label} 
            add={ () => props.addIngrediant(ctrl.type)}
            remove = {() => props.removeIngrediant(ctrl.type)}
            disabled={props.disabledProp[ctrl.type]}/>
        ))}
        <button 
            disabled={!props.purchasable} 
            className={classes.OrderButton}
            onClick={props.purchasing}>ORDER NOW</button>
    </div>
) ;

export default buildControls;