import React from "react";
import '../../Styles/VideoPlayer.css'

export function Progress({ playedSeconds, loadedSeconds, funcChange }) {
  return (
    <div>
      <input
        value={playedSeconds}
        type="range"
        min="0"
        max={loadedSeconds}
        step="1"
        className = 'videoControlsProgress'
        onChange={(e) => funcChange(e.target.value)}
      />
    </div>
  );
}
