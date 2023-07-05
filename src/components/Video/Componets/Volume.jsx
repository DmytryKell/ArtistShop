import React from "react";

export function VolumeControlers({ volume, handleVolume }) {
  return (
    <div>
      <input
        value={volume}
        type="range"
        min="0"
        max="1"
        step="0.1"
        onChange={handleVolume}
      />
    </div>
  );
}
