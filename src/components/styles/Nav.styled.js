import styled from "styled-components";

export const NavStyle = styled.nav`
  min-height: 10vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  button {
    background: transparent;
    border: 2px solid;
    cursor: pointer;
    padding: 0.5rem;
    transition: all 0.5s ease;
    &:hover {
      background: #7e2b50;
    }
  }
`;
