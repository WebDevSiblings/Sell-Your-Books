import React from "react";

const VideoBackground = () => {
  const videoContainerStyle: React.CSSProperties = {
    position: "relative",
    width: "100%",
    height: "728px",
    overflow: "hidden",
  };

  const videoStyle: React.CSSProperties = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    minWidth: "1280px",
    minHeight: "800px",
  };

  return (
    <div style={videoContainerStyle}>
      <video autoPlay loop muted style={videoStyle}>
        <source src="/src/assets/books.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default VideoBackground;
