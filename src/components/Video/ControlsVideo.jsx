import React from "react";
import "../Styles/VideoPlayer.css";
import { Progress } from "./Componets/Progress";
import { VolumeControlers } from "./Componets/Volume";

export function ControlsVideo({
  handlePlay,
  handleVolume,
  playing,
  volume,
  loadedSeconds,
  playedSeconds,
  handleProgress,
}) {
  return (
    <>
      <div className="videoControlsPlay" onClick={handlePlay}>
        {!playing ? "Play" : "Pause"}
      </div>
      <div className="videoControls">
        <VolumeControlers volume={volume} handleVolume={handleVolume} />
        <Progress loadedSeconds={loadedSeconds} playedSeconds={playedSeconds} />
      </div>
    </>
  );
}
