import React from "react";

import LibrarySong from "./LibrarySong";
//Styles
import { LibraryContainer } from "./styles/Library.styled";

const Library = ({ songs, setCurrentSong }) => {
  return (
    <LibraryContainer>
      <h2>Library</h2>
      <div>
        {songs.map((song) => (
          <LibrarySong
            songs={songs}
            setCurrentSong={setCurrentSong}
            song={song}
            id={song.id}
            key={song.id}
          />
        ))}
      </div>
    </LibraryContainer>
  );
};

export default Library;
