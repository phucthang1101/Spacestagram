import { CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles'; import React, { useCallback, useEffect, useState } from 'react';
import { fetchCardsAsync } from '../../redux/CardsSlice';
import { useAppDispatch } from '../../redux/store';
import Footer from './footer/Footer';
import Header from './header/Header';

const Layout = (props: any) => {

    const dispatch = useAppDispatch();

    const [loading, setLoading] = useState(true);

    const initApp = useCallback(async () => {
        try {
            await dispatch(fetchCardsAsync());
        } catch (error) {
            console.log(error);
        }
    }, [dispatch])

    useEffect(() => {
        initApp().then(() => setLoading(false));
    }, [initApp])

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

    const handleThemeChange = () => {
        setDarkMode(!darkMode);
    }
    if (loading) return <div>Initialising app...'</div>
    return (
        <>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Header />
                {props.children}
                <Footer />
            </ThemeProvider>

        </>
    )
}

export default Layout
