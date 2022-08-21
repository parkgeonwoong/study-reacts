import React from "react";
import "../styles/Item.css";

const Item = ({ product, url, index }) => {
  return (
    <div className="col-md-4">
      <div>
        <img src={url[index]} />
      </div>
      <h4>{product.title}</h4>
      <p>{product.price}</p>
    </div>
  );
};

export default Item;
