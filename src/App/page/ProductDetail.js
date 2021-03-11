import React, { useState } from "react";
import { detailImages } from "../../assets/images/products";
import BreadCrumb from "../components/BreadCrumb";
import Featured from "../components/ProductDetail/Featured";
import More from "../components/ProductDetail/More";
import ProductImages from "../components/ProductDetail/ProductImages";
import ProductText from "../components/ProductDetail/ProductText";
import Rating from "../components/ProductDetail/Rating";
const arr = [
  { path: "/", name: "Home" },
  { path: "/products", name: "Danh sách sản phẩm" },
  { path: "/product-detail", name: "Lắc tay" },
];
function ProductDetail() {
  const [tabIndex, setTabIndex] = useState(0);
  return (
    <div className="product-detail">
      <BreadCrumb links={arr} />
      <div className="product-detail-container max-width">
        <div className="product-info">
          <ProductImages />
          <div className="description">
            <ProductText />
          </div>
        </div>
        <div className="product-related">
          <div className="tab">
            <div className="title">
              <h3
                className={tabIndex === 0 && "active"}
                onClick={() => setTabIndex(0)}>
                Đặc điểm nổi bật
              </h3>
              <h3
                className={tabIndex === 1 && "active"}
                onClick={() => setTabIndex(1)}>
                Thông tin sản phẩm
              </h3>
              <h3
                className={tabIndex === 2 && "active"}
                onClick={() => setTabIndex(2)}>
                Đánh giá
              </h3>
            </div>
            {tabIndex === 0 ? (
              <Featured />
            ) : tabIndex === 1 ? (
              <More />
            ) : (
              <Rating />
            )}
          </div>
          <div className="best-seller">
            <div className="most-sell">
              <div className="title">
                <h3>Sản phẩm bán chạy</h3>
              </div>
              <div className="product-item">
                <div className="product-img">
                  <img src={detailImages[4]} alt="imag" />
                </div>
                <div className="product-infor">
                  <span className="name">Mỹ phẩm châu âu</span>
                  <div className="product-like">
                    <i className="fas fa-heart"></i>
                    <i className="fas fa-heart"></i>
                    <i className="fas fa-heart"></i>
                    <i className="fas fa-heart"></i>
                    <i className="fas fa-heart"></i>
                    (8 lượt mua)
                  </div>
                  <span className="price">355.000đ</span>
                </div>
              </div>
              <div className="product-item">
                <div className="product-img">
                  <img src={detailImages[4]} alt="imag" />
                </div>
                <div className="product-infor">
                  <span className="name">Mỹ phẩm châu âu</span>
                  <div className="product-like">
                    <i className="fas fa-heart"></i>
                    <i className="fas fa-heart"></i>
                    <i className="fas fa-heart"></i>
                    <i className="fas fa-heart"></i>
                    <i className="fas fa-heart"></i>
                    (8 lượt mua)
                  </div>
                  <span className="price">355.000đ</span>
                </div>
              </div>
              <div className="product-item">
                <div className="product-img">
                  <img src={detailImages[4]} alt="imag" />
                </div>
                <div className="product-infor">
                  <span className="name">Mỹ phẩm châu âu</span>
                  <div className="product-like">
                    <i className="fas fa-heart"></i>
                    <i className="fas fa-heart"></i>
                    <i className="fas fa-heart"></i>
                    <i className="fas fa-heart"></i>
                    <i className="fas fa-heart"></i>
                    (8 lượt mua)
                  </div>
                  <span className="price">355.000đ</span>
                </div>
              </div>
            </div>
            <div className="most-buy">
              <div className="title">
                <h3>Sản phẩm mua nhiều</h3>
              </div>
              <div className="product-item">
                <div className="product-img">
                  <img src={detailImages[4]} alt="imag" />
                </div>
                <div className="product-infor">
                  <span className="name">Mỹ phẩm châu âu</span>
                  <div className="product-like">
                    <i className="fas fa-heart"></i>
                    <i className="fas fa-heart"></i>
                    <i className="fas fa-heart"></i>
                    <i className="fas fa-heart"></i>
                    <i className="fas fa-heart"></i>
                    (8 lượt mua)
                  </div>
                  <span className="price">355.000đ</span>
                </div>
              </div>
              <div className="product-item">
                <div className="product-img">
                  <img src={detailImages[4]} alt="imag" />
                </div>
                <div className="product-infor">
                  <span className="name">Mỹ phẩm châu âu</span>
                  <div className="product-like">
                    <i className="fas fa-heart"></i>
                    <i className="fas fa-heart"></i>
                    <i className="fas fa-heart"></i>
                    <i className="fas fa-heart"></i>
                    <i className="fas fa-heart"></i>
                    (8 lượt mua)
                  </div>
                  <span className="price">355.000đ</span>
                </div>
              </div>
              <div className="product-item">
                <div className="product-img">
                  <img src={detailImages[4]} alt="imag" />
                </div>
                <div className="product-infor">
                  <span className="name">Mỹ phẩm châu âu</span>
                  <div className="product-like">
                    <i className="fas fa-heart"></i>
                    <i className="fas fa-heart"></i>
                    <i className="fas fa-heart"></i>
                    <i className="fas fa-heart"></i>
                    <i className="fas fa-heart"></i>
                    (8 lượt mua)
                  </div>
                  <span className="price">355.000đ</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
