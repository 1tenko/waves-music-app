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

  return (
    <>
      <GlobalStyles />
      <div className="App">
        <Song />
        <Player />
      </div>
    </>
  );
}

export default App;
