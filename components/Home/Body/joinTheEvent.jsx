import React from 'react';
import newIrfan from '../../../src/assets/newIrfan.jpg';
import Box from "@mui/material/Box";

import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import MainNaveBar from "../MainNaveBar.jsx";
import {Typography} from "@mui/material";
function JoinTheEvent() {
    return (
        <>
            <Box sx={{
                backgroundImage: `url(${newIrfan})`, // Or your local asset
                backgroundAttachment: 'fixed',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '100vh',
                width: '100%',
                color: 'white'
            }} >
                <CssBaseline />
                <Container fixed={false}>


                    <Box sx={{ mt: 13,display: 'flex',flexDirection:"column", justifyContent: 'center', alignItems: 'center' }} >
                        <Typography variant={"h5"} fontFamily={"sans-serif"} sx={{mt:"2rem"}}>Our Events</Typography>
                        <Typography variant="h5" fontFamily={"sans"} component="div" sx={{mt:"2rem",fontStyle:"italic"}}>
                            Join Us at our Disco Club for our Futuristic Enjoyments.
                            <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, fugiat harum iusto
                                possimus quaerat saepe totam? Beatae debitis error, fugiat impedit ipsam minus nulla
                                quod recusandae saepe suscipit tenetur vel?</div>
                            <div>Ab, accusamus aliquid atque beatae consequuntur cumque dolorem dolorum ea ex expedita
                                harum impedit inventore magnam nulla officia, officiis placeat quisquam quos rem rerum
                                saepe sequi tempore temporibus, vel vero.
                            </div>
                            <div>Ad animi, aut beatae blanditiis delectus dicta dolor doloremque hic id illo impedit
                                incidunt iste iure iusto nisi numquam odit optio placeat provident quae, qui sunt
                                temporibus velit veniam veritatis.
                            </div>
                        </Typography>
                    </Box>


                </Container>
            </Box></>
    );
}

export default JoinTheEvent;