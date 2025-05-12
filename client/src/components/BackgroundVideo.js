import React from 'react';

const BackgroundVideo = () => {
  return (
    <video id="background-video" autoPlay muted loop>
      <source src="/media/scuba.mp4" type="video/mp4" />
      Your browser does not support the video feature.
      <p>To view this video, please enable JavaScript and consider upgrading your browser.</p>
    </video>
  );
};

export default BackgroundVideo;
