import * as React from 'react';
import { motion } from "motion/react"
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import {Typography} from "@mui/material";
import backgroundImage from '../../../src/assets/irfan.jpg';
import MainNaveBar from "../MainNaveBar.jsx";
import JoinTheEvent from "../Body/joinTheEvent.jsx";
import OurRecords from "../footer/ourRecords.jsx";
import SocialLinks from "../footer/socialLinks.jsx";
import theme from "./theme.js"; // Import your image
export default function FixedContainer() {

    return (
        <>
        <Box sx={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundAttachment: 'fixed',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            minHeight: '100vh',
            width: '100%',


            position: 'relative',

        }} >
            <Container fixed={false} sx={{ position: 'relative', zIndex: 1 }}>

                    <MainNaveBar/>
                <Box sx={{ mt: 2,display: 'flex',flexDirection:"column", justifyContent: 'center', alignItems: 'center',minHeight:'100vh', position: 'relative', zIndex: 1 }} >
                    <Typography variant={"h3"}>Welcome to Irfan Club</Typography>
                    <Typography variant="h2"  component="div" sx={{mt:"2rem"}} >
                        <motion.h1 initial={{
                            y:25,opacity:0}}
                        animate={{y:0,opacity:1}}
                        transition={{duration:1,ease:"circInOut"}}>Welcome to the amazing world of Irfan</motion.h1>
                    </Typography>
                </Box>


            </Container>
            <JoinTheEvent/>
            <OurRecords/>
            <SocialLinks/>
        </Box>

        </>
    );
}
