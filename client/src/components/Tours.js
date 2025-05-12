import React from 'react';

const Tours = () => {
  return (
    <section id="tours" className="view">
      <h2>Our Tours</h2>
      <div className="tabs">
        <div className="tabs-inner">
          <button className="tab-button" data-tab="reef-diving">Reef Diving</button>
          <button className="tab-button" data-tab="night-diving">Night Diving</button>
          <button className="tab-button" data-tab="drift-diving">Drift Diving</button>
          <button className="tab-button" data-tab="wreck-diving">Wreck Diving</button>
          <button className="tab-button" data-tab="cave-diving">Cave Diving</button>
          <button className="tab-button" data-tab="lionfish-hunting">Lionfish Hunting</button>
          <button className="tab-button" data-tab="deep-diving">Deep Diving</button>
          <button className="tab-button" data-tab="nitrox-diving">Nitrox Diving</button>
        </div>
      </div>

      <div className="tab-content" id="reef-diving">
        <h3>Reef Diving</h3>
        <div className="gallery">
          <img src="/media/morena.JPG" alt="Reef Diving 1" />
          <img src="/media/corales.JPG" alt="Reef Diving 2" />
          <img src="/media/pez angel frances.JPG" alt="Reef Diving 3" />
          <img src="/media/pluma.JPG" alt="Reef Diving 4" />
        </div>
      </div>

      <div className="tab-content" id="night-diving">
        <h3>Night Diving</h3>
        <div className="gallery">
          <img src="/media/vuela.JPG" alt="Night Diving 1" />
          <img src="/media/corales.JPG" alt="Night Diving 2" />
          <img src="/media/pez angel frances.JPG" alt="Night Diving 3" />
          <img src="/media/morena.JPG" alt="Night Diving 4" />
        </div>
      </div>

      <div className="tab-content" id="drift-diving">
        <h3>Drift Diving</h3>
        <div className="gallery">
          <img src="/media/pluma.JPG" alt="Drift Diving 1" />
          <img src="/media/vuela.JPG" alt="Drift Diving 2" />
          <img src="/media/corales.JPG" alt="Drift Diving 3" />
          <img src="/media/pez angel frances.JPG" alt="Drift Diving 4" />
        </div>
      </div>

      <div className="tab-content" id="wreck-diving">
        <h3>Wreck Diving</h3>
        <div className="gallery">
          <img src="/media/morena.JPG" alt="Wreck Diving 1" />
          <img src="/media/pluma.JPG" alt="Wreck Diving 2" />
          <img src="/media/vuela.JPG" alt="Wreck Diving 3" />
          <img src="/media/corales.JPG" alt="Wreck Diving 4" />
        </div>
      </div>

      <div className="tab-content" id="cave-diving">
        <h3>Cave Diving</h3>
        <div className="gallery">
          <img src="/media/WhatsApp Image 2025-05-10 at 3.43.56 PM.jpeg" alt="Cave Diving 1" />
          <img src="/media/WhatsApp Image 2025-05-10 at 3.43.56 PM (1).jpeg" alt="Cave Diving 2" />
          <img src="/media/WhatsApp Image 2025-05-10 at 3.43.56 PM (2).jpeg" alt="Cave Diving 3" />
          <img src="/media/vuela.JPG" alt="Cave Diving 4" />
        </div>
      </div>

      <div className="tab-content" id="lionfish-hunting">
        <h3>Lionfish Hunting</h3>
        <div className="gallery">
          <img src="/media/corales.JPG" alt="Lionfish Hunting 1" />
          <img src="/media/pez angel frances.JPG" alt="Lionfish Hunting 2" />
          <img src="/media/morena.JPG" alt="Lionfish Hunting 3" />
          <img src="/media/pluma.JPG" alt="Lionfish Hunting 4" />
        </div>
      </div>

      <div className="tab-content" id="deep-diving">
        <h3>Deep Diving</h3>
        <div className="gallery">
          <img src="/media/vuela.JPG" alt="Deep Diving 1" />
          <img src="/media/corales.JPG" alt="Deep Diving 2" />
          <img src="/media/pez angel frances.JPG" alt="Deep Diving 3" />
          <img src="/media/morena.JPG" alt="Deep Diving 4" />
        </div>
      </div>

      <div className="tab-content" id="nitrox-diving">
        <h3>Nitrox Diving</h3>
        <div className="gallery">
          <img src="/media/pluma.JPG" alt="Nitrox Diving 1" />
          <img src="/media/vuela.JPG" alt="Nitrox Diving 2" />
          <img src="/media/corales.JPG" alt="Nitrox Diving 3" />
          <img src="/media/pez angel frances.JPG" alt="Nitrox Diving 4" />
        </div>
      </div>
    </section>
  );
};

export default Tours;
