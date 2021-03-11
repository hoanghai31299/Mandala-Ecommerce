import React from "react";
import { Link } from "react-router-dom";

function Popup({ close }) {
  return (
    <div className="popup active">
      <div className="popup-container">
        <div onClick={() => close(false)} className="close-btn"></div>
        <div className="popup-content">
          <h3>GỬI EMAIL</h3>
          <p>
            <span>Hãy gửi email của bạn với chúng tôi để được tư vấn</span>

            <span>Sự hài lòng của các bạn là thành công của chúng tôi.</span>
          </p>

          <div className="search">
            <input type="text" placeholder="Email của bạn..." />
          </div>

          <div className="send">
            <Link to="/">Gửi email</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Popup;
