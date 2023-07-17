import { styled } from "styled-components";

export const StyledPaymentFormContainer = styled.div`
  margin: 1.5rem 0;
  h2 {
    font-size: 1.8rem;
    font-weight: 600;
  }
`;

export const StyledFrom = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  min-width: 500px;

  button {
    align-self: end;
  }
`;
