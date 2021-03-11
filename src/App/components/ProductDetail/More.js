import React from "react";
import { detailImages } from "../../../assets/images/products/index";
function More() {
  return (
    <div className="more">
      <div className="more-img">
        <img src={detailImages[0]} alt="more" />
      </div>
      <div className="more-text">
        Không thể phủ nhận, thời trang và phong cách chính là “tuyên ngôn” không
        lời mạnh mẽ nhất của mỗi người phụ nữ. Do đó, việc mua sắm thời trang
        trở thành niềm vui, và có khi là nguồn cảm hứng vô tận để phái đẹp sống
        vui, sống đẹp hơn trong mắt nửa còn lại của thế giới. Để F5 tủ đồ của
        mình trước những xu hướng ngày một đa dạng hơn trong thế giới thời
        trang, nhiều chị em không ngần ngại chi tiêu “mạnh tay” để sở hữu những
        món đồ yêu thích.
      </div>
    </div>
  );
}

export default More;
