import React from 'react';
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import {Typography} from "@mui/material";
import nostImage from '../../../src/assets/nostalgia1.jpg';
import Grid from "@mui/material/Grid";

function OurNastalgia() {
    return (
        <>



    <Box sx={{mt:"2rem",display:"flex",flexDirection:"column",gap:2,justifyContent:"center", backgroundImage: `url(${nostImage})`,  minHeight: '100vh',
        width: '100%',backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        "&::before": {
            content: '""',
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(0,0,0,0.55)", // dim level
            zIndex: 0,
        },

        // keep content above overlay
        "& > *": {
            position: "relative",
            zIndex: 1,
        },
    }}>
        <Typography variant="h3" textAlign={"center"} component="div" sx={{ mt: 5, mb: 30 }}>Our Nastalgia</Typography>
        <Grid container spacing={2}>
        <Grid size={8}>
           <Typography variant="h5" textAlign={"center"} component="div" sx={{ mt: 5, mb: 30 }}>Fin This is Great</Typography>
        </Grid>
        </Grid>
    </Box>

        </>
    );
}

export default OurNastalgia;