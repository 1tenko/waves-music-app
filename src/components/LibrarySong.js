import React from "react";

import { LibrarySongStyle, SongDescription } from "./styles/LibrarySong.styled";

const LibrarySong = ({
  song,
  songs,
  setCurrentSong,
  audioRef,
  id,
  key,
  isPlaying,
}) => {
  const songSelectHandler = () => {
    setCurrentSong(song);
    //Check if the song is playing
    if (isPlaying) {
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise.then((audio) => {
          audioRef.current.play();
        });
      }
    }
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
