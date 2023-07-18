import React from "react";
import { tracks } from "../../Assets/audio/tracks";
import { useRef, useState } from "react";

import { Controls } from "./Controls";
import { DisplayTrack } from "./DisplayTrack";
import { ProgressBar } from "./ProgressBar";

import styles from '../Styles/AudioPlayer.module.css'

export function AudioPlayer() {
  const [timeProgress, setTimeProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [trackIndex, setTrackIndex] = useState(0);
  const [currentTrack, setCurrentTrack] = useState(tracks[trackIndex]);

  const audioRef = useRef();
  const progressBarRef = useRef();

  return (
    <div className={styles.audio_player}>
      <div className={styles.inner}>
        <DisplayTrack
          {...{ currentTrack, audioRef, setDuration, progressBarRef }}
        />
        <Controls
          {...{
            audioRef,
            progressBarRef,
            duration,
            setTimeProgress,
            tracks,
            trackIndex,
            setTrackIndex,
            setCurrentTrack,
          }}
        />
        <ProgressBar
          {...{ progressBarRef, audioRef, timeProgress, duration }}
        />
      </div>
    </div>
  );
}
