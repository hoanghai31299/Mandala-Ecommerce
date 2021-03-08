import React from "react";
import { useHistory } from "react-router-dom";
import BreadCrumb from "../components/BreadCrumb";
const arr = [
  { path: "/", name: "Home" },
  { path: "/signup", name: "Đăng ký" },
];
function Signup() {
  const history = useHistory();

  return (
    <div className="signin">
      <BreadCrumb links={arr} />
      <div className="signin-container max-width">
        <div className="signin-header">
          <h3>đăng ký</h3>
        </div>
        <div className="signin-form signup">
          <p>
            <h4>thông tin cá nhân</h4>
          </p>
          <form>
            <div className="form-item">
              <h5>Họ *</h5>
              <input type="text" />
            </div>
            <div className="form-item">
              <h5>Tên *</h5>
              <input type="text" />
            </div>
            <div className="form-item">
              <h5>Email*</h5>
              <input type="text" />
            </div>
            <div className="form-item">
              <h5>Pasword*</h5>
              <input type="text" />
            </div>
          </form>
          <p>
            <h4>thông tin đăng nhập</h4>
          </p>
          <form>
            <div className="form-item">
              <h5>Mật khẩu *</h5>
              <input type="password" />
            </div>
            <div className="form-item">
              <h5>Nhập lại mật khẩu *</h5>
              <input type="password" />
            </div>
          </form>
          <div className="form-action">
            <button>Gửi</button>
            <button onClick={() => history.goBack()}>
              <i className="fas fa-arrow-left"></i> Quay lại
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
