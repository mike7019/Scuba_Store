import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <ul>
          <li><a href="#about">About Us</a></li>
          <li><a href="#tours">Our Tours</a></li>
          <li><a href="#gallery">Gallery</a></li>
          <li><a href="#contact">Contact Us</a></li>
        </ul>
      </nav>

      <video id="background-video" autoPlay muted loop>
        <source src="/media/scuba.mp4" type="video/mp4" />
        Your browser does not support the video feature.
      </video>

      <header className="hero">
        <h1>Welcome to Scuba Diving Adventures</h1>
        <p>Explore the underwater world with us!</p>
        <button id="book-now">Book Now</button>
      </header>

      <section id="about" className="view">
        <h2>About Us</h2>
        <p>We offer the best scuba diving experience for all skill levels. Our team of certified instructors will guide you
          through the beautiful underwater landscapes, ensuring a safe and enjoyable experience.</p>
        <p>Whether you're a beginner or an experienced diver, we have the perfect tour for you. Our state-of-the-art
          equipment and knowledgeable staff will make your diving adventure unforgettable.</p>
        <p>Join us for an adventure of a lifetime!</p>
      </section>
    </div>
  );
}

export default App;
