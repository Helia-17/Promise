import { createGlobalStyle } from 'styled-components/native';
import { reset } from './reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    text-decoration: none;
    box-sizing: border-box;
  }
  body{
    //   your body styles
    // color: #ffffff;
    // font-family: 'Spoqa Han Sans Neo', 'sans-serif';
    // background-color: #000000;
  }
  
  button {
    all: unset;
    cursor: pointer;
  }
`;

export default GlobalStyle;