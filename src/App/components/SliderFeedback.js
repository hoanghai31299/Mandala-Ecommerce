import React from "react";
import Slider from "react-slick";
import Avatar1 from "../../assets/images/feedback_1--img.png";
import Avatar2 from "../../assets/images/feedback_2--img.png";
import FeedbackBackground from "../../assets/images/feedback--background.png";
const feedbacks = [
  {
    background: FeedbackBackground,
    avatar: Avatar1,
    content: `Vẫn là vẻ bề ngoài vô cùng đơn giản với các tông màu trắng, hồng làm chủ đạo nhưng lại tạo ra sức hút kỳ lạ với những ai cầm trên tay sản phẩm ấy! Với công nghệ cải tiến mới nhất, hảng Rohto`,
    name: "Harry Styles",
    position: "Giám đốc phát triển sản phẩm",
  },
  {
    background: FeedbackBackground,
    avatar: Avatar2,
    content: `Vẫn là vẻ bề ngoài vô cùng đơn giản với các tông màu trắng, hồng làm chủ đạo nhưng lại tạo ra sức hút kỳ lạ với những ai cầm trên tay sản phẩm ấy! Với công nghệ cải tiến mới nhất, hảng Rohto`,
    name: "justin bieber",
    position: "Giám đốc kinh doanh",
  },
  {
    background: FeedbackBackground,
    avatar: Avatar2,
    content: `Vẫn là vẻ bề ngoài vô cùng đơn giản với các tông màu trắng, hồng làm chủ đạo nhưng lại tạo ra sức hút kỳ lạ với những ai cầm trên tay sản phẩm ấy! Với công nghệ cải tiến mới nhất, hảng Rohto`,
    name: "Selena Gomez",
    position: "Nhân viên vệ sinh",
  },
];

function SliderFeedback() {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="feedback">
      <div className="feedback-container max-width">
        <Slider {...sliderSettings}>
          {feedbacks.map((fb) => {
            return (
              <div className="feedback-item-container">
                <div
                  className="feedback-item"
                  style={{
                    backgroundImage: `url(${fb.background})`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "right",
                    backgroundSize: "auto 100%",
                  }}>
                  <div className="feedback-avatar">
                    <img src={fb.avatar} alt="avt" />
                  </div>
                  <div className="feedback-content">
                    <p className="feedback-text">"{fb.content}"</p>
                  </div>
                  <p className="feedback-signature">
                    <span>{fb.name}</span>
                    <span>{fb.position}</span>
                  </p>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}

export default SliderFeedback;
