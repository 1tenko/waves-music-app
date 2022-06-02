import styled from "styled-components";

export const LibraryContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 20rem;
  height: 100%;
  /* background-color: lightblue; */
  box-shadow: 1px 2px 25px #404040;
  background-color: #18181b;
  transform: translateX(-100%);
  transition: all 0.5s ease;
  opacity: 0;
  /* overflow: scroll; */
  h2 {
    padding: 2rem;
  }

  &.active-library {
    transform: translateX(0%);
    opacity: 1;
  }
`;
