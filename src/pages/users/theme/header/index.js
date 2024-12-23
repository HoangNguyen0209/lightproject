import React, { useContext, useState } from "react";
import { CartContext } from "../../../admin/Cartcontext";
import { Link, useNavigate } from "react-router-dom";
import "./headerstyle.css";

const Header = () => {
  const { totalQuantity, isLoggedIn, userName, logout } = useContext(CartContext);
  const navigate = useNavigate();

  // State để quản lý hiển thị nav-bar trên di động
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);

  // State để kiểm tra trạng thái của user menu (Hi, User)
  const [isUserMenuOpen, setUserMenuOpen] = useState(false);

  const toggleMobileNav = () => {
    setMobileNavOpen(!isMobileNavOpen);
  };

  const toggleUserMenu = () => {
    // Nếu người dùng đã đăng nhập, khi bấm vào "Hi, User", sẽ đăng xuất hoặc chuyển sang login.
    if (isLoggedIn) {
      setUserMenuOpen(!isUserMenuOpen);
    } else {
      navigate("/Log-in"); // Điều hướng đến trang đăng nhập nếu chưa đăng nhập
    }
  };

  const handleLogout = () => {
    logout(); // Gọi hàm logout từ context
    setUserMenuOpen(false); // Đóng menu sau khi đăng xuất
    navigate("/Homepage"); // Điều hướng về trang chủ
  };

  return (
    <div className="header">
      <div className="header-top">
        <div className="container">
          <div className="logo">
            <Link to="/Homepage">
              <img src="./icon/Lg.png" alt="Chic Lighting & Design" />
            </Link>
          </div>
     
          {/* Nút Hamburger */}
          <button className="hamburger-menu" onClick={toggleMobileNav}>
            ☰
          </button>

          {/* Thanh điều hướng */}
          <nav className={`nav-bar ${isMobileNavOpen ? "active" : ""}`}>
            <ul className="ulFa">
              <li><Link to="/Celling-lights">Ceiling Lights</Link></li>
              <li><Link to="/Wall-lights">Wall Lights</Link></li>
              <li><Link to="/Lamps">Lamps</Link></li>
              <li><Link to="/Fans">Fans</Link></li>
              <li><Link to="/OutDoor-Lights">Outdoor Lights</Link></li>
              <li><Link to="/Home-Accents">Home Accents</Link></li>
              <li className="dropdown">
                <button className="dropbtn">LED Lights</button>
                <ul className="dropdown-menu">
                  <li><Link to="/Spot-Lights">Spot Lights</Link></li>
                  <li><Link to="/Decoration-Lights">Decoration Lights</Link></li>
                  <li><Link to="/Smart-Lights">Smart Lights</Link></li>
                </ul>
              </li>
            </ul>
            {/* Nút Login và Cart thêm vào nav-bar */}
            {isLoggedIn ? (
              <span className="nav-item" onClick={toggleUserMenu}>
                Hi, {userName || "User"}
                {isUserMenuOpen && (
                  <div className="user-menu">
                    <button className="nav-item"  onClick={handleLogout} > log out</button>
                  </div>
                )}
              </span>
            ) : (
              <button className="nav-item" onClick={() => navigate("/Log-in")}>
                Log In
              </button>
            )}
            <Link to="/Shopping-cart" className="nav-item cart-link" data-cart-quantity={totalQuantity}>
              Cart
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
