import MainHome from '../components/Home/Head/mainHome.jsx'
import './App.css'
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import React, { useState, useMemo, createContext } from 'react';
import { amber } from "@mui/material/colors";
import {BrowserRouter, Route, Routes} from "react-router";
import OurEvents from "../components/Home/ourEvents/OurEvents.jsx";

// This allows any button in your app to toggle the theme
export const ColorModeContext = createContext({ toggleColorMode: () => {} });

function App() {
    const [mode, setMode] = useState('dark');

    const colorMode = useMemo(() => ({
        toggleColorMode: () => {
            setMode((prev) => (prev === 'light' ? 'dark' : 'light'));
        },
    }), []);

    const theme = useMemo(() => createTheme({
        palette: {
            mode,
            primary: amber,
            background: {
                default: mode === 'dark' ? '#121212' : '#fff',
            }
        },
        typography: {
            fontFamily: ['Roboto', 'sans-serif','Mex'].join(','),
            h3:{
                fontFamily: ['Bud', 'serif'].join(','),
                fontWeight: 500,
            }
        },
    }), [mode]);

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <BrowserRouter>
<Routes>
    <Route path="/" element={<MainHome />} />
    <Route path="/OurEvents" element={<OurEvents />} />

</Routes>
                </BrowserRouter>
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
}

export default App;