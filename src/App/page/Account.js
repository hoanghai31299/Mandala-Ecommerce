import React from "react";
import BreadCrumb from "../components/BreadCrumb";
const arr = [
  { path: "/", name: "Home" },
  { path: "/account", name: "Tài khoản" },
];
const formatMoney = (num) => {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,") + "₫";
};
const orders = [
  {
    id: "#001",
    date: "May 13, 2020",
    status: "Đã thanh toán",
    total: 350000,
    debt: 0,
  },
  {
    id: "#001",
    date: "May 13, 2020",
    status: "Đã thanh toán",
    total: 700000,
    debt: 0,
  },
  {
    id: "#001",
    date: "May 13, 2020",
    status: "Thanh toán 50%",
    total: 500000,
    debt: 250000,
  },
];
function Account() {
  return (
    <div className="account">
      <BreadCrumb links={arr} />
      <div className="account-container max-width">
        <div className="account-left">
          <div className="account-header">
            <h3>Giỏ hàng</h3>
          </div>
          <div className="account-body">
            <table className="account-table">
              <thead>
                <tr>
                  <th>order</th>
                  <th>DATE</th>
                  <th>TÌNH TRẠNG THANH TOÁN</th>
                  <th>TỔNG</th>
                  <th>NỢ</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((ord, i) => {
                  return (
                    <tr key={i}>
                      <td>
                        <span>ORDER</span>
                        {ord.id}
                      </td>
                      <td>
                        <span>DATE</span>
                        {ord.date}
                      </td>
                      <td className="status">
                        <span>TÌNH TRẠNG THANH TOÁN</span>
                        {ord.status}
                      </td>
                      <td>
                        <span>TỔNG</span>
                        {formatMoney(ord.total)}
                      </td>
                      <td>
                        <span>NỢ</span>
                        {formatMoney(ord.debt)}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
        <div className="account-right">
          <h5>chi tiết tài khoản</h5>
          <div className="infor-item">
            <i className="fas fa-user"></i>
            <p>
              <span>Vladimir Putin</span>
              <span>laivanvo@gmail.com</span>
            </p>
          </div>
          <div className="infor-item">
            <i className="fas fa-map-marker-alt"></i>
            <span>Tòa nhà Hà Nội group 442 Đội Cấn, Ba Đình Hà Nội</span>
          </div>
          <div className="infor-item">
            <i className="fas fa-phone"></i>
            <span>(04) 3786 8904</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Account;
