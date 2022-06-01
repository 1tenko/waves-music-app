import React, { useRef } from "react";
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
//
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
  //
  return (
    <PlayerContainer>
      <TimeControl>
        <p>Start Time</p>
        <input type="range" />
        <p>End Time</p>
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
      <audio ref={audioRef} src={currentSong.audio}></audio>
    </PlayerContainer>
  );
};

export default Player;
