import React from "react";
import { Link } from "react-router-dom";
const formatMoney = (num) => {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,") + "₫";
};
function ProductCard({ product }) {
  const { name, image, brand, prePrice, price } = product;
  return (
    <div className="product-card">
      <div className="product-info">
        <img src={image} alt="product" />
        <p className="product-text">
          <h5>{brand}</h5>
          <h4>{name}</h4>
          <p>
            <span>{formatMoney(price)}</span>
            <span>{formatMoney(prePrice)}</span>
          </p>
        </p>
      </div>
      <div className="product-action">
        <Link to="/product-detail">Mua hàng</Link>
        <Link>
          <i className="fas fa-heart"></i>
        </Link>
        <Link to="/product-detail">
          <i className="fas fa-arrows-alt"></i>
        </Link>
      </div>
    </div>
  );
}

export default ProductCard;
