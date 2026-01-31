import React from 'react';
import Box from "@mui/material/Box";
import {Typography} from "@mui/material";
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";

function OurPlayList() {
let musicSongs =["Nostalgia"," Dance Classics "," Party Anthems"]
    return (
        <>

            <Typography variant="h3" textAlign={"center"} component="div" sx={{ mt: 1, mb: 30 }}>Our PlayList</Typography>
        <Box sx={{mt:"2rem",  minHeight: '70vh',
            width: '100%',}}>
            <Box sx={{mt:"2rem",display:"flex",flexDirection:"row",gap:2,justifyContent:"center", }}>
            {musicSongs.map((index, value)=>(
                <Button shape={"rounded"} size={"large"} startIcon={<LibraryMusicIcon/>} variant="contained"  sx={{mt:"1rem",padding:2,marginBottom:4,borderRadius:"10%"}} value={value}>{index}</Button>
            ))}
            </Box>
        </Box>


        </>
    );
}

export default OurPlayList;