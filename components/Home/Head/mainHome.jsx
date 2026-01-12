import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import {Typography} from "@mui/material";
import backgroundImage from '../../../src/assets/irfan.jpg';
import MainNaveBar from "../MainNaveBar.jsx";
import JoinTheEvent from "../Body/joinTheEvent.jsx"; // Import your image
export default function FixedContainer() {
    return (
        <>
        <Box sx={{
            backgroundImage: `url(${backgroundImage})`, // Or your local asset
            backgroundAttachment: 'fixed',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            minHeight: '100vh',
            width: '100%',
            bgcolor: 'background.default',
            color: 'text.primary',
            position: 'relative',
            '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: (theme) => theme.palette.mode === 'dark' ? 'rgba(0,0,0,0.7)' : 'rgba(255,255,255,0.3)',
                zIndex: 0
            }
        }} >
            <Container fixed={false} sx={{ position: 'relative', zIndex: 1 }}>

                    <MainNaveBar/>
                <Box sx={{ mt: 2,display: 'flex',flexDirection:"column", justifyContent: 'center', alignItems: 'center',minHeight:'100vh', position: 'relative', zIndex: 1 }} >
                    <Typography variant={"h5"} fontFamily={"serif"} color="inherit">Welcome to Irfan Club</Typography>
                    <Typography variant="h2" fontFamily={"sans-serif"} component="div" sx={{mt:"2rem"}} color="inherit">
                       Welcome to the amazing world of Irfan
                    </Typography>
                </Box>


            </Container>
            <JoinTheEvent/>
        </Box>

        </>
    );
}
