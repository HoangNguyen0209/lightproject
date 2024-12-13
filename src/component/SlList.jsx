import React, { useState } from "react";
import products from "./ProductList.json"; // Thêm đúng đường dẫn đến tệp JSON
import "./Productstyle.css";

const SlList = () => {
  const [sortOption, setSortOption] = useState("default");
  const [selectedColor, setSelectedColor] = useState("all");
  const [priceRange, setPriceRange] = useState([0, 1000]);

  // Lọc sản phẩm theo màu sắc, giá và category
  const filteredProducts = products.filter((product) => {
    // Kiểm tra category
    if (product.category !== "Sl") return false;

    // Kiểm tra màu sắc nếu có
    if (selectedColor !== "all") {
      const colorMatch = product.color.some(
        (c) => c.value.toLowerCase() === selectedColor.toLowerCase()
      );
      if (!colorMatch) return false;
    }

    // Kiểm tra khoảng giá
    return product.price >= priceRange[0] && product.price <= priceRange[1];
  });

  // Sắp xếp các sản phẩm theo tên hoặc giá
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

  // Lấy danh sách các màu sắc duy nhất từ tất cả các sản phẩm
  const uniqueColors = Array.from(
    new Set(products.flatMap((product) => product.color.map((c) => c.value)))
  );

  // Hàm xử lý khi người dùng nhấp vào màu sắc
  const handleColorClick = (color) => {
    // Nếu màu sắc đã được chọn, sẽ reset về "all"
    if (selectedColor === color) {
      setSelectedColor("all");
    } else {
      setSelectedColor(color);
    }
  };

  return (
    <div>
      <section className="head-body">Smart Lights</section>
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

          {/* Bộ lọc màu sắc */}
          <div className="color-filter">
            <label htmlFor="color">Filter by Color: </label>
            <div className="color-options">
              {uniqueColors.map((color, index) => (
                <div
                  key={index}
                  className={`color-dot ${selectedColor === color ? "selected" : ""}`}
                  style={{ backgroundColor: color }}
                  onClick={() => handleColorClick(color)}
                ></div>
              ))}
            </div>
          </div>

          {/* Bộ lọc khoảng giá */}
          <div className="filter-section">
            <label htmlFor="price">Price Range: </label>
            <input
              type="range"
              id="price"
              min="0"
              max="1000"
              step="10"
              value={priceRange[1]}
              onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
            />
            <span>
              ${priceRange[0]} - ${priceRange[1]}
            </span>
          </div>
        </div>

        <div className="product-list">
          {sortedProducts.map((product, index) => (
            <div className="product-item" key={index}>
              <a href={product.productLink}>
                <img src={product.image} alt={product.name} />
              </a>
              <h3 className="product-name">{product.name}</h3>

              {/* Hiển thị các màu sắc của sản phẩm */}
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SlList;
