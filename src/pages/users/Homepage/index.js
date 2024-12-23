import React, { memo, useState, useEffect } from "react";
import "./imgstyle.css";
import ProductList from "../../../component/ProductlistRandom/ProductList.jsx";

const HomePage = () => {
  const [slideIndex, setSlideIndex] = useState(1);
  const [selectedImage, setSelectedImage] = useState(null);

  const plusSlides = (n) => {
    showSlides(slideIndex + n);
  };
  const currentSlide = (n) => {
    showSlides(n);
  };
  const showSlides = (n) => {
    let i;
    const slides = document.getElementsByClassName("mySlides");
    const dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
      setSlideIndex(1);
    } else if (n < 1) {
      setSlideIndex(slides.length);
    } else {
      setSlideIndex(n);
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    if (slides[slideIndex - 1]) {
      slides[slideIndex - 1].style.display = "block";
    }
    if (dots[slideIndex - 1]) {
      dots[slideIndex - 1].className += " active";
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prev) => (prev + 1 > 3 ? 1 : prev + 1)); // Nếu vượt quá số slide, quay lại slide đầu tiên
    }, 30000); // Thay đổi slide sau mỗi 3 giây

    return () => clearInterval(interval); // Dọn dẹp interval khi component bị unmount
  }, []);

  useEffect(() => {
    showSlides(slideIndex);
  }, [slideIndex]);

  const images = [
    "./img/image1.jpg",
    "./img/image2.jpg",
    "./img/image3.jpg",
    "./img/image4.jpg",
    "./img/image5.jpg",
    "./img/image6.jpg",
    "./img/image7.jpg",
    "./img/image8.jpg",
    "./img/image9.jpg",
    "./img/image10.jpg",
    "./img/image11.jpg",
    "./img/image12.jpg",
    "./img/image13.jpg",
    "./img/image14.jpg",
    "./img/image15.jpg",
    "./img/image16.jpg",
  ];

  const openImage = (image) => {
    setSelectedImage(image);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  return (
    <div>
      <div className="slideshow-container">
        <div className="mySlides fade">
          <img src="./img/1.jpg" className="imgcontainer" />
        </div>
        <div className="mySlides fade">
          <img src="./img/2.jpg" className="imgcontainer" />
        </div>
        <div className="mySlides fade">
          <img src="./img/3.jpg" className="imgcontainer" />
        </div>
        <a className="prev" onClick={() => plusSlides(-1)}>
          ❮
        </a>
        <a className="next" onClick={() => plusSlides(1)}>
          ❯
        </a>

        <div style={{ textAlign: "center" }}>
          <span className="dot" onClick={() => currentSlide(1)}></span>
          <span className="dot" onClick={() => currentSlide(2)}></span>
          <span className="dot" onClick={() => currentSlide(3)}></span>
        </div>
      </div>
      <div className="main-wrapper">
        <div className="brand-logo-container">
          <img src="./icon/Lg.png" alt="Walla Logo" className="brand-logo" />
        </div>
        <div>
          <h1 className="brand-name">Walla Viet Nam Company Limited</h1>
          <p className="company-description">
            Our company specializes in manufacturing decorating light and
            functional light, in addition to providing consulting, setting up
            lighting system accenting your office or home
          </p>
          <p className="additional-info">
            We bring a varieties of{" "}
            <span className="general-light">General Lighting</span> and{" "}
            <span className="glass-light">chandeliers light</span>
          </p>
        </div>
      </div>

      <div className="gallery-container">
        <h1 className="gallery-title">GALLERY</h1>
        <div className="gallery-grid">
          {images.map((image, index) => (
            <div className="gallery-item" key={index}>
              <img
                src={image}
                alt={`Gallery ${index}`}
                className="gallery-image"
              />
              <div className="gallery-hover">
                <button
                  className="view-button"
                  onClick={() => openImage(image)}
                >
                  View Larger
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for viewing larger image */}
      {selectedImage && (
        <div className="modal">
          <div className="modal-content">
            <span className="close-button" onClick={closeImage}>
              &times;
            </span>
            <img src={selectedImage} alt="Selected" className="modal-image" />
          </div>
        </div>
      )}

      <div class="custom-con">
        <ProductList />
      </div>
    </div>
  );
};

export default memo(HomePage);
