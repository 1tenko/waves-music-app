import styled from "styled-components";

export const PlayerContainer = styled.div`
  min-height: 20vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const TimeControl = styled.div`
  width: 50%;
  display: flex;
  input {
    width: 100%;
    padding: 1rem 0rem;
  }
  p {
    padding: 1rem;
  }
`;

export const PlayControl = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  width: 30%;
  svg {
    cursor: pointer;
  }
`;
