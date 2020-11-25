import React ,{Component} from 'react';
import Button from '../../../components/Burger/Button/Button';
import classes from './ContactData.module.css';
import axios from '../../../axios-orders';
import Spinner from '../../../components/UI/Spinner/Spinner';
import {connect} from 'react-redux';
import * as actionTypes from '../../../Store/actions';

class ContactData extends Component {

    state = {
        name : '',
        email : '',
        address : {
            street : '',
            postalCode : ''
        },
        loading:false
    }

    completeOrder = (event) =>
    {
        event.preventDefault();
        this.setState({loading:true});
        const orderToSend = {
            ingrediantDetails:this.props.ings,
            orderAmount : this.props.price
        }

        axios.post('/storeBurgerOrder',orderToSend).then(() => {
            this.setState({loading:false});
           // window.confirm("Congrtulations Your Order was placed");
            this.props.onOrderSuccess();
            this.props.history.push('/');
        }).catch(() =>{
            this.setState({loading:false});
            alert("Placing Order Failed PLease Try Again");
        }
        );
    }

    render(){

        let form = (<form>
            <input className={classes.Input} type="text" name="name" placeholder="your name"/>
            <input className={classes.Input} type="email" name="email" />
            <input className={classes.Input} type="text" name="street" placeholder="your street name"/>
            <input className={classes.Input} type="text" name="pincode" placeholder="your street pincode"/>
            <Button btnType="Success" clicked={this.completeOrder}>ORDER</Button>
        </form>);
        if (this.state.loading)
        {
            form = <Spinner />
        }
        return (
            <div className={classes.ContactData}>
                <h4>Enter Your Contact Data</h4>
                {form}
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

const mapDispatchToProps = dispatch => {
    return {
        onOrderSuccess : () => dispatch({type:actionTypes.EMPTY_INGREDIENTS})
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(ContactData);