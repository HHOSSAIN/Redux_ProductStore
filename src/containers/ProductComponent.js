import React from "react";
import { useSelector } from "react-redux";

const ProductComponent = () => {
  //useSelector is used to access the redux store from store.js
  const products = useSelector((state) => state.allProducts.products);
  const { id, title, image, price, category } = products[0];

  //rendering all the products
  const renderList = products.map((product) => {
    return (
      <div className="four column wide" key={id}>
        ProductComponent
        <div className="ui link cards">
          <div className="card"></div>
          <div className="image">
            <img src={image} alt={title}></img>
          </div>
          <div className="content">
            <div className="header">{title}</div>
            <div className="meta price">${price}</div>
            <div className="meta">${category}</div>
          </div>
        </div>
      </div>
    );
  });

  return <>{renderList}</>;
};

export default ProductComponent;
