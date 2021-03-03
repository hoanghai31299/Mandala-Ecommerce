import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
import BlogImage from "../../assets/images/blog-img.png";
const tags = [
  "Đồng hồ",
  "Túi",
  "Phụ kiện",
  "Đồng hồ",
  "Áo phông",
  "Nước hoa nữ",
  "Túi",
  "Phụ kiện",
  "Giày",
  "Sandal",
  "Áo sơ mi",
  "Nước hoa",
  "Trẻ em",
  "Thời trang nữ",
  "Thời trang nam",
];
function HomeFooter() {
  return (
    <div className="home-footer">
      <div className="home-footer-container">
        <div className="links-container">
          <Link className="link-item">
            <div className="logo-icon">
              <i className="fab fa-google-plus-g"></i>
            </div>
            <span className="logo-name">google</span>
          </Link>
          <Link className="link-item">
            <div className="logo-icon">
              <i className="fab fa-instagram"></i>
            </div>
            <span className="logo-name">instagram</span>
          </Link>
          <Link className="link-item">
            <div className="logo-icon">
              <i className="fab fa-twitter"></i>
            </div>
            <span className="logo-name">twitter</span>
          </Link>
          <Link className="link-item">
            <div className="logo-icon">
              <i className="fab fa-facebook"></i>
            </div>
            <span className="logo-name">facebook</span>
          </Link>
          <Link className="link-item">
            <div className="logo-icon">
              <i className="fab fa-pinterest"></i>
            </div>
            <span className="logo-name">pinterest</span>
          </Link>
          <Link className="link-item">
            <div className="logo-icon">
              <i className="fab fa-linkedin"></i>
            </div>
            <span className="logo-name">linkedin</span>
          </Link>
        </div>
        <div className="action-container">
          <div className="action-item">
            <div className="action-item-title">
              về chúng tôi
              <span>{"////////////////"}</span>
            </div>
            <div className="content-about-us">
              <img src={Logo} alt="logo" />
              <p>
                <h2>GIỚI THIỆU CHUNG VỀ MỸ PHẨM HANDMADE MANDALA</h2>
                <p>
                  Hi, chào các nàng ... sau khá nhiều lời hứa hão thì hôm nay tớ
                  quay lại hâm nóng cái Blog này vào một ngày đầu hè nóng oi
                  bức, khi mà dân tình xô nhau đi tắm Free để giải nhiệt.Hi,
                  chào các nàng ... sau khá nhiều lời hứa hão thì hôm nay tớ
                  quay lại hâm nóng cái Blog này vào một ngày đầu hè nóng oi
                  bức, khi mà dân tình xô nhau đi tắm Free để giải nhiệt.Hi,
                  chào các nàng ... sau khá nhiều lời hứa hão thì hôm nay tớ
                  quay lại hâm nóng cái Blog này vào một ngày đầu hè nóng oi
                  bức, khi mà dân tình xô nhau đi tắm Free để giải nhiệt.
                </p>
                <Link to="#">Xem thêm</Link>
              </p>
            </div>
          </div>
          <div className="action-item">
            <div className="action-item-title">
              blog
              <span>{"////////////////"}</span>
            </div>
            <div className="content-blog">
              <img src={BlogImage} alt="blog" />

              <p>
                <h2>REVIEW SON KEM BOURJOIS VELVET</h2>
                Hi, chào các nàng ... sau khá nhiều lời hứa hão thì hôm nay tớ
                quay lại hăm nóng cái Blog này vào một ngày đầu hè nóng oi bức,
                khi mà dân tình xô nhau đi tắm Free để giải nhiệt.
                <Link to="#">Bởi NamTran(19/9/2020)</Link>
              </p>
              <div className="read-more">
                <Link to="#">Xem thêm</Link>
                <Link to="#">23 bình luận</Link>
              </div>
            </div>
          </div>
          <div className="action-item">
            <div className="action-item-title">
              gửi email cho chúng tôi
              <span>{"////////////////"}</span>
            </div>
            <form className="form-send-mail">
              <input type="text" placeholder="Email của bạn" />
              <span>Gửi email để nhận những ưu đãi mới nhất</span>
              <button onClick={(e) => e.preventDefault()}>gửi</button>
            </form>
          </div>
          <div className="action-item">
            <div className="action-item-title">
              tag sản phẩm
              <span>{"////////////////"}</span>
            </div>
            <div className="tags-container">
              {tags.map((tag) => (
                <span className="single-tag">{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeFooter;
