import React from "react";
import Videoplayer from "../components/videoPlayer";

function VideoDisplay() {
    console.log("video page loaded");

  return (
    <div style={style.container}>
      <Videoplayer />
    </div>
  );
}

const style = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",  
    padding: "20px",
  },
};

export default VideoDisplay;
