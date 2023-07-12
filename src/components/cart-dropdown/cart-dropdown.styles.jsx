import styled from "styled-components";

import {
  StyledBaseButton,
  StyledGoogleSignInButton,
  StyledInvertedButton,
} from "../button/button.styles";

export const StyledCartDropdownCon = styled.div`
  position: absolute;
  width: 240px;
  height: 350px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 65px;
  right: 4px;
  z-index: 100;

  ${StyledBaseButton},
  ${StyledGoogleSignInButton}, 
  ${StyledInvertedButton} {
    margin-top: auto;
    font-size: 0.8rem;

    &:hover {
      font-size: 0.79rem;
    }
  }
`;

export const StyledEmptyMessage = styled.span`
  font-size: 18px;
  margin: 50px auto;
`;

export const StyledCartItemsCon = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  &::-webkit-scrollbar-thumb {
    background: gray;
    border-radius: 20px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;
