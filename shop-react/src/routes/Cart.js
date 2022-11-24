/**
 * @desc: 장바구니 페이지
 */

import { memo, useState } from "react";
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import { addCount, removeItem } from "../store";
import { changeName, incrementAge } from "../store/userSlice";

// memo 재랜더링 방지
const Child = memo(function () {
  console.log("reRendering");
  return <div>자식임</div>;
});

const Cart = () => {
  // 3️⃣ Redux store 가져와줌
  const reduxState = useSelector((state) => {
    return state;
  });

  // ✅ store.js로 요청하는 함수
  const dispatch = useDispatch();

  return (
    <div>
      {/* 표(테이블) */}
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경하기</th>
          </tr>
        </thead>
        <tbody>
          {/* 리덕스를 데이터바인드 */}
          {reduxState.cart.map((item, index) => {
            return (
              <tr key={item.id}>
                <td>{index}</td>
                <td>{item.name}</td>
                <td>{item.count}</td>
                <td>
                  <button
                    onClick={() => {
                      dispatch(addCount(item.id));
                    }}
                  >
                    +
                  </button>

                  <button
                    onClick={() => {
                      dispatch(removeItem(item.id));
                    }}
                  >
                    삭제
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default Cart;
