import React, { Component } from "react";
import Aux from '../../hoc/Aux/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Model from '../../components/UI/Model/Model';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/WithErrorHandler';
import axios from '../../axios-orders';
import Orders from '../../containers/Orders/Orders';
import Checkout from '../checkout/Checkout';
import {} from 'redux';
import {connect} from 'react-redux';
import * as actionTypes from '../../Store/actions';

class BurgerBuilder extends Component {

    state = {
        defaultIngrediants : {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        purchasable : false,
        purchasing:false,
        loading : false,
        error:false,
        ordered:false

    }

    componentDidMount()
    {
        // console.log("mount called")
        // axios.get('/getIngredients').then(responce => {
        //     this.setState({ingredients:responce.data})
        //     this.updatePriceAfterLoadingIngredients()}
        //     ).catch(() => {
                
        //         this.setState({error:true})
        //         console.log("error in step1 ->",this.state.error);
        //     }
        //     );
        
    }

    updatePurchaseState (ing) {
        
        const sum = Object.keys(ing)
        .map(igKey => {
            return ing[igKey];
        })
        .reduce((sum,el) => {
            return sum + el ;
        },0) ;
        
        return sum>0;
    }

    updatePurchasedState = () =>
    {
        this.setState({purchasing:true});
    }

    updatePurchasedStateCancelled = () =>
    {
        this.setState({purchasing:false});
    }

    updatePurchasedStateContinued = () =>
    {
        this.props.history.push('/checkout');
    }

    render() {

        const disabledInfor = {...this.props.ings};
        for(let key in disabledInfor){
            disabledInfor[key]= disabledInfor[key] <=0;
        }
        let orderSummary = null;
        let burger = this.state.error ? <p>Error loading ingredients </p> : <Spinner />;
        if(this.props.ings)
        {
            burger = (<Aux><Burger ingredients={this.props.ings} />
                <BuildControls
                    addIngrediant={this.props.onIngredientAdded}
                    removeIngrediant={this.props.onIngredientDeleted} 
                    disabledProp = {disabledInfor}
                    price = {this.props.price}
                    purchasable={this.updatePurchaseState(this.props.ings)}
                    purchasing={this.updatePurchasedState}/>
                    </Aux>);
            orderSummary = <OrderSummary ingrediants={this.props.ings} orderPrice={this.props.price}
            purchaseCancelled={this.updatePurchasedStateCancelled}
            purchaseContinued={this.updatePurchasedStateContinued}/>;
        }
        var checkout = null;

        if(this.state.loading)
        {
            orderSummary = <Spinner />
        }

        if(this.state.ordered)
        {
            checkout = <Checkout />
        }
        return (
            <Aux>
                <Model show={this.state.purchasing} clicked={this.updatePurchasedStateCancelled}>
                    {orderSummary}
                </Model>
                {burger}
                {/* <Orders /> */}
                {checkout}
            </Aux>
        );
    }
}

const mapStateToProps = state => {
    return {
        ings : state.ingredients,
        price : state.totalPrice
    };
}
const mapDispatchToProps = dispatch => {
    return {
        onIngredientAdded : (ingName) => dispatch({type:actionTypes.ADD_INGREDIENT,
            ingredientName:ingName})
            ,
        onIngredientDeleted : (ingName) => dispatch({type:actionTypes.DELETE_INGREDIENT,
                ingredientName:ingName})
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(withErrorHandler(BurgerBuilder,axios));