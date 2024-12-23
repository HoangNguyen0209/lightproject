import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import products from "./ProductList.json";
import "./Productstyle.css";
import ProductCarousel from "./ProductlistRandom/ProductList";

const SplList = () => {
  const [sortOption, setSortOption] = useState("default");
  const [selectedColor, setSelectedColor] = useState("all");
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  // Filter products based on category, color, price range, and search query
  const filteredProducts = products.filter((product) => {
    if (product.category !== "Spl") return false;

    if (selectedColor !== "all") {
      const colorMatch = product.color.some(
        (c) => c.value.toLowerCase() === selectedColor.toLowerCase()
      );
      if (!colorMatch) return false;
    }

    if (searchQuery) {
      const nameMatch = product.name
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      if (!nameMatch) return false;
    }

    return product.price >= priceRange[0] && product.price <= priceRange[1];
  });

  // Sort products based on the selected sort option
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOption === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortOption === "highPrice") {
      return b.price - a.price;
    } else if (sortOption === "lowPrice") {
      return a.price - b.price;
    }
    return 0;
  });

  const uniqueColors = Array.from(
    new Set(products.flatMap((product) => product.color.map((c) => c.value)))
  );

  const handleColorClick = (color) => {
    setSelectedColor(selectedColor === color ? "all" : color);
  };

  const handleProductClick = (productLink) => {
    navigate(`/products/${productLink}`);
  };

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
            <a href="/Spot-Lights" className="breadcrumb-link">
              Spot light
            </a>
          </li>
        </ol>
      </nav>
      <section className="head-body">Spot Light</section>
      <hr align="center" width="10%" color="#c9a22e" />
      <div className="spl-list-container">
        <div className="filters">
          <div className="filter-section">
            <label htmlFor="sort">Sort by: </label>
            <select
              id="sort"
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
              className="filter-dropdown"
            >
              <option value="default">Default</option>
              <option value="name">Name</option>
              <option value="highPrice">High Price</option>
              <option value="lowPrice">Low Price</option>
            </select>
          </div>

          <div className="color-filter">
            <label htmlFor="color">Filter by Color: </label>
            <div className="color-options">
              {uniqueColors.map((color, index) => (
                <div
                  key={index}
                  className={`color-dot ${
                    selectedColor === color ? "selected" : ""
                  }`}
                  style={{ backgroundColor: color }}
                  onClick={() => handleColorClick(color)}
                ></div>
              ))}
            </div>
          </div>

          <div className="filter-section">
            <label htmlFor="price">Price Range: </label>
            <input
              type="range"
              id="price"
              min="0"
              max="1000"
              step="10"
              value={priceRange[1]}
              onChange={(e) =>
                setPriceRange([priceRange[0], parseInt(e.target.value)])
              }
            />
            <span>
              ${priceRange[0]} - ${priceRange[1]}
            </span>
          </div>

          <div className="filter-section">
            <label htmlFor="search">Search: </label>
            <input
              type="text"
              id="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by name"
              className="search-input"
            />
          </div>
        </div>

        <div className="product-list">
          {sortedProducts.map((product, index) => (
            <div className="product-item" key={index}>
              <button onClick={() => handleProductClick(product.productLink)}>
                <img src={product.image[0]} alt={product.name} />
                <h3 className="product-name">{product.name}</h3>
                <div className="product-colors">
                  {product.color.map((color, i) => (
                    <div
                      key={i}
                      className="color-dot"
                      style={{
                        backgroundColor: color.style.backgroundColor,
                        border: color.style.border,
                      }}
                      title={color.value}
                    ></div>
                  ))}
                </div>
                <p className="product-price">${product.price.toFixed(2)}</p>
              </button>
            </div>
          ))}
        </div>
      </div>
      <ProductCarousel />
    </div>
  );
};

export default SplList;