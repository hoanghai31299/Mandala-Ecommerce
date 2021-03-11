import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import AboutImg from "../../assets/images/about.png";
import Logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
const arr = [
  { path: "/", name: "Home" },
  { path: "/about", name: "Về chúng tôi" },
];
function About() {
  return (
    <div className="about">
      <BreadCrumb links={arr} />
      <div className="about-container max-width">
        <div className="about-header">
          <h3>Về chúng tôi</h3>
        </div>
        <div className="about-body">
          <div className="about-left">
            <img src={AboutImg} alt="aboutus" />
          </div>
          <div className="about-right">
            <img src={Logo} alt="logo" />
            <h2>GIỚI THIỆU CHUNG VỀ MỸ PHẨM HANDMADE MANDALA</h2>
            <p>
              Hi, chào các nàng ... sau khá nhiều lời hứa hão thì hôm nay tớ
              quay lại hâm nóng cái Blog này vào một ngày đầu hè nóng oi bức,
              khi mà dân tình xô nhau đi tắm Free để giải nhiệt.Hi, chào các
              nàng ... sau khá nhiều lời hứa hão thì hôm nay tớ quay lại hâm
              nóng cái Blog này vào một ngày đầu hè nóng oi bức, khi mà dân tình
              xô nhau đi tắm Free để giải nhiệt.Hi, chào các nàng ... sau khá
              nhiều lời hứa hão thì hôm nay tớ quay lại hâm nóng cái Blog này
              vào một ngày đầu hè nóng oi bức, khi mà dân tình xô nhau đi tắm
              Free để giải nhiệt.
            </p>
            <Link to="#">Xem thêm</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
