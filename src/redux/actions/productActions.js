//importing the action constant names
import { ActionTypes } from "../constants/actionTypes"

/*each of the function below is an action */
export const setProducts = (products) =>{
    return{
        type: ActionTypes.SET_PRODUCTS,
        payload: products //payload is the data
    }
}
export const selectedProduct = (product) =>{
    return{
        type: ActionTypes.SELECTED_PRODUCT,
        payload: product //payload is the data
    }
}