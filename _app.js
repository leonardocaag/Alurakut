import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { AlurakutStyles } from '../src/lib/AluraCommons';

const GlobalStyle = createGlobalStyle`
  /* Reset CSS */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    font-family: sans-serif;
    background: url('https://diariodorio.com/wp-content/uploads/2019/07/rio-de-janeiro-brasil-mountain-tourism-landscape.jpg');
    background-size: 100%;
  }
  #__next {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
}

  img {

    max-width: 100%;
    height: auto;
    display: block;
  }

  ${AlurakutStyles}
`


const theme = {
  colors: {
    primary: '#0070f3',
  },
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
