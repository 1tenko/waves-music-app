import React from "react";
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
const Player = () => {
  return (
    <PlayerContainer>
      <TimeControl>
        <p>Start Time</p>
        <input type="range" />
        <p>End Time</p>
      </TimeControl>
      <PlayControl>
        <FontAwesomeIcon className="SkipBack" size={"2x"} icon={faAngleLeft} />
        <FontAwesomeIcon className="Play" size={"2x"} icon={faPlay} />
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
