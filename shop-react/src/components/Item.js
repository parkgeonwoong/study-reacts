/**
 * @desc: 데이터에서 하나씩 뽑아온 컴포넌트
 */

import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Item.css";

const Item = ({ product, url, index }) => {
  const navigate = useNavigate();

  return (
    <div
      className="col-md-4"
      onClick={() => navigate(`/detail/${product.id}`)}
      style={{ cursor: "pointer" }}
    >
      <div>
        <img src={url[index]} />
      </div>
      <h4>{product.title}</h4>
      <p>{product.price}</p>
    </div>
  );
};

export default Item;
