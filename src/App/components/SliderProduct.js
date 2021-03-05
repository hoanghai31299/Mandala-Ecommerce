import React, { useState } from "react";
import { Link } from "react-router-dom";
import Background from "../../assets/images/hot-product--background.jpg";
import ProductCard from "./ProductCard";
import ImageArray from "../../assets/images/products";
import Slider from "react-slick";
const products = [
  {
    image: ImageArray[0],
    name: "Mỹ phẩm Châu Âu",
    brand: "DEBORA",
    prePrice: 400000,
    price: 350000,
  },
  {
    image: ImageArray[1],
    name: "Mỹ phẩm Châu Á",
    brand: "TIFFANY",
    prePrice: 400000,
    price: 350000,
  },
  {
    image: ImageArray[2],
    name: "Mỹ phẩm Châu Mỹ",
    brand: "DREW",
    prePrice: 400000,
    price: 350000,
  },
  {
    image: ImageArray[3],
    name: "Mỹ phẩm Pháp",
    brand: "CHANNEL",
    prePrice: 400000,
    price: 350000,
  },
  {
    image: ImageArray[4],
    name: "Mỹ phẩm Italya",
    brand: "SWEET",
    prePrice: 400000,
    price: 350000,
  },
  {
    image: ImageArray[5],
    name: "Mỹ phẩm Thôi",
    brand: "DEBORA",
    prePrice: 400000,
    price: 350000,
  },
  {
    image: ImageArray[6],
    name: "Mỹ phẩm Châu Âu",
    brand: "DEBORA",
    prePrice: 400000,
    price: 350000,
  },
  {
    image: ImageArray[7],
    name: "Mỹ phẩm Châu Âu",
    brand: "DEBORA",
    prePrice: 400000,
    price: 350000,
  },
  // {
  //   image: ImageArray[8],
  //   name: "Mỹ phẩm Châu Âu",
  //   brand: "DEBORA",
  //   prePrice: 400000,
  //   price: 350000,
  // },
];
function Arrow(props) {
  const { className, style, onClick, arrowClass } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}>
      {" "}
      <i className={arrowClass}> </i>
    </div>
  );
}

function SliderProduct() {
  const settings = {
    className: "center",
    centerMode: true,
    lazyLoad: true,
    adaptiveHeight: true,
    centerPadding: "10%",
    speed: 500,
    arrows: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <Arrow arrowClass="fas fa-arrow-right" />,
    prevArrow: <Arrow arrowClass="fas fa-arrow-left" />,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };
  const [activeTab, setActiveTab] = useState(2);
  return (
    <div
      className="slider-product"
      style={{ backgroundImage: `url(${Background})` }}>
      <div className="slider-product-container max-width">
        <div className="tab">
          <div
            onClick={() => setActiveTab(1)}
            className={activeTab !== 1 ? "tab-name" : "tab-name active"}>
            <Link to="#">Sản phẩm mới</Link>
          </div>
          <span className="dummy-span">|</span>
          <div
            onClick={() => setActiveTab(2)}
            className={activeTab !== 2 ? "tab-name" : "tab-name active"}>
            <Link to="#">Sản phẩm bán chạy</Link>
          </div>
          <span className="dummy-span">|</span>
          <div
            onClick={() => setActiveTab(3)}
            className={activeTab !== 3 ? "tab-name" : "tab-name active"}>
            <Link to="#">Sản phẩm đặc biệt</Link>
          </div>
          <span>{"////////////////"}</span>
        </div>
        <div className="category">
          <ul>
            <li>Mỹ phẩm</li>
            <li>Chăm sóc da</li>
            <li>Dành cho tóc</li>
            <li>Nước hoa</li>
            <li>Trang sức</li>
            <li>Quà tặng</li>
          </ul>
        </div>
      </div>
      <div className="slider">
        <Slider {...settings}>
          {products.map((prod, i) => (
            <ProductCard key={i} product={prod} />
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default SliderProduct;
