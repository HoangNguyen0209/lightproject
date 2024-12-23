import React, { useState, useEffect } from "react";
import products from "../ProductList.json";
import "./ProductListstyle1.css";

const ProductCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 9; // Số lượng sản phẩm hiển thị cùng lúc

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + itemsPerPage >= products.length ? 0 : prevIndex + itemsPerPage
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - itemsPerPage < 0
        ? products.length - itemsPerPage
        : prevIndex - itemsPerPage
    );
  };

  const visibleProducts = products.slice(
    currentIndex,
    currentIndex + itemsPerPage
  );

  return (
    <div>
      <h1>You May Also Like</h1>
      <hr align="center" width="30%" color="#c9a22e" />
    <div className="carousel-container">
      <button className="carousel-button prev" onClick={prevSlide}>
        &#10094;
      </button>
      <div className="product-list coumle">
        {visibleProducts.map((product, index) => (
          <div className="product-item" key={index}>
            <a href={product.productLink}>
              <img src={product.image[0]} alt={product.name} />
            </a>
            <h3 className="product-name">{product.name}</h3>
            <div className="product-colors">
              {product.colors &&
                product.colors.map((color, i) => (
                  <div
                    key={i}
                    className="color-dot"
                    style={{ backgroundColor: color }}
                  ></div>
                ))}
            </div>
            <p className="product-price">${product.price.toFixed(2)}</p>
          </div>
        ))}
      </div>
      <button className="carousel-button next" onClick={nextSlide}>
        &#10095;
      </button>
    </div>
    </div>
  );
};

export default ProductCarousel;
