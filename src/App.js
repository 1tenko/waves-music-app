import React from "react";

import GlobalStyles from "./components/styles/Global";

//Components
import Player from "./components/Player";
import Song from "./components/Song";

function App() {
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
