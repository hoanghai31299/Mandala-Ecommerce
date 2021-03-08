import React from "react";
import { Link } from "react-router-dom";
import errorImg from "../../assets/images/404.png";
function Error() {
  return (
    <div className="error">
      <div className="error-container">
        <img src={errorImg} alt="error404" />
        <h2>Đây không phải trang web bạn đang tìm kiếm</h2>
        <div className="search">
          <input type="text" />
          <i className="fas fa-search"></i>
        </div>
        <div>
          <Link to="/">Liên hệ</Link>
          <span>|</span>
          <Link to="/">Trang chủ</Link>
        </div>
      </div>
    </div>
  );
}

export default Error;
