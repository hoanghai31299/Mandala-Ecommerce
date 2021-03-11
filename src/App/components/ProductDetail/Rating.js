import React from "react";
import Avatar from "../../../assets/images/feedback_2--img.png";
function Rating() {
  return (
    <div className="rating">
      <div className="rating-head">
        <div className="title">
          <h3>Hãy để lại nhận xét của bạn</h3>
        </div>
        <div className="rating-form">
          <div className="like">
            <i className="fas fa-heart"></i>
            <i className="fas fa-heart"></i>
            <i className="fas fa-heart"></i>
            <i className="fas fa-heart"></i>
            <i className="fas fa-heart"></i>
          </div>
          <div className="input">
            <span>Nội dung</span>
            <textarea cols="40" rows="5"></textarea>
          </div>
          <button className="comment-btn">Nhận xét</button>
        </div>
      </div>
      <div className="rating-body">
        <div className="title">
          <h3>Nhận xét gần đây</h3>
        </div>
        <div className="product-name">
          <span>LẮC TAY TYFFANY XU HƯỚNG MỚI NHẤT</span>
          <div className="like">
            <i className="fas fa-heart"></i>
            <i className="fas fa-heart"></i>
            <i className="fas fa-heart"></i>
            <i className="fas fa-heart"></i>
            <i className="fas fa-heart"></i>
          </div>
        </div>
        <div className="comment">
          <p>
            Nhận xét bởi <span>Captain America</span> vào ngày 10/02/2021
          </p>
          <div className="comment-body">
            <img src={Avatar} alt="avt" />
            <p>
              Sản phẩm đẹp tuyệt vời. Như một cầu vồng giữa ngày gió đông !!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rating;
