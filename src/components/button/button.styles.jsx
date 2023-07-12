import styled from "styled-components";

export const StyledBaseButton = styled.button`
  font-family: "Montserrat", sans-serif !important;

  min-width: 165px;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  background-color: ${({ $disabled }) => ($disabled ? "gray" : "black")};
  color: ${({ $disabled }) => ($disabled ? "black" : "white")};
  text-transform: uppercase;
  font-weight: 500;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  transition: background-color 0.2s ease-out;
  &:hover {
    background-color: gray;
    color: ${({ $disabled }) => ($disabled ? "black" : "white")};
  }
`;

export const StyledGoogleSignInButton = styled(StyledBaseButton)`
  background-color: #4285f4;
  color: white;
  &:hover {
    background-color: #357ae8;
    border: none;
  }
`;

export const StyledInvertedButton = styled(StyledBaseButton)`
  background-color: white;
  color: black;
  border: 1px solid black;

  &:hover {
    background-color: black;
    color: white;
    border: none;
  }
`;
