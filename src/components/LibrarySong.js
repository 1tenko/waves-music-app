import React from "react";

import {
  LibrarySongStyle,
  SongDescription,
  Selected,
} from "./styles/LibrarySong.styled";

import { playAudio } from "../util";

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
  const songSelectHandler = () => {
    setCurrentSong(song);
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
    setSongs(newSongs);
    //Check if the song is playing
    playAudio(isPlaying, audioRef);
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
