import React from "react";
import { BsMusicNoteBeamed } from "react-icons/bs";

import styles from '../Styles/AudioPlayer.module.css'

export function DisplayTrack({
  audioRef,
  currentTrack,
  setDuration,
  progressBarRef,
}) {
  const onLoadedMetadata = () => {
    const seconds = audioRef.current.duration;
    setDuration(seconds);
    progressBarRef.current.max = seconds;
  };

  return (
    <div>
      <audio
        src={currentTrack.src}
        ref={audioRef}
        onLoadedMetadata={onLoadedMetadata}
      />
      <div className={styles.audio_info}>
        <div className={styles.audio_image}>
          {currentTrack.thumbnail ? (
            <img src={currentTrack.thumbnail} alt="audio avatar" />
          ) : (
            <div className={styles.icon_wrapper}>
              <span className={styles.audio_icon}>
                <BsMusicNoteBeamed />
              </span>
            </div>
          )}
        </div>
        <div className={styles.text}>
          <p className={styles.title}>{currentTrack.title}</p>
          <p>{currentTrack.author}</p>
        </div>
      </div>
    </div>
  );
}
