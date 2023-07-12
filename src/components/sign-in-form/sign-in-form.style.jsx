import styled from "styled-components";
import { StyledGoogleSignInButton } from "../button/button.styles";

export const StyledSignInCon = styled.div`
  display: flex;
  flex-direction: column;
  width: 380px;

  h2 {
    margin: 10px 0;
  }
`;

export const StyledButtonsCon = styled.div`
  display: flex;
  justify-content: space-between;

  ${StyledGoogleSignInButton} {
    font-weight: 400;
  }
`;
