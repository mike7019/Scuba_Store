import React from 'react';

const Gallery = () => {
  return (
    <section id="gallery" className="view">
      <h2>Gallery</h2>
      <div className="gallery-images">
        <img src="/media/pez angel frances.JPG" alt="Underwater scene" />
        <img src="/media/vuela.JPG" alt="Scuba divers" />
        <img src="/media/corales.JPG" alt="Coral reef" />
      </div>
      <div className="gallery">
        <img className="media-image" src="/media/78.jpg" alt="Gallery Image 1" />
        <img className="media-image" src="/media/corales.JPG" alt="Gallery Image 2" />
        <img className="media-image" src="/media/morena.JPG" alt="Gallery Image 3" />
        <img className="media-image" src="/media/pez angel frances.JPG" alt="Gallery Image 4" />
        <img className="media-image" src="/media/pluma.JPG" alt="Gallery Image 5" />
        <img className="media-image" src="/media/vuela.JPG" alt="Gallery Image 6" />
        <img className="media-image" src="/media/WhatsApp Image 2025-05-10 at 3.43.56 PM (1).jpeg" alt="Gallery Image 7" />
        <img className="media-image" src="/media/WhatsApp Image 2025-05-10 at 3.43.56 PM (2).jpeg" alt="Gallery Image 8" />
        <img className="media-image" src="/media/WhatsApp Image 2025-05-10 at 3.43.56 PM.jpeg" alt="Gallery Image 9" />
      </div>
    </section>
  );
};

export default Gallery;
