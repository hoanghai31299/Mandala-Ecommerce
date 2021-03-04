import React from "react";
import { Link } from "react-router-dom";
import Background from "../../assets/images/hot-product--background.jpg";
function SliderProduct() {
  //   const tabSliderSettings = {
  //     className: "center",
  //     centerMode: true,
  //     infinite: true,
  //     centerPadding: "60px",
  //     slidesToShow: 3,
  //     focusOnSelect: true,
  //     speed: 500,
  //   };
  return (
    <div
      className="slider-product"
      style={{ backgroundImage: `url(${Background})` }}>
      <div className="slider-product-container">
        <div className="tab">
          <div className="tab-name">
            <Link to="#">Sản phẩm mới</Link>
          </div>
          |
          <div className="tab-name active">
            <Link to="#">Sản phẩm bán chạy</Link>
          </div>
          |
          <div className="tab-name">
            <Link to="#">Sản phẩm đặc biệt</Link>
          </div>
          <span>{"////////////////"}</span>
        </div>
        <div className="category">
          <ul>
            <li>Mỹ phẩm</li>
            <li>Chăm sóc da</li>
            <li>Dành cho tóc</li>
            <li>Nước hoa</li>
            <li>Trang sức</li>
            <li>Quà tặng</li>
          </ul>
        </div>
        <div className="slider"></div>
      </div>
    </div>
  );
}

export default SliderProduct;
