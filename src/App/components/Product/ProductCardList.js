import React from "react";
import { Link } from "react-router-dom";
const formatMoney = (num) => {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,") + "₫";
};
function ProductCardList({ product }) {
  const { name, image, price } = product;
  return (
    <div className="product-list-card">
      <div className="product-img">
        <img src={image} alt="product" />
      </div>
      <div className="product-info">
        <h3 className="product-name">{name}</h3>
        <div className="product-like">
          <i className="fas fa-heart"></i>
          <i className="fas fa-heart"></i>
          <i className="fas fa-heart"></i>
          <i className="fas fa-heart"></i>
          <i className="fas fa-heart"></i>
          (4 lượt mua)
        </div>
        <p className="product-description">
          Tự hào được ghi là năm mà Tiffany {"&"} Co là thành lập, bộ sưu tập
          mang tính biểu tượng này cung cấp cho một cái gật đầu với qua trong
          khi thể hiện một cảm giác hiện đại với kiểu dáng đẹp đường cong và
          đường nét mượt mà.
        </p>
        <h3 className="product-price">{formatMoney(price)}</h3>
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
    </div>
  );
}

export default ProductCardList;
