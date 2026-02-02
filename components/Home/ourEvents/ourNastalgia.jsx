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
        <Box
            sx={{
                border: "2px dashed #fff",
                borderRadius: 1,
                px: 4,
                py: 3,
                maxWidth: '50%',
                width: "100%",
                mx: "auto",          // was mx: 2
                backgroundColor: "rgba(0,0,0,0.35)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
            }}
        > <Typography variant={"h2"} textAlign={"center"} component="div" sx={{ mt: 5, mb: 30 }}>
            <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. At consectetur dicta esse fugit iste itaque

            </div>
         </Typography>
    </Box>
    </Box>
        </>
    );
}

export default OurNastalgia;