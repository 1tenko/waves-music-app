import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faAngleLeft,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";

//Styles
import {
  PlayerContainer,
  TimeControl,
  PlayControl,
} from "./styles/Player.styled";

const Player = ({ currentSong, isPlaying, setIsPlaying }) => {
  //Ref
  const audioRef = useRef(null);

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

  const timeUpdateHandler = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    setSongInfo({ ...songInfo, currentTime: current, duration: duration });
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

  //State
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
  });

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
          icon={faPlay}
        />
        <FontAwesomeIcon
          className="SkipForward"
          size={"2x"}
          icon={faAngleRight}
        />
      </PlayControl>
      <audio
        onTimeUpdate={timeUpdateHandler}
        onLoadedMetadata={timeUpdateHandler}
        ref={audioRef}
        src={currentSong.audio}
      ></audio>
    </PlayerContainer>
  );
};

export default Player;
