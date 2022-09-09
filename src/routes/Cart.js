/**
 * @desc: 장바구니 페이지
 */

import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import { changeName, increment } from "../store";

const Cart = () => {
  // 3️⃣ Redux store 가져와줌
  const reduxState = useSelector((state) => {
    return state;
  });
  // console.log(...reduxState);

  // store.js로 요청하는 함수
  const dispatch = useDispatch();

  console.log(reduxState.cart[0].count);

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
          {reduxState.cart.map((item, id) => {
            return (
              <tr key={id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.count}</td>
                <td>
                  <button
                    onClick={() => {
                      dispatch(increment(1));
                    }}
                  >
                    +
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
