import styled from "styled-components";

export const LibraryContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 20rem;
  height: 100%;
  box-shadow: 1px 2px 25px #44403c;
  background-color: #1c1917;
  transform: translateX(-100%);
  transition: all 0.5s ease;
  opacity: 0;
  overflow: scroll;
  overflow-x: hidden;
  h2 {
    padding: 2rem;
  }

  &.active-library {
    transform: translateX(0%);
    opacity: 1;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
