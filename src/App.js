import React, { useState, useRef } from "react";

import GlobalStyles from "./components/styles/Global";

//Data
import data from "./data";

//Components
import Player from "./components/Player";
import Song from "./components/Song";
import Library from "./components/Library";
import Nav from "./components/Nav";

function App() {
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);

  //Ref
  const audioRef = useRef(null);
  //State
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
  });

  const [libraryStatus, setLibraryStatus] = useState(false);
  //
  const timeUpdateHandler = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    setSongInfo({ ...songInfo, currentTime: current, duration: duration });
  };

  return (
    <>
      <GlobalStyles />
      <div className="App">
        <Nav
          libraryStatus={libraryStatus}
          setLibraryStatus={setLibraryStatus}
        />
        <Song currentSong={currentSong} />
        <Player
          songInfo={songInfo}
          setSongInfo={setSongInfo}
          audioRef={audioRef}
          currentSong={currentSong}
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
          songs={songs}
          setCurrentSong={setCurrentSong}
          setSongs={setSongs}
        />
      </div>
      <Library
        audioRef={audioRef}
        songs={songs}
        setCurrentSong={setCurrentSong}
        isPlaying={isPlaying}
        currentSong={currentSong}
        setSongs={setSongs}
        libraryStatus={libraryStatus}
      />
      <audio
        onTimeUpdate={timeUpdateHandler}
        onLoadedMetadata={timeUpdateHandler}
        ref={audioRef}
        src={currentSong.audio}
      ></audio>
    </>
  );
}

export default App;
