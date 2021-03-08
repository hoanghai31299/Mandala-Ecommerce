import React from "react";
import { Link } from "react-router-dom";

function BlogListItem({ blog }) {
  const { image, title, preView, by, comment, date } = blog;
  return (
    <div className="blog-list-item">
      <div className="content-blog">
        <img src={image} alt="blog" />
        <h2>{title}</h2>
        <p>
          <p>{preView}</p>
          <Link to="#">Bởi {`${by} (${date})`}</Link>
        </p>
        <div className="read-more">
          <Link to="/blog-detail">Xem thêm</Link>
          <Link to="/blog-detail">{comment} bình luận</Link>
        </div>
      </div>
    </div>
  );
}

export default BlogListItem;
