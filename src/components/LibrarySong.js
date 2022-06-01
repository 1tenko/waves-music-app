import React from "react";

import { LibrarySongStyle, SongDescription } from "./styles/LibrarySong.styled";

const LibrarySong = ({ song, songs, setCurrentSong, id, key }) => {
  const songSelectHandler = () => {
    setCurrentSong(song);
  };

  return (
    <LibrarySongStyle onClick={songSelectHandler}>
      <img src={song.cover} alt={song.name}></img>
      <SongDescription>
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </SongDescription>
    </LibrarySongStyle>
  );
};

export default LibrarySong;
