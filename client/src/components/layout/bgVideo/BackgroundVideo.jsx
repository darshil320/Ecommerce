import React from "react";
import "./BackgroundVideo.css";

const BackgroundVideo = ({ children, bgname, topPosition }) => {
  return (
    <div className="video-background">
      <video
        className="video-background-media"
        style={{ top: topPosition }}
        autoPlay
        loop
        muted
      >
        <source
          src={`${process.env.PUBLIC_URL}/assets/${bgname}.mp4`}
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <div className="video-background-overlay">{children}</div>
    </div>
  );
};

export default BackgroundVideo;
