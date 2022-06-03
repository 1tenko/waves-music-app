import React from "react";

import {
  LibrarySongStyle,
  SongDescription,
  Selected,
} from "./styles/LibrarySong.styled";

const LibrarySong = ({
  song,
  songs,
  currentSong,
  setCurrentSong,
  audioRef,
  id,
  isPlaying,
  setSongs,
}) => {
  const songSelectHandler = async () => {
    await setCurrentSong(song);
    //Add Active State
    const newSongs = songs.map((song) => {
      if (song.id === id) {
        return {
          ...song,
          active: true,
        };
      } else {
        return {
          ...song,
          active: false,
        };
      }
    });
    await setSongs(newSongs);
    //Check if the song is playing
    if (isPlaying) audioRef.current.play();
  };

  return (
    <LibrarySongStyle
      onClick={songSelectHandler}
      className={song.id === currentSong.id ? "selected" : ""}
    >
      <img src={song.cover} alt={song.name}></img>
      <SongDescription>
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </SongDescription>
    </LibrarySongStyle>
  );
};

export default LibrarySong;
