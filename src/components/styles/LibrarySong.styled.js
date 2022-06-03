import styled from "styled-components";

export const LibrarySongStyle = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem 2rem 1rem 2rem;
  cursor: pointer;
  transition: background 0.5s ease;
  img {
    width: 30%;
  }
  &:hover {
    background: #44403c;
  }
  &.selected {
    background: #881337;
  }
`;

export const SongDescription = styled.div`
  padding-left: 1rem;
  h3 {
    font-size: 1rem;
  }
  h4 {
    font-size: 0.7rem;
  }
`;
