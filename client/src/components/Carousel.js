import React, { useState } from 'react';
import './Carousel.css'; // Assuming a separate CSS file for styling

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const showCarousel = () => setIsVisible(true);
  const hideCarousel = () => setIsVisible(false);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    isVisible && (
      <div className="carousel">
        <div className="carousel-content">
          <button className="close" onClick={hideCarousel}>&times;</button>
          <button className="prev" onClick={goToPrev}>&#10094;</button>
          <div className="main-image">
            <img id="carousel-img" src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
          </div>
          <button className="next" onClick={goToNext}>&#10095;</button>
        </div>
        <div className="thumbnail-container">
          <div id="thumbnails" className="thumbnails">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Thumbnail ${index + 1}`}
                className={index === currentIndex ? 'active' : ''}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    )
  );
};

export default Carousel;
