import React from "react";

function Banner() {
  return (
    <div className="home-banner">
      <div className="home-banner-container">
        <div className="home-banner-item">
          <i className="fas fa-globe-europe"></i>
          <span>Miễn phí vận chuyển trên toàn quốc</span>
        </div>
        <div className="home-banner-item">
          <i className="fas fa-gift"></i>
          <span>Nhận ngay quà trị giá 690.000đ</span>
        </div>
        <div className="home-banner-item">
          <i className="fas fa-star"></i>
          <span>Giảm 40% cho đơn hàng trên 5.000.000đ</span>
        </div>
      </div>
    </div>
  );
}

export default Banner;
