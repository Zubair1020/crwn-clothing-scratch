import styled from "styled-components";
import { SpinnerContainer } from "../spinner/spinner.style";

export const StyledBaseButton = styled.button`
  background-color: ${({ disabled }) => (disabled ? "gray" : "black")};
  border: none;
  color: ${({ disabled }) => (disabled ? "black" : "white")};
  font-weight: 500;
  font-family: "Montserrat", sans-serif !important;
  font-size: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  letter-spacing: 0.5px;
  line-height: 50px;
  height: 50px;
  min-width: 165px;
  position: relative;
  padding: 0 35px 0 35px;
  text-transform: uppercase;
  transition: background-color 0.2s ease-out;
  cursor: pointer;
  &:hover {
    background-color: gray;
    color: black;
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

export const StyledInvertedButton = styled(StyledBaseButton)(
  ({ disabled }) => ({
    backgroundColor: disabled ? "gray" : "white",
    color: "black",
    border: !disabled && "1px solid black",
    "&:hover": {
      backgroundColor: disabled ? "gray" : "black",
      color: disabled ? "black" : "white",
      border: "none",
    },
  })
);

export const ButtonSpinner = styled(SpinnerContainer)`
  height: 23px;
  width: 23px;
  border: 2px solid rgba(195, 195, 195, 0.6);
  border-top-color: white;
`;
