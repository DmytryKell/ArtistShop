import React from "react";
import "../Styles/VideoPlayer.css";
import { Progress } from "./Componets/Progress";
import { VolumeControlers } from "./Componets/Volume";

import { IconContext } from "react-icons";
import { BiPlayCircle } from "react-icons/bi";
import { BiPauseCircle } from "react-icons/bi";
import { BiFullscreen } from "react-icons/bi";

export function ControlsVideo({
  handlePlay,
  handleVolume,
  playing,
  volume,
  loadedSeconds,
  playedSeconds,
  funcs,
}) {
  return (
    <>
      <IconContext.Provider value={{ color: "#f88307", size: "2em" }}>
        <div className="videoControlsPlay" onClick={handlePlay}>
          {!playing ? <BiPlayCircle /> : <BiPauseCircle />}
        </div>
        <div className="videoControls">
          <Progress
            loadedSeconds={loadedSeconds}
            playedSeconds={playedSeconds}
            funcChange={funcs.progress}
          />
          <div className="videoControls_header">
            <div>
              <VolumeControlers volume={volume} handleVolume={handleVolume} />
            </div>
            <div onClick={funcs.fullscreen}>
              <BiFullscreen />
            </div>
          </div>
        </div>
      </IconContext.Provider>
    </>
  );
}
