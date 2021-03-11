import React from "react";
import { Link } from "react-router-dom";
import FooterExtend from "../../assets/images/footer_extend.png";
function Footer() {
  return (
    <div className="footer">
      <div className="footer-container max-width">
        <ul className="footer-list">
          <li className="footer-item">
            <div className="footer-item-heading">liên hệ với chúng tôi</div>
            <ul className="footer-sub-menu">
              <li>
                <Link to="#">
                  <i className="fas fa-map-marker-alt"></i>
                  <span> Tầng 4, Tòa nhà Hanoi Group Số 442 Đội Cấn,</span>
                  <span className="dummy-span">
                    P.Cống Vị, Q. Ba Đình, Hà Nội
                  </span>
                </Link>
              </li>
              <li>
                <Link to="#">
                  <i className="fas fa-phone"></i> (04) 6674 2332 -{" "}
                  <i className="fas fa-fax"></i> (04) 3786 8904
                </Link>
              </li>
              <li>
                <Link to="#">
                  <i className="fas fa-phone"></i> (08) 6680 9686 -{" "}
                  <i className="fas fa-envelope-open"></i> Support@bizweb.vn
                </Link>
              </li>
            </ul>
          </li>
          <li className="footer-item">
            <div className="footer-item-heading">chuyển hàng</div>
            <ul className="footer-sub-menu">
              <li>
                <Link to="/about">Mua sắm trực tuyến</Link>
              </li>
              <li>
                <Link to="/about">Từ chúng tôi</Link>
              </li>
              <li>
                <Link to="/about">Chính sách vận chuyển</Link>
              </li>
              <li>
                <Link to="#">Thông tin vận chuyển</Link>
              </li>
            </ul>
          </li>
          <li className="footer-item">
            <div className="footer-item-heading">hỗ trợ</div>
            <ul className="footer-sub-menu">
              <li>
                <Link to="/about">Về chúng tôi</Link>
              </li>
              <li>
                <Link to="/about">Thanh toán an toàn</Link>
              </li>
              <li>
                <Link to="/about">Tùy chọn vận chuyển</Link>
              </li>
              <li>
                <Link to="/about">Chính sách vận chuyển</Link>
              </li>
            </ul>
          </li>
          <li className="footer-item">
            <div className="footer-item-heading">thông tin</div>
            <ul className="footer-sub-menu">
              <li>
                <Link to="/contact">Điều khoản</Link>
              </li>
              <li>
                <Link to="/contact">Trả hàng</Link>
              </li>
              <li>
                <Link to="/contact">Chính sách riêng tư</Link>
              </li>
              <li>
                <Link to="#">Điều kiện</Link>
              </li>
            </ul>
          </li>
          <li className="footer-item">
            <div className="footer-item-heading">my account</div>
            <ul className="footer-sub-menu">
              <li>
                <Link to="/cart">Xem giỏ hàng</Link>
              </li>
              <li>
                <Link to="/cart">Sản phẩm yêu thích</Link>
              </li>
              <li>
                <Link to="/account">Kiểm tra</Link>
              </li>
              <li>
                <Link to="/account">Theo dõi đơn hàng</Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="footer-extend">
        <div className="footer-copyright  max-width">
          <div>© Copyright 2008-2014 DKT Technology JSC</div>
          <div>
            <img src={FooterExtend} alt="extend" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
