import React from "react";

import { SongContainer } from "./styles/Song.styled";

const Song = ({ currentSong }) => {
  return (
    <SongContainer>
      <img src={currentSong.cover}></img>
      <h2>{currentSong.name}</h2>
      <h3>{currentSong.artist}</h3>
    </SongContainer>
  );
};

export default Song;
