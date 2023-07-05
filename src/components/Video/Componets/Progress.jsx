import React from "react";

export function Progress({ playedSeconds, loadedSeconds, handleProgress }) {
  return (
    <div>
      <input
        value={playedSeconds}
        type="range"
        min="0"
        max={loadedSeconds}
        step="1"
        // onChange={handleProgress}
      />
    </div>
  );
}
