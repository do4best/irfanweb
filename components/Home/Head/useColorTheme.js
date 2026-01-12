import React, {useMemo, useState} from 'react';
import {createTheme} from "@mui/material";
import theme from "./theme.js";

function UseColorTheme() {
    const [mode,setMode]=useState("light")
    const toggleMode=()=>setMode(mode==="light"?"dark":"light")
    const modifiedTheme=useMemo(
        ()=>
            createTheme({
                ...theme,
            palette:{
                ...theme.palette,
                mode
            }
        }),[mode]
    )
    return {
        theme:modifiedTheme,
        mode,toggleMode
    }
}

export default UseColorTheme;