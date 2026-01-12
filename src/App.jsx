import MainHome from '../components/Home/Head/mainHome.jsx'
import './App.css'
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import React, { useState, useMemo, createContext } from 'react';
import { amber } from "@mui/material/colors";

// This allows any button in your app to toggle the theme
export const ColorModeContext = createContext({ toggleColorMode: () => {} });

function App() {
    const [mode, setMode] = useState('light');

    const colorMode = useMemo(() => ({
        toggleColorMode: () => {
            setMode((prev) => (prev === 'light' ? 'dark' : 'light'));
        },
    }), []);

    const theme = useMemo(() => createTheme({
        palette: {
            mode,
            primary: amber,
        },
    }), [mode]);

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <MainHome />
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
}

export default App;