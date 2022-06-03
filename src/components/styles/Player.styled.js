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
  align-items: center;
  input {
    width: 100%;
    -webkit-appearance: none;
    background: transparent;
    cursor: pointer;
  }
  input[type="range"]:focus {
    outline: none;
  }
  input[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 16px;
    width: 16px;
  }
  p {
    padding: 1rem;
  }
  @media screen and (max-width: 768px) {
    width: 90%;
  }
  .track {
    width: 100%;
    position: relative;
    border-radius: 1rem;
    overflow: hidden;
  }
  .animate-track {
    background: #d6d3d1;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    transform: translateX(0%);
    pointer-events: none;
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
