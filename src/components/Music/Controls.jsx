import React from "react";
import { useState, useEffect, useRef, useCallback } from "react";

import styles from "../Styles/AudioPlayer.module.css";

import { IconContext } from "react-icons";
import {
  MdFastRewind,
  MdFastForward,
  MdSkipPrevious,
  MdSkipNext,
  MdPlayCircleOutline,
  MdPauseCircleOutline,
} from "react-icons/md";

import { MdVolumeOff, MdVolumeDownAlt, MdVolumeUp } from "react-icons/md";

export function Controls({
  audioRef,
  progressBarRef,
  duration,
  setTimeProgress,
  tracks,
  trackIndex,
  setTrackIndex,
  setCurrentTrack,
}) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(60);
  const [muteVolume, setMuteVolume] = useState(false);
  const playAnimationRef = useRef();

  const togglePlayPause = () => {
    setIsPlaying((prev) => !prev);
  };
  const repeat = useCallback(() => {
    const currentTime = audioRef.current.currentTime;
    setTimeProgress(currentTime);
    progressBarRef.current.value = currentTime;
    progressBarRef.current.style.setProperty(
      "--range-progress",
      `${(progressBarRef.current.value / duration) * 100}%`
    );

    playAnimationRef.current = requestAnimationFrame(repeat);
  }, [audioRef, duration, progressBarRef, setTimeProgress]);

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
    playAnimationRef.current = requestAnimationFrame(repeat);
  }, [isPlaying, audioRef, repeat]);

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying, audioRef]);

  useEffect(() => {
    if (audioRef) {
      audioRef.current.volume = volume / 100;
    }
  }, [volume, audioRef]);

  useEffect(() => {
    if (audioRef) {
      audioRef.current.volume = volume / 100;
      audioRef.current.muted = muteVolume;
    }
  }, [volume, audioRef, muteVolume]);

  const skipForward = () => {
    audioRef.current.currentTime += 15;
  };

  const skipBackward = () => {
    audioRef.current.currentTime -= 15;
  };

  const handlePrevious = () => {
    if (trackIndex === 0) {
      let lastTrackIndex = tracks.length - 1;
      setTrackIndex(lastTrackIndex);
      setCurrentTrack(tracks[lastTrackIndex]);
    } else {
      setTrackIndex((prev) => prev - 1);
      setCurrentTrack(tracks[trackIndex - 1]);
    }
  };

  const handleNext = () => {
    if (trackIndex >= tracks.length - 1) {
      setTrackIndex(0);
      setCurrentTrack(tracks[0]);
    } else {
      setTrackIndex((prev) => prev + 1);
      setCurrentTrack(tracks[trackIndex + 1]);
    }
  };

  return (
    <>
      <IconContext.Provider value={{ size: "1.5em" }}>
        <div className={styles.controls_wrapper}>
          <div className={styles.controls}>
            <button onClick={handlePrevious}>
              <MdSkipPrevious />
            </button>
            <button onClick={skipBackward}>
              <MdFastRewind />
            </button>

            <button onClick={togglePlayPause}>
              {isPlaying ? <MdPauseCircleOutline /> : <MdPlayCircleOutline />}
            </button>
            <button onClick={skipForward}>
              <MdFastForward />
            </button>
            <button onClick={handleNext}>
              <MdSkipNext />
            </button>
          </div>
          <div className={styles.volume}>
            <button onClick={() => setMuteVolume((prev) => !prev)}>
              {muteVolume || volume < 5 ? (
                <MdVolumeOff />
              ) : volume < 40 ? (
                <MdVolumeDownAlt />
              ) : (
                <MdVolumeUp />
              )}
            </button>
            <input
              type="range"
              min={0}
              max={100}
              value={volume}
              onChange={(e) => setVolume(e.target.value)}
            />
          </div>
        </div>
      </IconContext.Provider>
    </>
  );
}
