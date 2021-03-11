import React, { useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import ProductGrid from "../components/Product/ProductGrid";
import ProductList from "../components/Product/ProductList";
import ImageArray from "../../assets/images/products";
const tags = [
  "Hoa tai",
  "Son",
  "Nước hoa",
  "Giày",
  "Sandal",
  "Áo sơ mi",
  "Thời trang nữ",
];
const paths = [
  { path: "/", name: "Home" },
  { path: "/products", name: "Sản phẩm" },
];
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
];
function Products() {
  const [current, setCurrent] = useState(1);
  const [page, setPage] = useState(1);
  const [viewList, setViewList] = useState(false);
  const limit = 6;
  return (
    <div className="products">
      <BreadCrumb links={paths} />
      <div className="product-banner">
        <div className="banner-container max-width">
          <h2>Giảm giá 30%</h2>
          <p>
            <span>Trong vòng 3 ngày</span>
            <span>(25/5 - 28/5/2015)</span>
          </p>
        </div>
      </div>
      <div className="products-container max-width">
        <div className="products-body">
          <div className="products-left">
            <div className="menu-product">
              <h2>
                <i class="fas fa-bars"></i>
                {"  "}danh mục sản phẩm
              </h2>
              <div class="category">
                <ul
                  className={
                    current === 1 ? "category__list current" : "category__list"
                  }
                  onClick={(e) => setCurrent(1)}>
                  Mỹ phẩm
                  <li className="category__item">sữa rửa mặt</li>
                  <li className="category__item">kem dưỡng da</li>
                  <li className="category__item">kem chống nắng</li>
                  <li className="category__item">son môi</li>
                </ul>
                <ul
                  className={
                    current === 2 ? "category__list current" : "category__list"
                  }
                  onClick={(e) => setCurrent(2)}>
                  trang sức
                  <li className="category__item">Vòng tay</li>
                  <li className="category__item">Nhẫn</li>
                  <li className="category__item">Lắc chân</li>
                  <li className="category__item">Phụ kiện khác</li>
                  <li className="category__item">Giày Lưới Giày Mọi</li>
                </ul>
                <ul
                  className={
                    current === 3 ? "category__list current" : "category__list"
                  }
                  onClick={(e) => setCurrent(3)}>
                  phụ kiện
                  <li className="category__item">túi xách</li>
                  <li className="category__item">đồng hồ</li>
                </ul>
                <ul
                  className={
                    current === 4 ? "category__list current" : "category__list"
                  }
                  onClick={(e) => setCurrent(4)}>
                  nước hoa
                  <li className="category__item">nước hoa việt nam</li>
                  <li className="category__item">nước hoa mỹ</li>
                  <li className="category__item">nước hoa pháp</li>
                  <li className="category__item">nước hoa nhật</li>
                  <li className="category__item">nước hoa quảng nam</li>
                </ul>
              </div>
            </div>
            <div className="compare">
              <h3>So sánh sản phẩm</h3>
              <span>Bạn chưa có sản phẩm nào để so sánh</span>
            </div>
            <div className="tag">
              <h3>tag sản phẩm</h3>
              <div className="tag-list">
                {tags.map((tag) => (
                  <span className="single-tag">{tag}</span>
                ))}
              </div>
            </div>
            <div className="store">
              <span>Madala Store</span>{" "}
            </div>
          </div>
          <div className="product-right">
            <div className="product-pagination">
              <div className="change-view-action">
                <i
                  className={`${viewList ? "active" : ""} fas fa-list-ul`}
                  onClick={() => setViewList(true)}></i>
                <i
                  className={`${!viewList ? "active" : ""} fas fa-th`}
                  onClick={() => setViewList(false)}></i>
              </div>
              <div className="pagination">
                <ul>
                  <li
                    className={page === 1 && "disabled"}
                    onClick={() => setPage((page) => page - 1)}>
                    <i className="fas fa-caret-left"></i>
                  </li>
                  <li
                    onClick={() => setPage(1)}
                    className={page === 1 && "current"}>
                    1
                  </li>
                  <li
                    onClick={() => setPage(2)}
                    className={page === 2 && "current"}>
                    2
                  </li>
                  <li
                    onClick={() => setPage(3)}
                    className={page === 3 && "current"}>
                    3
                  </li>
                  <li
                    className={page === 3 && "disabled"}
                    onClick={() => setPage((page) => page + 1)}>
                    <i className="fas fa-caret-right"></i>
                  </li>
                </ul>
              </div>
            </div>
            <div className="product-view">
              {!viewList ? (
                <ProductGrid
                  products={products.slice((page - 1) * limit, limit * page)}
                />
              ) : (
                <ProductList
                  products={products.slice((page - 1) * limit, limit * page)}
                />
              )}
            </div>
            <div className="product-pagination">
              <div className="change-view-action">
                <i
                  className={`${viewList ? "active" : ""} fas fa-list-ul`}
                  onClick={() => setViewList(true)}></i>
                <i
                  className={`${!viewList ? "active" : ""} fas fa-th`}
                  onClick={() => setViewList(false)}></i>
              </div>
              <div className="pagination">
                <ul>
                  <li
                    className={page === 1 && "disabled"}
                    onClick={() => setPage((page) => page - 1)}>
                    <i className="fas fa-caret-left"></i>
                  </li>
                  <li
                    onClick={() => setPage(1)}
                    className={page === 1 && "current"}>
                    1
                  </li>
                  <li
                    onClick={() => setPage(2)}
                    className={page === 2 && "current"}>
                    2
                  </li>
                  <li
                    onClick={() => setPage(3)}
                    className={page === 3 && "current"}>
                    3
                  </li>
                  <li
                    className={page === 3 && "disabled"}
                    onClick={() => setPage((page) => page + 1)}>
                    <i className="fas fa-caret-right"></i>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
