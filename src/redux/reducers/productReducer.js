import { ActionTypes } from "../constants/actionTypes";

const initialState = {
  products: [
    {
      id: 0,
      title: "hasne",
      category: "programmer",
    },
  ],
};

/*the 2nd arg is the object returned from an action in "productActions.js" 
  an object there has 2 attribute as we saw in that file, 1)type, 2)payload */
export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_PRODUCTS:
      //return state;
      return { ...state, products: action.payload }; //the store will get updated as well
    case ActionTypes.SELECTED_PRODUCT:
      break;
    case ActionTypes.REMOVE_SELECTED_PRODUCT:
      break;

    default:
      return state;
  }
};
