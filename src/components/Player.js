import React from "react";

const Player = () => {
  return (
    <div className="Player">
      <div className="TimeControl">
        <p>Start Time</p>
        <input type="range" />
        <p>End Time</p>
      </div>
      <div className="PlayControl"></div>
    </div>
  );
};

export default Player;
