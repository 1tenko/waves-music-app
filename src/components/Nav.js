import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";

//Styles
import { NavStyle } from "./styles/Nav.styled";

const Nav = ({ libraryStatus, setLibraryStatus }) => {
  return (
    <NavStyle>
      <h1>Wine</h1>
      <button onClick={() => setLibraryStatus(!libraryStatus)}>
        Library
        <FontAwesomeIcon icon={faMusic} />
      </button>
    </NavStyle>
  );
};

export default Nav;
