import React,{Component} from 'react';
import Aux from '../../../hoc/Aux/Aux';
import Button from '../Button/Button';

class OrderSummary extends Component {
    
    render(){
        const ingrediantSummary = Object.keys(this.props.ingrediants).map(igkey => {
            return <li key={igkey}>{igkey}:{this.props.ingrediants[igkey]}</li>
        });
        return (
            <Aux>
            <div>
                <h3>Order Details</h3>
                <ul>
                    {ingrediantSummary}
                </ul>
                <p>Your Order Total is <span>{this.props.orderPrice.toFixed(2)}</span></p>
                <Button btnType="Success" clicked={this.props.purchaseCancelled}>CANCEL</Button>
                <Button btnType="Danger" clicked={this.props.purchaseContinued}>CONTINUE</Button>
            </div>
        </Aux>
        );
    }
}

export default OrderSummary;