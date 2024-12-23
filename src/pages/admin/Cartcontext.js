import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  // Trạng thái đăng nhập và tên người dùng
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");

  const [cart, setCart] = useState(() => {
    // Nếu đã đăng nhập thì lấy giỏ hàng, nếu chưa đăng nhập thì không
    return isLoggedIn ? JSON.parse(localStorage.getItem("shoppingCart")) || [] : [];
  });

  useEffect(() => {
    // Lưu giỏ hàng vào localStorage mỗi khi cart thay đổi và người dùng đã đăng nhập
    if (isLoggedIn) {
      localStorage.setItem("shoppingCart", JSON.stringify(cart));
    } else {
      // Nếu chưa đăng nhập, xóa giỏ hàng khỏi localStorage
      localStorage.removeItem("shoppingCart");
    }
  }, [cart, isLoggedIn]);

  // Hàm đăng nhập
  const login = (name) => {
    setIsLoggedIn(true);
    setUserName(name);
  };

  // Hàm đăng xuất
  const logout = () => {
    setIsLoggedIn(false);
    setUserName("");
  };

  // Hàm thêm sản phẩm vào giỏ hàng
  const addToCart = (item, quantity = 1) => {
    if (!isLoggedIn) {
      alert("Please log in to add items to the cart.");
      return;
    }
    setCart((prevCart) => {
      const existingProduct = prevCart.find((product) => product.id === item.id);
      if (existingProduct) {
        return prevCart.map((product) =>
          product.id === item.id
            ? { ...product, quantity: product.quantity + quantity }
            : product
        );
      } else {
        return [...prevCart, { ...item, quantity }];
      }
    });
  };

  // Tính tổng số lượng sản phẩm trong giỏ hàng
  const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <CartContext.Provider value={{ cart, setCart, addToCart, totalQuantity, isLoggedIn, userName, login, logout }}>
      {children}
    </CartContext.Provider>
  );
};
