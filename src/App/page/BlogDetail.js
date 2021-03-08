import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import BlogImage from "../../assets/images/blogs/blog_5.png";
import BlogContent from "../../assets/images/blogs/post_content.png";
import BlogVideo from "../../assets/images/blogs/video.png";
import { Link } from "react-router-dom";
const arr = [
  { path: "/", name: "Home" },
  { path: "/blogs", name: "Tất cả bài viết" },
  { path: "/blog-detail", name: "Bài viết" },
];
const tags = [
  "Đồng hồ",
  "Túi",
  "Phụ kiện",
  "Đồng hồ",
  "Áo phông",
  "Nước hoa nữ",
  "Túi",
  "Phụ kiện",
  "Giày",
  "Sandal",
  "Áo sơ mi",
  "Nước hoa",
  "Trẻ em",
  "Thời trang nữ",
  "Thời trang nam",
];
const NewestItem = () => {
  return (
    <div className="newest-item">
      <div className="newest-img">
        <img src={BlogImage} alt="blog-img" />
      </div>
      <div className="newest-date">
        <span>11</span>/<span>tháng 5</span>
        <h4>đăng bởi vitconlonlon</h4>
      </div>
    </div>
  );
};
function BlogDetail() {
  return (
    <div className="blog-detail">
      <BreadCrumb links={arr} />
      <div className="blog-detail-container max-width">
        <div className="blog-title">
          <h2>BLOG</h2>
        </div>
        <div className="blog-body">
          <div className="blog-left">
            <div className="newest">
              <h2>bài viết mới nhất</h2>
              <div className="newest-list">
                <NewestItem />
                <NewestItem />
                <NewestItem />
              </div>
              <div className="tag">
                <h3>blog tags</h3>
                <div className="tag-list">
                  {tags.map((tag) => (
                    <span className="single-tag">{tag}</span>
                  ))}
                </div>
              </div>
              <div className="lastest-video">
                <h3>lastest video</h3>
                <img src={BlogVideo} alt="video" />
              </div>
            </div>
          </div>
          <div className="blog-right">
            <div className="content-blog">
              <img src={BlogContent} alt="blog" />

              <h2>nàng béo không ngại diện váy áo nổi bật</h2>
              <p>
                Hi, chào các nàng ... sau khá nhiều lời hứa hão thì hôm nay tớ
                quay lại hăm nóng cái Blog này vào một ngày đầu hè nóng oi bức,
                khi mà dân tình xô nhau đi tắm Free để giải nhiệt. Lorem ipsum
                dolor sit, amet consectetur adipisicing elit. Tenetur iusto quod
                exercitationem accusamus doloribus consequatur debitis nobis,
                itaque voluptas nisi expedita, dolor aperiam magnam, facilis qui
                repellendus cupiditate! Voluptate quasi voluptatem nostrum
                facere ut dignissimos neque sunt illo dolorum esse, cumque ipsa
                eius, hic velit eos similique incidunt perferendis laudantium
                natus. Ullam, fuga cum. Voluptates fuga hic id eum qui nisi
                aliquid quas sit neque tempora! Deserunt tempore suscipit
                praesentium aliquam, sequi natus qui possimus nostrum cumque
                eaque ullam cum reprehenderit accusamus hic maxime sapiente!
                Sint delectus voluptas corrupti praesentium, rem optio. Minus
                corrupti est dolorem dolores eveniet perferendis commodi saepe
                odit doloremque! Inventore labore sequi obcaecati, quidem itaque
                culpa cum molestias tempore quasi, magni officia repellendus
                aspernatur ea laudantium?
                <Link to="#">Bởi NamTran(19/9/2020)</Link>
              </p>
              <div className="read-more">
                <Link to="#">Xem thêm</Link>
                <Link to="#">23 bình luận</Link>
              </div>
            </div>
            <p className="blog-tag">
              <span>Tags: </span>
              {tags.slice(0, 4).map((tag) => (
                <span className="single-tag">{tag}</span>
              ))}
            </p>
            <div className="contribute">
              <h2>đóng góp ý kiến</h2>
              <form>
                <div className="form-item">
                  <span>Tên*</span>
                  <input type="text" className="input-text" />
                </div>
                <div className="form-item">
                  <span>Email*</span>
                  <input type="text" className="input-text" />
                </div>
                <div className="form-item">
                  <span>Ý kiến*</span>
                  <textarea
                    rows="9"
                    cols="70"
                    className="input-text"></textarea>
                </div>
                <button onClick={(e) => e.preventDefault()}>Gửi ý kiến</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogDetail;
