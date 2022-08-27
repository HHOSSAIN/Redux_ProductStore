import { combineReducers } from "redux";
import { productsReducer, selectedProductsReducer } from "./productReducer";
const reducers = combineReducers({
  allProducts: productsReducer,
  product: selectedProductsReducer,
});
export default reducers;

/*when we create an application, we will have multiple reudcers. So, the aim 
is tom combine all the reducers from the different reducer files in index.js */
/*import { combineReducers } from "redux";

//individual reducers from the reducer files in the "reducers" folder
import { productReducer, selectedProductReducer } from "./productReducer";

const reducers = combineReducers({
  //it gets imported by store.js
  allProducts: productReducer,
  product: selectedProductReducer,
});

export default reducers; */
