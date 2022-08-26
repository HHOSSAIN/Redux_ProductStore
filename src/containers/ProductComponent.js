import React from "react";
import { useSelector } from "react-redux";

const ProductComponent = () => {
  //useSelector is used to access the redux store from store.js
  const products = useSelector((state) => state.allProducts.products);
  const { id, title } = products[0];

  return (
    <div className="four column wide">
      ProductComponent
      <div className="ui link cards">
        <div className="card"></div>
        <div className="image"></div>
        <div className="content">
          <div className="header">{title}</div>
        </div>
      </div>
    </div>
  );
};

export default ProductComponent;
