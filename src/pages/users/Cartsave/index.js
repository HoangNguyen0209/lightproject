import React, { useContext } from "react";
import { CartContext } from "../../admin/Cartcontext";
import "./cartsave.css";

const Cartsave = () => {
  const { cart, setCart } = useContext(CartContext);

  // Hàm xóa sản phẩm khỏi giỏ hàng
  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  // Hàm cập nhật số lượng sản phẩm
  const updateQuantity = (id, newQuantity) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(newQuantity, 1) } : item
      )
    );
  };

  // Tính tổng giá của giỏ hàng
  const totalPrice = cart
    .reduce((total, item) => total + item.price * item.quantity, 0)
    .toFixed(2);

  // Hàm xử lý thanh toán
  const handlePayment = () => {
    alert("Proceeding to payment...");
    // Here you can integrate a payment gateway like Stripe, PayPal, etc.
  };

  return (
    <div>
        <nav aria-label="breadcrumb" className="breadcrumb-container">
    <ol className="breadcrumb-list">
      <li className="breadcrumb-item">
        <a href="/Shopping-cart" className="breadcrumb-link">
          Home
        </a>
      </li>
      <li className="breadcrumb-separator">»</li>
      <li className="breadcrumb-item">
        <a href="/Log-in" className="breadcrumb-link">
          Shopping Cart
        </a>
      </li>
    </ol>
  </nav>
    <div className="shopping-cart-container">
      <h1 className="shopping-cart-title">Shopping Cart</h1>
      <ul className="shopping-cart-list">
        {cart.length > 0 ? (
          cart.map((item) => (
            <li key={item.id} className="shopping-cart-item">
              <img
                src={item.image[0]}
                alt={item.name}
                className="shopping-cart-item-image"
              />
              <span className="shopping-cart-item-name">{item.name}</span> - 
              <span className="shopping-cart-item-price">{item.price} $</span>

              <div className="quantity-container">
                <button
                  className="quantity-button"
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  disabled={item.quantity <= 1}
                >
                  -
                </button>
                <span className="quantity-display">{item.quantity}</span>
                <button
                  className="quantity-button"
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                >
                  +
                </button>
              </div>

              <span className="item-total">
                Total {(item.price * item.quantity).toFixed(2)} $
              </span>

              <button
                className="shopping-cart-remove-button"
                onClick={() => removeFromCart(item.id)}
              >
                Delete
              </button>
            </li>
          ))
        ) : (
          <p>Empty Cart.</p>
        )}
      </ul>

      {cart.length > 0 && (
        <div className="cart-summary">
          <h3>Total Price: {totalPrice} $</h3>
          <button
            className="buy-now-button"
            onClick={handlePayment}
          >
            Proceed to Payment
          </button>
        </div>
      )}
    </div>
    </div>
  );
};

export default Cartsave;
