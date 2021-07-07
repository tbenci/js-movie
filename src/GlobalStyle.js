import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --darkGrey: #1c1c1c;
    --fontBig: 1.5rem;
    --fontMed: 1.2rem;
    --fontSmall: 1rem;    
    --fontSuperBig: 2.5rem;
    --lightGrey: #eee;
    --maxWidth: 1280px;
    --medGrey: #353535;
    --white: #fff;
  }

  * {
    box-sizing: border-box;
    font-family: 'Abel', sans-serif;
  }

  body {
    margin:0;
    padding: 0;

    h1 {
      color: var(--white);
      font-size: 2rem;
      font-weight: 600;
    }

    h3 {
      font-size: 1.1rem;
      font-weight: 600;
    }

    p {
      color: var(--white);
      font-size: 1rem;
    }
  }
`;
