import * as actionTypes from './actions';

const initialState ={
    ingredients: {
        salad: 0,
        bacon: 0,
        cheese: 0,
        meat: 0
    },
    dummyIngredients: {
        salad: 0,
        bacon: 0,
        cheese: 0,
        meat: 0
    },
    totalPrice: 2,
    initialPrice:2
};

const INGREDIANT_PRICES = {
    salad: 0.5,
    cheese: 0.9,
    meat: 2,
    bacon: 1
}

const reducer = (state = initialState, action) => 
{
    switch (action.type)
    {
        case actionTypes.ADD_INGREDIENT:
            console.log("AddIngrediend called")
        return {
            ...state,
            ingredients:{
                ...state.ingredients,
                [action.ingredientName]:state.ingredients[action.ingredientName] + 1 
            },
            totalPrice: state.totalPrice + INGREDIANT_PRICES[action.ingredientName]
        };

        case actionTypes.DELETE_INGREDIENT:
            return {
                ...state,
                ingredients:{
                    ...state.ingredients,
                    [action.ingredientName]:state.ingredients[action.ingredientName] - 1 
                }
                ,
            totalPrice: state.totalPrice - INGREDIANT_PRICES[action.ingredientName]
            };
        case actionTypes.EMPTY_INGREDIENTS:
            return{
                ...state,
                ingredients:{
                    ...state.dummyIngredients
                },
                totalPrice: state.initialPrice
            };
        default : return state;

    }
};

export default reducer;