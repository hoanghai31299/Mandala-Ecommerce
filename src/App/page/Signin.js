import React from "react";
import { Link } from "react-router-dom";
import BreadCrumb from "../components/BreadCrumb";
const arr = [
  { path: "/", name: "Home" },
  { path: "/blogs", name: "Blog" },
];
function Signin() {
  return (
    <div className="signin">
      <BreadCrumb links={arr} />
      <div className="signin-container max-width">
        <div className="signin-header">
          <h3>đăng nhập</h3>
          <Link to="/signup" className="sign-button">
            Đăng ký
          </Link>
        </div>
        <div className="signin-form">
          <p>
            <h4>Khách hàng đăng ký</h4>
            <span>Nếu bạn có tài khoản, vui lòng đăng nhập</span>
          </p>
          <form>
            <div className="form-item">
              <h5>Địa chỉ email *</h5>
              <input type="text" />
            </div>
            <div className="form-item">
              <h5>Mật khẩu *</h5>
              <input type="text" />
            </div>
          </form>
          <div className="form-action">
            <Link to="/forget">Quên mật khẩu?</Link>
            <button>Đăng nhập</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signin;
