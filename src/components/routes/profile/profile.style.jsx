import styled from "styled-components";
import { StyledBaseButton } from "../../button/button.styles";

export const StyledContainer = styled.div``;

export const StyledProfileCont = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1.5rem;
  text-align: center;
  h2 {
    font-size: 3rem;
    font-weight: 500;
  }
  div {
    background-color: gray;
    border-radius: 7px;
    padding: 2rem;
    h4 {
      color: #e0e0e0;
      font-size: 1.5rem;
      font-weight: 500;
      line-height: 1.7;
    }
  }
`;
export const StyledButton = styled(StyledBaseButton)`
  margin: 1rem auto 0;
  border-radius: 4px;
  &:hover {
    background-color: #0000005a;
  }
`;

export const StyledBuyNowCont = styled.div`
  margin: 5rem 0 0;
  h3 {
    text-align: center;
    font-size: 2.3rem;
    font-weight: 500;
  }
`;
