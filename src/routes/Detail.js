import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const Yellow = styled.button`
  background: ${(props) => props.bg};
  color: ${(props) => (props.bg == "blue" ? "white" : "black")};
  padding: 10px;
`;

const Newbtn = styled.button(Yellow);

const Detail = ({ product, url }) => {
  const { id } = useParams();

  const findProd = product.find((item) => {
    return item.id == id;
  });

  return (
    <div className="container">
      <div className="row">
        <Yellow bg="blue">btn</Yellow>
        <div className="col-md-6">
          <img src={url[id]} width="100%" />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{findProd.title}</h4>
          <p>{findProd.content}</p>
          <p>{findProd.price} 원</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>
    </div>
  );
};

export default Detail;
