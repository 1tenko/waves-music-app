import React from "react";

import LibrarySong from "./LibrarySong";
//Styles
import { LibraryContainer } from "./styles/Library.styled";

const Library = ({
  songs,
  currentSong,
  setCurrentSong,
  audioRef,
  isPlaying,
  setSongs,
  libraryStatus,
}) => {
  return (
    <LibraryContainer className={libraryStatus ? "active-library" : ""}>
      <h2>Library</h2>
      <div>
        {songs.map((song) => (
          <LibrarySong
            songs={songs}
            setCurrentSong={setCurrentSong}
            song={song}
            id={song.id}
            key={song.id}
            audioRef={audioRef}
            isPlaying={isPlaying}
            currentSong={currentSong}
            setSongs={setSongs}
          />
        ))}
      </div>
    </LibraryContainer>
  );
};

export default Library;
