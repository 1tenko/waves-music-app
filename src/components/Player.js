import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faAngleLeft,
  faAngleRight,
  faPause,
} from "@fortawesome/free-solid-svg-icons";

//Styles
import {
  PlayerContainer,
  TimeControl,
  PlayControl,
} from "./styles/Player.styled";

const Player = ({
  songInfo,
  setSongInfo,
  audioRef,
  currentSong,
  isPlaying,
  setIsPlaying,
}) => {
  //Event Handlers
  const playSongHandler = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(!isPlaying);
    } else {
      audioRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };

  const getTime = (time) => {
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  };

  const dragHandler = (e) => {
    audioRef.current.currentTime = e.target.value;
    setSongInfo({ ...songInfo, currentTime: e.target.value });
  };

  return (
    <PlayerContainer>
      <TimeControl>
        <p>{getTime(songInfo.currentTime)}</p>
        <input
          min={0}
          max={songInfo.duration}
          value={songInfo.currentTime}
          type="range"
          onChange={dragHandler}
        />
        <p>{getTime(songInfo.duration)}</p>
      </TimeControl>
      <PlayControl>
        <FontAwesomeIcon className="SkipBack" size={"2x"} icon={faAngleLeft} />
        <FontAwesomeIcon
          onClick={playSongHandler}
          className="Play"
          size={"2x"}
          icon={isPlaying ? faPause : faPlay}
        />
        <FontAwesomeIcon
          className="SkipForward"
          size={"2x"}
          icon={faAngleRight}
        />
      </PlayControl>
    </PlayerContainer>
  );
};

export default Player;
