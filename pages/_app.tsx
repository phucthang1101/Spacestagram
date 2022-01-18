import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { wrapper } from '../redux/store';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { StylesProvider } from '@mui/styles';
import { CssBaseline } from '@mui/material';
import React, { useCallback, useEffect, useState } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  const [darkMode, setDarkMode] = useState(false);
  const paletteType = darkMode ? 'dark' : 'light';
  const theme = createTheme({
    palette: {
      mode: paletteType,
      background: {
        default: paletteType === 'light' ? '#eaeaea' : '#121212'
      }
    }
  })
  return(
  <>
   <StylesProvider injectFirst>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  </StylesProvider>
  </>
  )
 

}

export default wrapper.withRedux(MyApp);
