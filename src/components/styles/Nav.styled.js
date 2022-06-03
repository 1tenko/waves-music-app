import styled from "styled-components";

export const NavStyle = styled.nav`
  min-height: 10vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  h1 {
    border-bottom: 2px solid #722f37;
    border-top: 2px solid #722f37;
    padding: 0.5rem 1rem;
  }
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    background: transparent;
    border: 2px solid;
    cursor: pointer;
    padding: 0.5rem;
    transition: all 0.5s ease;
    &:hover {
      background: #722f37;
    }
  }
  @media screen and (max-width: 768px) {
    button {
      z-index: 10;
    }
  }
`;
