import React from "react";
import BreadCrumb from "../components/BreadCrumb";
const arr = [
  { path: "/", name: "Home" },
  { path: "/contact", name: "Liên hệ" },
];
function Contact() {
  return (
    <div className="contact">
      <BreadCrumb links={arr} />
      <div className="contact-container max-width">
        <div className="contact-header">
          <h3>Liên hệ</h3>
        </div>
        <div className="contact-body">
          <div className="contact-left">
            <iframe
              title="maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3834.2779161389963!2d108.20345301438523!3d16.05106174418914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314219bbac6c009d%3A0x64deb5d551680e98!2zMTUwIER1eSBUw6JuLCBIw7JhIFRodeG6rW4gTmFtLCBI4bqjaSBDaMOidSwgxJDDoCBO4bq1bmcgNTUwMDAwLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1615283056058!5m2!1svi!2s"
              style={{
                border: 0,
              }}
              height="450"
              allowfullscreen=""
              loading="lazy"></iframe>
          </div>
          <div className="contact-right">
            <div className="contact-form">
              <h2>Gửi email cho chúng tôi</h2>
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
                  <span>Tin nhắn*</span>
                  <textarea
                    rows="9"
                    cols="70"
                    className="input-text"></textarea>
                </div>
                <button onClick={(e) => e.preventDefault()}>Gửi</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
