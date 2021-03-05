import React, { useState } from "react";
import Logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";
import Product from "../../assets/images/product.png";
const cartItems = [
  {
    name: "Áo sơ mi nam",
    price: 120000,
    image: Product,
  },
  {
    name: "Lắc tay D&G",
    price: 345000,
    image: Product,
  },
];
const formatMoney = (num) => {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,") + "₫";
};
function Header() {
  const [expand, setExpand] = useState(false);
  const handleExpandClick = () => {
    setExpand((expand) => !expand);
  };
  return (
    <div className="header">
      <div className="header-container max-width">
        <div className="logo-container">
          <Link className="hg-link" to="/">
            <img src={Logo} alt="logo" className="logo" />
          </Link>
        </div>
        <div className={!expand ? "navigation" : "navigation expand"}>
          <ul className="main-menu">
            <li className="item">
              <Link to="#" className="item-link">
                trang chủ
              </Link>
            </li>
            <li className="item">
              <Link to="#" className="item-link">
                giới thiệu
              </Link>
            </li>
            <li className="item product-list">
              <Link to="#" className="item-link">
                sản phẩm <i className="fas fa-sort-down"></i>
              </Link>
              <ul className="sub-menu">
                <li className="sub-menu-item">
                  <div>dưỡng da</div>
                  <ul className="sub-menu-2">
                    <li>
                      <Link to="#">Áo khoác</Link>
                    </li>
                    <li>
                      <Link to="#">Áo khoác</Link>
                    </li>
                    <li>
                      <Link to="#">Dresses</Link>
                    </li>
                    <li>
                      <Link to="#">Quần/váy</Link>
                    </li>
                    <li>
                      <Link to="#">Quần sortc</Link>
                    </li>
                    <li>
                      <Link to="#">Quần Jean</Link>
                    </li>
                    <li>
                      <Link to="#">Đồ đan</Link>
                    </li>
                    <li>
                      <Link to="#">Áo nỉ</Link>
                    </li>
                  </ul>
                </li>
                <li className="sub-menu-item">
                  <div>nước hoa</div>
                  <ul className="sub-menu-2">
                    <li>
                      <Link to="#">Áo khoác</Link>
                    </li>
                    <li>
                      <Link to="#">Áo khoác</Link>
                    </li>
                    <li>
                      <Link to="#">Dresses</Link>
                    </li>
                    <li>
                      <Link to="#">Quần/váy</Link>
                    </li>
                    <li>
                      <Link to="#">Quần sortc</Link>
                    </li>
                    <li>
                      <Link to="#">Quần Jean</Link>
                    </li>
                    <li>
                      <Link to="#">Đồ đan</Link>
                    </li>
                    <li>
                      <Link to="#">Áo nỉ</Link>
                    </li>
                  </ul>
                </li>
                <li className="sub-menu-item">
                  <div>trang sức</div>
                  <ul className="sub-menu-2">
                    <li>
                      <Link to="#">Áo khoác</Link>
                    </li>
                    <li>
                      <Link to="#">Áo khoác</Link>
                    </li>
                    <li>
                      <Link to="#">Dresses</Link>
                    </li>
                    <li>
                      <Link to="#">Quần/váy</Link>
                    </li>
                    <li>
                      <Link to="#">Quần sortc</Link>
                    </li>
                    <li>
                      <Link to="#">Quần Jean</Link>
                    </li>
                    <li>
                      <Link to="#">Đồ đan</Link>
                    </li>
                    <li>
                      <Link to="#">Áo nỉ</Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li className="item">
              <Link to="#" className="item-link">
                tin tức
              </Link>
            </li>
            <li className="item">
              <Link to="#" className="item-link">
                bản đồ
              </Link>
            </li>
            <li className="item">
              <Link to="#" className="item-link">
                liên hệ
              </Link>
            </li>
          </ul>
        </div>
        <div className="sub-navigation">
          <div className="navigation-cart">
            <Link to="#">
              <i class="fas fa-shopping-cart"></i>
            </Link>
            <div className="cart-item-container">
              <ul className="navigation-cart-items">
                {cartItems.map((it, index) => (
                  <CartItem key={index} item={it}></CartItem>
                ))}
              </ul>
              <div className="navigation-cart-total">
                <span>Tổng số</span>
                <span className="navigation-total-price">
                  {formatMoney(cartItems.reduce((a, b) => a.price + b.price))}
                </span>
              </div>
              <div>
                <Link className="link-to-cart" to="#">
                  Giỏ hàng
                </Link>
              </div>
            </div>
          </div>
          <div className="navigation-search">
            <i className="fas fa-search"></i>
          </div>
        </div>
        <div className="navigation-btn">
          <div
            className={!expand ? "humberger" : "humberger active"}
            onClick={handleExpandClick}>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
