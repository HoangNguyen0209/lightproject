import { memo } from "react";
import "./contract-us.css";


const ContractUs = () => {
  return (
    <div>
       <nav aria-label="breadcrumb" className="breadcrumb-container">
      <ol className="breadcrumb-list">
        <li className="breadcrumb-item">
          <a href="/Homepage" className="breadcrumb-link">
            Home
          </a>
        </li>
        <li className="breadcrumb-separator">»</li>
        <li className="breadcrumb-item">
        <a href="/Contract-us" className="breadcrumb-link">
        Contract Us
          </a>
        </li>
      </ol>
    </nav>
    <div className="header1">
      <h1>Contact Us</h1>
      <hr align="center" width="15%" color="#c9a22e" />
      <p className="chu1">
        Our Customer Care team is eager to help! Whether you have a product question or need assistance...
      </p>

      {/* Phone and Email Section */}
      <div className="header2">
        <div className="header3">
          <span className="icon">📞</span>
          <p>(xxx) xxx-xxxx</p>
        </div>
        <div className="header3">
          <span className="icon">📧</span>
          <p>aptech.fpt@fe.edu.vn</p>
        </div>
      </div>

      {/* Phone Instructions */}
      <div className="phone4">

        <ul>
          <h3>Phone</h3>
          <div className="phoneli">
            <li>New Orders or to be added to our Mailing List, <strong>press 1</strong></li>
            <li>Customer Service issues, including Order Status, Returns or Damaged/Defective products, <strong>press 2</strong></li>
            <li>Trade Customers, <strong>press 3</strong></li>
            <li>To be Removed from our Mailing List, <strong>press 4</strong></li>
          </div>
        </ul>
      </div>

      <div className="hours5">
        <h3>Hours</h3>
        <ul className="hours6">
          <li>
            <strong>Orders:</strong> 24 hours a day, 7 days a week by phone or on our website
          </li>
          <li>
            <strong>Customer Service:</strong> Monday – Friday 8:30 AM – 6:30 PM, EST
            Saturday 9:00 AM – 5:30 PM, EST
          </li>
        </ul>
      </div>

      <div className="contact-container">
        {/* Cột bên trái */}
        <div className="contact-box">
          <h3 className="contact-title">Corporate Office:</h3>
          <p>Shades of Light</p>
          <p>590 Cách Mạng Tháng Tám,</p>
          <p>Phường 11, Quận 3, HCM</p>
          <p>P: (xxx) xxx-xxxx</p>
          <p>F: (xxx) xxx-xxxx</p>
        </div>

        {/* Cột bên phải */}
        <div className="contact-box">
          <h3 className="contact-title">PR Inquiries and Media relations</h3>
          <p>
            For Press and Media related inquiries, please email us at{" "}
            <a
              href="https://aptech.fpt.edu.vn/lien-he"
              className="lienhe"
            >
              aptech.fpt@fe.edu.vn
            </a>
          </p>
        </div>
      </div>

      

    </div>
    </div>
  );
};
export default memo(ContractUs);