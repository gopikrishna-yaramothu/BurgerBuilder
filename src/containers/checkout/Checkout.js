import React, { Component } from 'react';
import CheckoutSummary from '../../components/Checkout/CheckoutSummary';
import {Route } from 'react-router-dom';
import ContactData from '../checkout/contactData/ContactData';
import {connect} from 'react-redux';

class Checkout extends Component {

    state = {
        ingrediants: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice : 0
    }
   
    checkoutCancel = () => {
        this.props.history.goBack();
    }

    checkoutContinue = () => {
        this.props.history.push('/checkout/contact-data');
    }

    render() {
        return (
            <div>
                <CheckoutSummary ingredients={this.props.ings}
                    onCheckoutCancel={this.checkoutCancel}
                    onCheckoutContinue={this.checkoutContinue} />
                    <Route path={this.props.match.path + '/contact-data'} 
                    render={
                        (props) => (
                        <ContactData 
                            ingredients={this.props.ings} 
                            price={this.props.price} {...props}/> )}/>
            </div>
        );
    }


}

const mapStateToProps = state => {
    return {
        ings : state.ingredients,
        price : state.totalPrice
    }
}

export default connect(mapStateToProps)(Checkout);