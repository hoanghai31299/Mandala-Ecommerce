import React from "react";
const formatMoney = (num) => {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,") + "₫";
};
function CartItem({ item }) {
  return (
    <li className="navigation-cart-item">
      <div className="item-image">
        <img src={item.image} alt="product" />
      </div>
      <div className="cart-item-info">
        <span className="cart-item-name">{item.name}</span>
        <span className="cart-item-price">{formatMoney(item.price)}</span>
      </div>
      <div className="cancel-button">
        <i className="far fa-times-circle"></i>
      </div>
    </li>
  );
}

export default CartItem;
