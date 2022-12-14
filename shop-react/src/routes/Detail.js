import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/Detail.css";
import styled from "styled-components";
import Nav from "react-bootstrap/Nav";
import TabComponent from "../components/TabComponent";
import { useDispatch } from "react-redux";
import { addItem } from "../store.js";

/**
 * @desc: styled-components
 */
const Yellow = styled.button`
  background: ${(props) => props.bg};
  color: ${(props) => (props.bg == "blue" ? "white" : "black")};
  padding: 10px;
`;

const Newbtn = styled.button(Yellow);

const Detail = ({ product, url }) => {
  const [countBool, setCountBool] = useState(true);
  const [text, setText] = useState("");
  // 탭 상태 저장
  const [tabs, setTabs] = useState(0);
  // fadein,out
  const [fade, setFade] = useState("");

  const { id } = useParams();
  const findProd = product.find((item) => {
    return item.id == id;
  });

  // redux dispatch
  const dispatch = useDispatch();

  // 최근 본 상품 localStorage 담기
  /**
   * 누가 detail 페이지에 접속하면
   * 그 페이지에 보이는 상품 id를 가져와서
   * localstorage에 watched 항목에 추가
   */
  useEffect(() => {
    const localId = JSON.parse(localStorage.getItem("watched"));

    // 배열 중복 안되게 함
    if (!localId.includes(id)) {
      localId.push(id);
      localStorage.setItem("watched", JSON.stringify(localId));
    }
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setCountBool(false);
    }, 2000);

    if (isNaN(text)) {
      alert("No Number!");
      setText("");
    }
  }, [text]);

  // Detail 화면 애니메이션 적용해보기
  useEffect(() => {
    setTimeout(() => {
      setFade("end");
    }, 100);

    return () => {
      setFade("");
    };
  }, []);

  return (
    <div className={`container start ${fade}`}>
      {countBool ? (
        <div className="alert alert-warning">2초이내 구매시 할인</div>
      ) : null}
      <div className="row">
        <div className="col-md-6">
          <img src={url[id]} width="100%" />
        </div>
        <div className="col-md-6">
          <input
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
            placeholder="입력하세요."
          />
          <h4 className="pt-5">{findProd.title}</h4>
          <p>{findProd.content}</p>
          <p>{findProd.price} 원</p>

          {/*  장바구니에 담아보기  */}
          <button
            className="btn btn-danger"
            onClick={() => {
              dispatch(addItem({ id: id, name: findProd.title, count: 1 }));
              alert("장바구니에 담았습니다.");
            }}
          >
            주문하기
          </button>
        </div>
      </div>

      {/* 탭 UI */}
      <Nav variant="tabs" defaultActiveKey="link0">
        <Nav.Item>
          <Nav.Link eventKey="link0" onClick={() => setTabs(0)}>
            Option 0
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link1" onClick={() => setTabs(1)}>
            Option 1
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link2" onClick={() => setTabs(2)}>
            Option 2
          </Nav.Link>
        </Nav.Item>
      </Nav>

      <TabComponent tabs={tabs} />
    </div>
  );
};

export default Detail;
