/**
 * @desc: 장바구니 페이지
 */

import Table from "react-bootstrap/Table";

const Cart = () => {
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
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default Cart;
