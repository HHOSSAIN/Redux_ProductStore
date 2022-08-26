import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"; //Switch replaced by "Routes", so "component" replaced  by "element"
//import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//components to render
import Header from "./containers/Header";
import ProductListing from "./containers/ProductListing";
import ProductDetail from "./containers/ProductDetail";

function App() {
  return (
    <div className="App">
      <Header />
      <br></br>
      <h1>eCommerce Store</h1>
      <Router>
        <Switch>
          <Route path="/" exact component={ProductListing}></Route>
          <Route
            path="/product/:productId"
            exact
            component={ProductDetail}
          ></Route>
          <Route>404 Not Found!</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

/*
<Routes>
          <Route path="/" exact element={<ProductListing />}></Route>
          <Route
            path="/product/:productId"
            exact
            element={<ProductDetail />}
          ></Route>
          <Route>404 Not Found!</Route>
        </Routes>
 */
