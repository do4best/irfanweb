import MainHome from '../components/Home/Head/mainHome.jsx'
import './App.css'
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import React, { useState, useMemo, createContext } from 'react';
import { amber } from "@mui/material/colors";
import { Route, Routes} from "react-router";
import OurEvents from "../components/Home/ourEvents/OurEvents.jsx";
import MainNaveBar from "../components/Home/MainNaveBar.jsx";
import SocialLinks from "../components/Home/footer/socialLinks.jsx";

// This allows any button in your app to toggle the theme
export const ColorModeContext = createContext({ toggleColorMode: () => {} });

function App() {
    const [mode, setMode] = useState(() => {
        return localStorage.getItem('themeMode') || 'dark';
    });

    const colorMode = useMemo(() => ({
        toggleColorMode: () => {
            setMode((prev) => {
                const newMode = prev === 'light' ? 'dark' : 'light';
                localStorage.setItem('themeMode', newMode);
                return newMode;
            });
        },
    }), []);

    const theme = useMemo(() => createTheme({
        palette: {
            mode,
            primary: amber,
            background: {
                default: mode === 'dark' ? '#121212' : '#f5f5f5',
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

                    <MainNaveBar/>
<Routes>
    <Route path="/" element={<MainHome />} />
    <Route path="/OurEvents" element={<OurEvents />} />

</Routes>
<SocialLinks/>  
            </ThemeProvider>
        </ColorModeContext.Provider>

    );
}

export default App;