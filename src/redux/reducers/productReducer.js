import { ActionTypes } from "../constants/actionTypes";

const initialState = {
    products: [
        {
            id:1,
            title: "hasne",
            category: "programmer"
        }
    ]
}

export const productReducer = (state=initialState, action) =>{
    switch (action.type) {
        case ActionTypes.SET_PRODUCTS:
            return state;
        case ActionTypes.SELECTED_PRODUCT:
            
            break;
        case ActionTypes.REMOVE_SELECTED_PRODUCT:
            
            break;
    
        default:
            return state; 
    }
}