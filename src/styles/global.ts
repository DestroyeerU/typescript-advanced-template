import { createGlobalStyle } from 'styled-components';

import colors from './colors';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    outline: none;
  }

  html {
    font-size: 10px;
  }

  body {
    background: ${colors.background};
  }

  #root {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 100vw;
    height: 100vh;
  }

  *, button, input {
    color: ${colors.text};
    background: none;

    border: 0;

    font-family: Arial, Helvetica, sans-serif;
  }

  button {
    cursor: pointer;
  }

`;
