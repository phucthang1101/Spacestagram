import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { wrapper } from '../redux/store';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { StylesProvider } from '@mui/styles';
import { CssBaseline } from '@mui/material';
import React, { useState } from 'react';
import createEmotionCache from '../styles/createEmotionCache';
import { CacheProvider } from '@emotion/react';

const clientSideEmotionCache = createEmotionCache();

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
  return (
    <>
      <CacheProvider value={clientSideEmotionCache}>
        <StylesProvider injectFirst>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Component {...pageProps} />
          </ThemeProvider>
        </StylesProvider>
      </CacheProvider>
    </>
  )


}

export default wrapper.withRedux(MyApp);
