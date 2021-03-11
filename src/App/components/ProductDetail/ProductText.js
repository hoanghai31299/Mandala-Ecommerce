import React from "react";
import { Link } from "react-router-dom";

function ProductText() {
  return (
    <div className="product-text">
      <h3>LẮC TAY TYFFANY XU HƯỚNG MỚI NHẤT</h3>
      <h5>TYFFANY MS 3201</h5>
      <p className="price">
        <span>950.000đ</span>
        <span>999.000đ</span>
      </p>
      <p className="des">
        Không thể phủ nhận, thời trang và phong cách chính là “tuyên ngôn” không
        lời mạnh mẽ nhất của mỗi người phụ nữ. Do đó, việc mua sắm thời trang
        trở thành niềm vui, và có khi là nguồn cảm hứng vô tận để phái đẹp sống
        vui, sống đẹp hơn trong mắt nửa còn lại của thế giới. Để F5 tủ đồ của
        mình trước những xu hướng ngày một đa dạng hơn trong thế giới thời
        trang, nhiều chị em không ngần ngại chi tiêu “mạnh tay” để sở hữu những
        món đồ yêu thích.
      </p>
      <div className="select">
        <span>Màu sắc</span>
        <select>
          <option value="">Chọn màu</option>
          <option value="">Màu đỏ</option>
          <option value="">Màu xanh</option>
          <option value="">Màu tím</option>
        </select>
      </div>
      <div className="select">
        <span>Chọn size</span>
        <select>
          <option value="">Chọn size</option>
          <option value="">12</option>
          <option value="">13</option>
          <option value="">14</option>
        </select>
      </div>
      <div className="select">
        <span>số lượng</span>
        <select>
          <option value="">Số lượng</option>
          <option value="">12</option>
          <option value="">13</option>
          <option value="">14</option>
        </select>
      </div>
      <div className="product-action">
        <Link>Mua hàng</Link>
        <Link>
          <i className="fas fa-heart"></i>
        </Link>
        <Link>
          <i className="fas fa-arrows-alt"></i>
        </Link>
      </div>
      <div className="social-network">
        <span>Shipping and returns</span>
        <ul className="social-list">
          <li className="btn-blue">
            <i className="fab fa-facebook-f"></i>| <span>Like</span>
          </li>
          <li className="btn-red">
            <i className="fab fa-google-plus-g"></i>| <span>+1</span>
          </li>
          <li>
            <i className="fab fa-instagram"></i>| <span>Share</span>
          </li>

          <li className="btn-blue">
            <i className="fab fa-twitter"></i>| <span>Twwet</span>
          </li>
          <li>
            <i className="fab fa-linkedin-in"></i>| <span>in it</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ProductText;
