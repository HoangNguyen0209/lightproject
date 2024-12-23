import React, { useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { CartContext } from "../pages/admin/Cartcontext";
import products from "./ProductList.json";
import "./PageProduct.css";
import ProductCarousel from "./ProductlistRandom/ProductList";

const ProductDetail = () => {
  const { productLink } = useParams();
  const navigate = useNavigate();
  const { addToCart,  isLoggedIn } = useContext(CartContext);

  const product = products.find((p) => p.productLink === productLink);
  const [selectedImage, setSelectedImage] = useState(product.image[0]);
  const [quantity, setQuantity] = useState(1);
  const [showDescription, setShowDescription] = useState(false);
  const [feedbackList, setFeedbackList] = useState([]); // State để lưu feedback
  const [feedback, setFeedback] = useState(""); // State cho input feedback

  if (!product) {
    return <h2>Product not found</h2>;
  }

  const incrementQuantity = () => setQuantity(quantity + 1);
  const decrementQuantity = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

  const toggleDescription = () => {
    setShowDescription(!showDescription);
  };

  const handleAddFeedback = () => {
    if (feedback.trim()) {
      setFeedbackList([...feedbackList, feedback]);
      setFeedback(""); // Clear input sau khi thêm
    }
  };

  return (
    <div>
      {/* Breadcrumb */}
      <nav aria-label="breadcrumb" className="breadcrumb-container">
        <ol className="breadcrumb-list">
          <li className="breadcrumb-item">
            <a href="/Homepage" className="breadcrumb-link">
              Home
            </a>
          </li>
          <li className="breadcrumb-separator">»</li>
          <li className="breadcrumb-item">
            <a href={`/products/${productLink}`} className="breadcrumb-link">
              {product.name}
            </a>
          </li>
        </ol>
      </nav>

      {/* Product Detail */}
      <div className="body-detail">
        <div className="product-detail">
          <div className="image-gallery">
            <img
              src={selectedImage}
              alt={product.name}
              className="main-image Page-img"
            />
            <div className="thumbnail-gallery">
              {product.image.map((imgUrl, index) => (
                <img
                  key={index}
                  src={imgUrl}
                  alt={`Thumbnail ${index}`}
                  className={`thumbnail-image ${selectedImage === imgUrl ? 'active' : ''}`}
                  onClick={() => setSelectedImage(imgUrl)}
                />
              ))}
            </div>
          </div>

          <div className="product-info">
            <h2>{product.name}</h2>
            <p className="price-info">Price: ${product.price.toFixed(2)}</p>

            <div className="product-colors">
              {product.color.map((color, index) => (
                <div
                  key={index}
                  className="color-list"
                  style={color.style}
                  title={color.value}
                ></div>
              ))}
            </div>

            <div className="quantity-control">
              <button onClick={decrementQuantity} className="quantity-button">-</button>
              <span className="quantity-display">{quantity}</span>
              <button onClick={incrementQuantity} className="quantity-button">+</button>
            </div>

            <button
  onClick={() => {
    if (!isLoggedIn) {
      // Redirect to login page if not logged in
      navigate("/log-in");
      return; // Stop further execution
    }

    // If logged in, add to cart
    addToCart(product, quantity);
    alert("Product added to cart!");
    navigate("/Shopping-cart");
  }}
  className="buy-button"
>
  Thêm vào giỏ hàng
</button>
          </div>
        </div>

        {/* Description */}
        <div className="description">
          <hr align="center" width="70%" color="#c9a22e" />
          <button onClick={toggleDescription} className="accordion">
            {showDescription ? "Description V" : "Description >"}
          </button>
          <div className={`panel ${showDescription ? "show" : ""}`}>
            <p>{product.description}</p>
          </div>
          <hr align="center" width="70%" color="#c9a22e" />
        </div>

        {/* Feedback Section */}
        <div className="feedback-section">
          <h3>User Feedback</h3>
          <ul className="feedback-list">
            {feedbackList.map((item, index) => (
              <li key={index} className="feedback-item">
                {item}
              </li>
            ))}
          </ul>
          <div className="feedback-input">
            <textarea
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              placeholder="Write your feedback here..."
              rows="4"
              className="feedback-textarea"
            />
            <button onClick={handleAddFeedback} className="feedback-button">
              Submit
            </button>
          </div>
        </div>
      </div>
      <ProductCarousel/>
    </div>
  );
};

export default ProductDetail;
