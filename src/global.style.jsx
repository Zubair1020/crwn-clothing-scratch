import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *::before,
  *::after,
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
  body {
    font-family: "Montserrat", sans-serif;
    padding: 20px 40px;

    &::-webkit-scrollbar {
      width: 8px;
    }

    &::-webkit-scrollbar-track {
     background: #f1f1f1;
    }

    &::-webkit-scrollbar-thumb {
      background: gray;
      border-radius: 15px;
    }

    &::-webkit-scrollbar-thumb:hover {
      background: #555;
    }
  }
  a {
    text-decoration: none;
    color: #000;
  }
`;

export default GlobalStyle;
