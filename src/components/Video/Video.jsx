import React, { useState, useRef } from "react";
import ReactPlayer from "react-player";
import { ControlsVideo } from "./ControlsVideo";
import {videos} from "../../Assets/Video/videos";

import screenfull from "screenfull";

export function VideoPlayer() {
  const [state, setState] = useState({
    playing: false,
    volume: 0,
    loadedSeconds: 1,
    playedSeconds: 0,
  });

  const [currentVideo, setcurrentVideo] = useState(videos[0]);

  const { playing, volume, loadedSeconds, playedSeconds } = state;

  const refPlayer = useRef();

  const refPlayerConteiner = useRef();

  const handlePlay = () => {
    setState({ ...state, playing: !state.playing });
  };

  const handleVolume = (e) => {
    setState({ ...state, volume: e.target.volue });
  };

  const handleProgress = (e) => {
    setState({ ...state, ...e });
  };

  const handleProgressControls = (e) => {
    refPlayer.current.seekTo(Number(e));
  };

  const handleFullScreen = (e) => {
    screenfull.toggle(refPlayerConteiner.current);
    console.log(e);
  };

  return (
    <>
      <div ref={refPlayerConteiner} className="video-item">
        <ReactPlayer
          url={currentVideo.src}
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
          funcs={{
            progress: handleProgressControls,
            fullscreen: handleFullScreen,
          }}
        />
      </div>
    </>
  );
}
