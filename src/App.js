import React, { useState } from "react";

import GlobalStyles from "./components/styles/Global";

//Data
import data from "./data";

//Components
import Player from "./components/Player";
import Song from "./components/Song";

function App() {
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <>
      <GlobalStyles />
      <div className="App">
        <Song currentSong={currentSong} />
        <Player
          currentSong={currentSong}
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
        />
      </div>
    </>
  );
}

export default App;
