import { memo, useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { CartContext } from "../../admin/Cartcontext";
import "./fromstyle.css"; // New CSS file for Froms

const Froms = () => {
  const [formData, setFormData] = useState({
    loginEmail: "",
    loginPassword: "",
  });

  const { login } = useContext(CartContext); // Lấy hàm login từ CartContext
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    
    // Kiểm tra email hợp lệ
    if (!formData.loginEmail.includes("@")) {
      alert("Please enter a valid email with '@'.");
      return;
    }

    // Kiểm tra mật khẩu hợp lệ
    if (!/^\d{8,}$/.test(formData.loginPassword)) {
      alert("Password must be at least 8 digits long and only contain numbers.");
      return;
    }

    // Kiểm tra thông tin đăng nhập
    if (formData.loginEmail === "Tom@gmail.com" && formData.loginPassword === "12345678") {
      // Đăng nhập thành công
      login("TomProject"); // Cập nhật trạng thái đăng nhập và tên người dùng
      alert("Login successful.");
      navigate("/Homepage"); // Chuyển hướng về trang Home
    } else {
      alert("Invalid email or password.");
    }
  };

  return (
    
    <div className="froms-auth-container">
          <nav aria-label="breadcrumb" className="breadcrumb-container">
    <ol className="breadcrumb-list">
      <li className="breadcrumb-item">
        <a href="/Homepage" className="breadcrumb-link">
          Home
        </a>
      </li>
      <li className="breadcrumb-separator">»</li>
      <li className="breadcrumb-item">
        <a href="/Log-in" className="breadcrumb-link">
          Log in
        </a>
      </li>
    </ol>
  </nav>
      <div className="froms-form-wrapper">
        <div className="froms-form-box">
          <h2>Log In</h2>
          <form onSubmit={handleLoginSubmit}>
            <div className="froms-form-group">
              <label>Email</label>
              <input
                type="email"
                name="loginEmail"
                placeholder="Enter your email"
                value={formData.loginEmail}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="froms-form-group">
              <label>Password</label>
              <input
                type="password"
                name="loginPassword"
                placeholder="Enter your password"
                value={formData.loginPassword}
                onChange={handleInputChange}
                required
              />
            </div>
            <button type="submit" className="froms-btn">Log In</button>
          </form>
          <Link to="/Create">
            <button className="froms-btn2">Sign Up</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default memo(Froms);
