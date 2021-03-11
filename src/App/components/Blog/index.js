import React, { useState } from "react";
import BlogList from "./BlogList";
import ImageBlog from "../../../assets/images/blogs/blog-img.png";
import Blog2 from "../../../assets/images/blogs/blog_1.png";
import Blog3 from "../../../assets/images/blogs/blog_6.png";
import Blog4 from "../../../assets/images/blogs/blog_3.png";
import Blog5 from "../../../assets/images/blogs/blog_4.png";
import Blog6 from "../../../assets/images/blogs/blog_5.png";
import BreadCrumb from "../../components/BreadCrumb";
const arr = [
  { path: "/", name: "Home" },
  { path: "/blogs", name: "Tất cả bài viết" },
];
const imgArr = [ImageBlog, Blog2, Blog3, Blog4, Blog5, Blog6];

const blogs = [];
for (let i = 0; i < 20; i++) {
  blogs.push({
    title: "REVIEW SON KEM BOURJOIS VELVET",
    preView:
      "Hi, chào các nàng ... sau khá nhiều lời hứa hão thì hôm nay tớ quay lại hăm nóng cái Blog này vào một ngày đầu hè nóng oi bức, khi mà dân tình xô nhau đi tắm Free để giải nhiệt.",
    by: "NamTran",
    date: "19/12/2020",
    comment: 34,
    image: imgArr[Math.floor(Math.random() * imgArr.length)],
  });
}
function Blog() {
  const limit = 6;
  const [page, setPage] = useState(1);

  return (
    <div className="blog">
      <BreadCrumb links={arr} />
      <div className="blog-container max-width">
        <div className="blog-title">
          <h2>BLOG</h2>
        </div>
        <div className="blog-pagination">
          <div className="change-view-action">
            <i className="fas fa-list-ul"></i>
            <i className="fas fa-th"></i>
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

        <div className="blog-paragraph">
          <BlogList blogs={blogs.slice((page - 1) * limit, limit * page)} />
        </div>
        <div className="blog-pagination">
          <div className="change-view-action">
            <i className="fas fa-list-ul"></i>
            <i className="fas fa-th"></i>
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
  );
}

export default Blog;
