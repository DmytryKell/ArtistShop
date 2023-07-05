import React, { useState, useRef } from "react";
import ReactPlayer from "react-player";
import Video from "D:/Project/Програмування/React_website/artistshop/src/Assets/Video/screencast.mp4";
import { ControlsVideo } from "./ControlsVideo";

export function VideoPlayer() {
  const [state, setState] = useState({
    playing: false,
    volume: 0,
    loadedSeconds: 1, 
    playedSeconds: 0
  });

  const { playing, volume, loadedSeconds, playedSeconds } = state;

  const refPlayer = useRef();

  const handlePlay = () => {
    setState({ ...state, playing: !state.playing });
  };

  const handleVolume = (e) => {
        setState({...state, volume: e.target.volue});
  };

  const handleProgress = (e) => {
        setState({...state, ...e});
  };

  return (
    <div className="video-item">
      <ReactPlayer
        url={Video}
        controls={false}
        playing={playing}
        width="100%"
        height="auto"
        volume={volume}
        ref={refPlayer}
        onProgress={handleProgress}
      />
      <ControlsVideo
        handlePlay={handlePlay}
        volume={volume}
        handleVolume={handleVolume}
        playing={playing}
        loadedSeconds={loadedSeconds}
        playedSeconds={playedSeconds}
      />
    </div>
  );
}
