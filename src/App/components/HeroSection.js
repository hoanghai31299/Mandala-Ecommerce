import React from "react";
import { Link } from "react-router-dom";
import Layer from "../../assets/images/Layer.png";
import LayerProduct from "../../assets/images/Layer_product.png";
function HeroSection() {
  return (
    <div className="hero">
      <div className="hero-container">
        <div className="hero-left">
          <img src={LayerProduct} alt="product" />
          <p>
            <h1>GreenVera</h1>
            <span>Sản phẩm tinh dầu dưỡng da mới nhất của Mandala</span>
            <span>GIÁ CHỈ 750.000đ</span>
            <Link to="#">MUA HÀNG</Link>
          </p>
        </div>
        <div className="hero-right">
          <img src={Layer} alt="woman" />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
