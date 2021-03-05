import React from "react";
import Image1 from "../../assets/images/item-mother-1.png";
import Image2 from "../../assets/images/item-mother-2.png";
import Image3 from "../../assets/images/item-mother-3.png";
import Image4 from "../../assets/images/item-mother-4.png";
import Big1 from "../../assets/images/item_2--right--img.png";
import Big2 from "../../assets/images/Item_3--left--img.jpg";
function ImageGrid() {
  return (
    <div className="image-grid">
      <div className="image-grid-container max-width">
        <img src={Image1} alt="product" className="image-grid-item" />
        <img src={Image2} alt="product" className="image-grid-item" />
        <div className="image-grid-item video">
          <img src={Big1} alt="product" />
          <div className="play-button">
            <i className="fas fa-caret-right"></i>
          </div>
        </div>

        <img src={Big2} alt="product" className="image-grid-item" />
        <img src={Image3} alt="product" className="image-grid-item" />
        <img src={Image4} alt="product" className="image-grid-item" />
      </div>
    </div>
  );
}

export default ImageGrid;
