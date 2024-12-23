import { memo, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./signstyle1.css";

const Create = () => {
  const [formData, setFormData] = useState({
    loginEmail: "",
    loginPassword: "",
    signupUsername: "",
    signupEmail: "",
    signupPassword: "",
    confirmPassword: "",
  });

  const [isLoggedIn, setIsLoggedIn] = useState(false); // Trạng thái đăng nhập
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateLogin = () => {
    if (!formData.loginEmail.includes("@")) {
      alert("Login email must contain '@'.");
      return false;
    }
    if (formData.loginPassword.length === 0) {
      alert("Password is required for login.");
      return false;
    }
    return true;
  };

  const validateSignup = () => {
    if (formData.signupUsername.trim() === "") {
      alert("Username is required.");
      return false;
    }
    if (!formData.signupEmail.includes("@")) {
      alert("Email must contain '@'.");
      return false;
    }
    if (formData.signupPassword.length < 8) {
      alert("Password must be at least 8 characters long.");
      return false;
    }
    if (formData.signupPassword !== formData.confirmPassword) {
      alert("Passwords do not match.");
      return false;
    }
    return true;
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (validateLogin()) {
      setIsLoggedIn(true); // Cập nhật trạng thái đăng nhập
      alert("Login successful.");
      navigate("/Homepage"); // Chuyển hướng về trang Home
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    alert("You have logged out.");
    navigate("/Homepage"); // Chuyển hướng về trang Home
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    if (validateSignup()) {
      alert("Account created successfully.");
    }
  };

  return (
    <div className="Create-Account">
      <nav aria-label="breadcrumb" className="breadcrumb-container">
        <ol className="breadcrumb-list">
          <li className="breadcrumb-item">
            <a href="/Homepage" className="breadcrumb-link">
              Home
            </a>
          </li>
          <li className="breadcrumb-separator">»</li>
          <li className="breadcrumb-item">
            <a href="/Create" className="breadcrumb-link">
              Create Account
            </a>
          </li>
        </ol>
      </nav>
      <div className="auth-container">
          {/* Divider */}
          <div className="divider"></div>

          {/* Create an Account Form */}
          <div className="form-box">
            <h2>Create an Account</h2>
            <form onSubmit={handleSignupSubmit}>
              <div className="form-group">
                <label>Username</label>
                <input
                  type="text"
                  name="signupUsername"
                  placeholder="Enter your username"
                  value={formData.signupUsername}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  name="signupEmail"
                  placeholder="Enter your email"
                  value={formData.signupEmail}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  name="signupPassword"
                  placeholder="Enter your password"
                  value={formData.signupPassword}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Confirm Password</label>
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm your password"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <input type="checkbox" id="email-signup" />
                <label htmlFor="email-signup">Sign up for our email list</label>
              </div>
              <button type="submit" className="btn">
                Create an Account
              </button>
            </form>
          </div>
        </div>
      </div>
  );
};

export default memo(Create);