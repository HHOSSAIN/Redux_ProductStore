import React, { useEffect, useCallback, useMemo } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../redux/actions/productActions";
import ProductComponent from "./ProductComponent";

const ProductPage = () => {
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();
  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log("Err: ", err);
      });
    dispatch(setProducts(response.data));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  console.log("Products :", products);
  return (
    <div className="ui grid container">
      <ProductComponent />
    </div>
  );
};

export default ProductPage;

/*import React, { useEffect } from "react";
import Axios from "axios";

import { useDispatch, useSelector } from "react-redux";
import ProductComponent from "./ProductComponent";
import { setProducts } from "./../redux/actions/productActions";

const ProductListing = () => {
  //useSelector is used to access the redux store from store.js
  const products = useSelector((state) => state);
  console.log("redux store= ", products);

  //dispatching action/intention
  const dispatch = useDispatch();

  //fetching products from the api
  const fetchProducts = async () => {
    const response = await Axios.get("https://fakestoreapi.com/products").catch(
      (err) => {
        console.log("Err", err);
      }
    );
    console.log(response.data); //data is what we want

    //
    dispatch(setProducts(response.data));
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  console.log("Products after updating 4m fetch: ", products);

  return (
    <div className="ui grid container">
      <ProductComponent></ProductComponent>
    </div>
  );
};

export default ProductListing; */
