import {
  createGlobalStyle,
  DefaultTheme,
  GlobalStyleComponent,
} from 'styled-components';

type GlobalStylesProps = {
  theme?: DefaultTheme;
};

const GlobalStyles: GlobalStyleComponent<
  GlobalStylesProps,
  DefaultTheme
> = createGlobalStyle`
  * {
      box-sizing: border-box;
      outline: 0;
    }
  
    html, body {
      width: 100%;
      height: 100%;
      font-family: "Roboto", sans-serif;
      --webkit-font-smoothing: antialiased !important;
      margin: 0;
      padding: 0;
      border: 0;
      background-color: #fef159;
    }
`;

export default GlobalStyles;
