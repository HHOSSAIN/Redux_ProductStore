import { createStore } from "redux";
import reducers from "./reducers/index"; //the combined reducer consisting all reducers

//2nd arg will be a middleware, e.g. redux thunk or redux saga(we'll add it later)...3rd arg is state
//4th arg will redux devtool such that we can inspect it in our browser
const store = createStore(reducers, {},
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()    
    );

export default store;

