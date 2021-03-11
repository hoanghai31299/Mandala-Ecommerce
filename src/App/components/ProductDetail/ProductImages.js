import React, { useState } from "react";
import { detailImages } from "../../../assets/images/products";
function ProductImages({ images }) {
  const [current, setCurrent] = useState(detailImages[0]);
  const [page, setPage] = useState(1);
  const next = () => {
    if (page === Math.ceil(detailImages.length / 4)) return;
    setPage((page) => page + 1);
  };
  const prev = () => {
    if (page === 1) return;
    setPage((page) => page - 1);
  };
  return (
    <div className="product-images">
      <div className="list-thumbnail">
        <i onClick={prev} className="fas fa-arrow-up"></i>
        <div className="list-items">
          {detailImages.slice((page - 1) * 4, 4 * page).map((src, i) => (
            <div
              key={i}
              onMouseEnter={() => {
                setCurrent(src);
              }}
              className={
                current === src ? "thumbnail-item active" : "thumbnail-item"
              }>
              <img src={src} alt="product" />
            </div>
          ))}
        </div>
        <i onClick={next} className="fas fa-arrow-down"></i>
      </div>
      <div className="main-view">
        <img src={current} alt="current" />
      </div>
    </div>
  );
}

export default ProductImages;
