import {createGlobalStyle} from "styled-components";
import {theme} from "./Theme";

export const GlobalStyle = createGlobalStyle`
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
      margin: 0;
      font-family:'Nunito Regular', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      color: ${theme.colors.primaryText};
      background-color: ${theme.colors.primaryBg};
    }
    
    a {
      text-decoration: none;
    }
    
    ul {
      list-style: none;
    }
    
    button {
      background-color: unset;
      border: none;
    }
    
    p,
    small {
      color: ${theme.colors.secondaryText};
      font-family: Nunito Regular, sans-serif;
    }
    
    h1 {
      color: ${theme.colors.accent};
      font-family: Nunito Bold, sans-serif;
    }
    
    

`