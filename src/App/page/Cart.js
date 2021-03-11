import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import { detailImages } from "../../assets/images/products";
const arr = [
  { path: "/", name: "Home" },
  { path: "/cart", name: "Giỏ hàng" },
];
const formatMoney = (num) => {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,") + "₫";
};
const carts = [
  {
    name: "Lắc tay D & G",
    src: detailImages[5],
    price: 350000,
    quantity: 2,
  },
  {
    name: "Lắc tay D & H",
    src: detailImages[5],
    price: 340000,
    quantity: 5,
  },
  {
    name: "Lắc tay D & G",
    src: detailImages[5],
    price: 350000,
    quantity: 3,
  },
];
function Cart() {
  return (
    <div className="cart">
      <BreadCrumb links={arr} />
      <div className="cart-container max-width">
        <div className="cart-header">
          <h3>Giỏ hàng</h3>
        </div>
        <div className="cart-body">
          <table className="cart-table">
            <thead>
              <tr>
                <th>ảnh</th>
                <th>tên sản phẩm</th>
                <th>giá</th>
                <th>số lượng</th>
                <th>tổng số</th>
                <th>xóa</th>
              </tr>
            </thead>
            <tbody>
              {carts.map((item, i) => {
                return (
                  <tr key={i}>
                    <td>
                      <span>ẢNH</span>
                      <img src={item.src} alt="item" />
                    </td>
                    <td>
                      <span>TÊN SẢN PHẨM</span>
                      {item.name}
                    </td>
                    <td>
                      <span>GIÁ</span>
                      {formatMoney(item.price)}
                    </td>
                    <td>
                      <span>SỐ LƯỢNG</span>
                      {item.quantity}
                    </td>
                    <td>
                      <span>TỔNG SỐ</span>
                      {formatMoney(item.price * item.quantity)}
                    </td>
                    <td>
                      <span>XÓA</span>
                      <i className="fas fa-trash-alt"></i>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div className="cart-action">
            <div>Tiếp tục mua hàng</div>
            <div>Xóa</div>
            <div>Cập nhật</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
