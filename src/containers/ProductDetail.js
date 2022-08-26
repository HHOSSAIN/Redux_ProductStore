//import React from "react";
import { useParams } from "react-router-dom"; //to extract route parameter value
import Axios from "axios";
import { useDispatch } from "react-redux";
import { selectedProduct } from "../redux/actions/productActions";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const ProductDetail = () => {
  /*const product = useSelector((state) => state.product); //assuming combineReducer will have "product attr"

  const { productId } = useParams();
  console.log("product id= ", productId);
  const dispatch = useDispatch();
  console.log(product);

  const fetchProductDetail = async () => {
    const respoonse = await Axios.get(
      `https://fakestoreapi.com/products/${productId}`
    ).catch((err) => console.log("Err", err));

    //once we get the data, we need to dispatch the action
    dispatch(selectedProduct(respoonse.data));
  };
  useEffect(() => {
    if (productId && productId !== "") {
      fetchProductDetail();
    }
  }, [productId]); */

  return <div>ProductDetail</div>;
};

export default ProductDetail;
