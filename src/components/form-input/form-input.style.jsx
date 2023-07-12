import styled from "styled-components";

const subColor = "grey";
const mainColor = "black";
const errorColor = "red";

const shrinkLabel = () => `
  top: -14px;
  font-size: 12px;
  `;

export const StyledInputGroupCon = styled.div`
  position: relative;
  margin: 45px 0;

  input[type="password"] {
    letter-spacing: 0.3em;
  }
  .errorText {
    color: ${errorColor};
    font-size: 12px;
  }
`;

export const StyledFromInputLabel = styled.label`
  color: ${({ $error }) => ($error ? `${errorColor}` : `${subColor}`)};
  font-size: 16px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 300ms ease all;

  ${({ $shrink }) => $shrink && shrinkLabel()}
`;

export const StyledFromInput = styled.input`
  background: none;
  background-color: white;
  color: ${subColor};
  caret-color: ${({ $error }) => ($error ? `${errorColor}` : `${subColor}`)};
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid
    ${({ $error }) => ($error ? `${errorColor}` : `${subColor}`)};
  margin: 1rem 0;
  &:focus {
    outline: none;
  }

  &:focus ~ ${StyledFromInputLabel} {
    ${shrinkLabel()}
  }
`;
