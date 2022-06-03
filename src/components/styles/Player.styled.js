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
    accent-color: #722f37;
    cursor: pointer;
    color: #1c1917;
  }
  p {
    padding: 1rem;
  }
  @media screen and (max-width: 768px) {
    width: 90%;
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
  @media screen and (max-width: 768px) {
    width: 60%;
  }
`;
