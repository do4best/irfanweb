import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import {Typography} from "@mui/material";
import backgroundImage from '../../src/assets/irfan.jpg';
import MainNaveBar from "./MainNaveBar.jsx";
import JoinTheEvent from "./Body/joinTheEvent.jsx"; // Import your image
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
            color: 'white'
        }} >
            <CssBaseline />
            <Container fixed={false}>

                    <MainNaveBar/>
                <Box sx={{ mt: 2,display: 'flex',flexDirection:"column", justifyContent: 'center', alignItems: 'center',minHeight:'100vh' }} >
                    <Typography variant={"h5"} fontFamily={"serif"}>Welcome to Irfan Club</Typography>
                    <Typography variant="h2" fontFamily={"sans-serif"} component="div" sx={{mt:"2rem"}}>
                       Welcome to the amazing world of Irfan
                    </Typography>
                </Box>


            </Container>
            <JoinTheEvent/>
        </Box>

        </>
    );
}
