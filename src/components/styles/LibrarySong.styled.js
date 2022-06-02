import styled from "styled-components";

export const LibrarySongStyle = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem 2rem 1rem 2rem;
  cursor: pointer;
  img {
    width: 30%;
  }
  &:hover {
    background: #404040;
  }
  &.selected {
    background: #7e2b50;
  }
`;

export const SongDescription = styled.div`
  padding-left: 1rem;
  h3 {
    font-size: 1rem;
  }
  h4 {
    font-size: 0.75rem;
  }
`;
