import React from 'react';
import { Grid } from '@mui/material';
import "./QuadReal.css";
import quadLogo from "../assets/screen-shot-2023-03-27-at-10-40-58-am-314_129_162_34-full.png";
import image from "../assets/quadreal-property-group-quadreal-property-group-launches-its-gre-320_318_0_0-half.jpeg";
import AvatarImage from "../assets/image (2).svg";
import Arrow from "../assets/ArrowImage.svg";
import GirlImage from "../assets/gettyimages.jpg"
import svgImage from "../assets/image (1).svg";
import { motion } from "framer-motion"
import img1 from "../assets/image.png"
import img2 from "../assets/image (1).png"
import img3 from "../assets/image (2).png"
import img4 from "../assets/image (3).png"

const QuadRealText = () => {

    const handleScrollDown = () => {
        const targetComponent = document.getElementById('target-component');
        targetComponent.scrollIntoView({ behavior: 'smooth' });
    };


    return (
        <Grid container 
        style={{ backgroundColor: 'rgb(241, 248, 248)' }}
        >
            <Grid item xs={12} md={6}>
                <Grid container style={{ height: '100%' }}>
                    <img src={svgImage} className='svgImage' />
                    <Grid item xs={12} md={12} style={{
                        display: 'flex', padding: '10% 0 10% 7%',
                        justifyContent: 'center', alignItems: 'center', height: '100%', marginLeft: '10%'
                    }}>
                        <div>
                            <div className='flex'>

                                {/* Effect */}
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ rotate: 180, scale: 1 }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 260,
                                        damping: 20
                                    }}
                                >
                                    <img src={image} style={{ width: '51px', height: '50px' }} alt="Image" />
                                </motion.div>

                                <motion.div
                                    initial={{
                                        opacity: 0,
                                        x: -50,
                                    }}
                                    whileInView={{
                                        opacity: 1,
                                        x: 0,
                                        transition: {
                                            duration: 1,
                                        },
                                    }}
                                    viewport={{ once: true }}
                                    style={{position:'relative',display:'flex' , alignItems:'center'}}
                                >
                                    <img src={quadLogo} style={{ width: '99px', height: '41px' }} alt="Quad Logo" />
                                </motion.div>
                            </div>

                            <motion.div
                                initial={{
                                    opacity: 0,
                                    y: 100,
                                }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                    transition: {
                                        duration: 1,
                                    },
                                }}
                                viewport={{ once: true }}
                            // style={{ padding: '3rem 0' }}

                            >
                                <p className='workplace my-4'>An intuitive workplace experience platform</p>
                            </motion.div>

                            <Grid container spacing={2}>
                                <Grid item xs={12} md={6} className='stylingPadding'>

                                    <div className='flex my-4'>
                                        <img src={img2} style={{ width: '50px', height: '50px' }}
                                         alt="Avatar" className='mgtImg'/>
                                        <motion.div
                                            initial={{
                                                opacity: 0,
                                                x: -100,
                                            }}
                                            whileInView={{
                                                opacity: 1,
                                                x: 0,
                                                transition: {
                                                    duration: 1,
                                                },
                                            }}
                                            viewport={{ once: true }}
                                        >

                                            <p className='space mx-3'>Flexible space management platform for Facilities management</p>
                                        </motion.div>
                                    </div>
                                    <div className='flex my-4'>
                                        <img src={img4} style={{ width: '50px', height: '50px' }} alt="Avatar" />
                                        <motion.div
                                            initial={{
                                                opacity: 0,
                                                x: -100,
                                            }}
                                            whileInView={{
                                                opacity: 1,
                                                x: 0,
                                                transition: {
                                                    duration: 1,
                                                },
                                            }}
                                            viewport={{ once: true }}
                                        >
                                            <p className='RealTime mx-3'>Real-time occupancy layers to understand how teams utilize your spaces and meeting rooms</p>
                                        </motion.div>
                                    </div>

                                </Grid>

                                <Grid item xs={12} md={6}>
                                    <div className='flex my-4'>
                                        <img src={img3} style={{ width: '50px', height: '50px' }} alt="Avatar" />

                                        <motion.div
                                            initial={{
                                                opacity: 0,
                                                x: -100,
                                            }}
                                            whileInView={{
                                                opacity: 1,
                                                x: 0,
                                                transition: {
                                                    duration: 1,
                                                },
                                            }}
                                            viewport={{ once: true }}
                                        >
                                            <p className='booking mx-3'>Space booking platform for desks, meeting rooms, and common spaces</p>
                                        </motion.div>
                                    </div>
                                    <div className='flex my-4'>
                                        <img src={img1} style={{ width: '50px', height: '50px' }} alt="Avatar" />
                                        <motion.div
                                            initial={{
                                                opacity: 0,
                                                x: -100,
                                            }}
                                            whileInView={{
                                                opacity: 1,
                                                x: 0,
                                                transition: {
                                                    duration: 1,
                                                },
                                            }}
                                            viewport={{ once: true }}
                                        >
                                            <p className='Data mx-3'>Data and analytics dashboard with valuable insights</p>
                                        </motion.div>
                                    </div>
                                </Grid>
                            </Grid>
                            <div className="arrow-animation cursor-pointer" onClick={handleScrollDown} >
                                <img src={Arrow} className="arrow" />
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12} md={6} >
                <motion.div
                    initial={{
                        opacity: 0,
                        x: 100,
                    }}
                    whileInView={{
                        opacity: 1,
                        x: 0,
                        transition: {
                            duration: 1,
                        },
                    }}
                    viewport={{ once: true }}
                    style={{ width: '100%', height: '100%' }}
                    className='imageOverflow'
                >
                    <div style={{
                        mixBlendMode: 'normal',
                        maskRepeat: 'no-repeat',
                        maskImage: 'url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGlkPSJMYXllcl8xNjQyMzk5N2U4NDkxMSIgdmlld0JveD0iMCAwIDM0NC4wMiAzNDMuNTIiIGFyaWEtaGlkZGVuPSJ0cnVlIiBzdHlsZT0iZmlsbDogdXJsKCZxdW90OyNDZXJvc0dyYWRpZW50X2lkZDJhZjRhNGVhJnF1b3Q7KTsgdHJhbnNmb3JtOiBzY2FsZSgxLCAxKTsgb3BhY2l0eTogMTsiIHdpZHRoPSI3MTciIGhlaWdodD0iNzE1Ij48ZGVmcz48bGluZWFyR3JhZGllbnQgY2xhc3M9ImNlcm9zZ3JhZGllbnQiIGRhdGEtY2Vyb3NncmFkaWVudD0idHJ1ZSIgaWQ9IkNlcm9zR3JhZGllbnRfaWRkMmFmNGE0ZWEiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iNTAlIiB5MT0iMTAwJSIgeDI9IjUwJSIgeTI9IjAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjQzgxMDJFIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjQzgxMDJFIi8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQvPjwvZGVmcz48cGF0aCBkPSJtMzQ0LjAyLDE3Mi40M2MtLjc3LDEuNDgtMS4zMSwyLjY5LTIsMy44MS0yOC44MSw0Ny4wMy02NC4zOCw4OC4zMS0xMDcuMDQsMTIzLjE4LTE4LjE1LDE0Ljg0LTM3Ljg5LDI3LjcxLTU2LjgxLDQxLjYtNC42NSwzLjQyLTguMzgsMy4yMi0xMy40LjA0LTMwLjA4LTE5LjA3LTU4LjI1LTQwLjU3LTgzLjYzLTY1LjU3LTMwLjI1LTI5LjgtNTcuMzQtNjIuMi03OS40NC05OC42Mi0yLjIxLTMuNjMtMi4zMS02LjE3LS4wNC05Ljg2LDMwLjY4LTQ5LjczLDY4Ljk3LTkyLjc2LDExNC41NC0xMjkuMTQsMTYuNDktMTMuMTcsMzQuNTItMjQuNDIsNTEuOC0zNi42MSwyLjU3LTEuODIsNC43My0xLjU1LDcuMzEuMDIsMzEuODQsMTkuNDYsNjEuNDUsNDEuOTIsODcuNzgsNjguMzEsMjkuMzUsMjkuNCw1Ni4wOSw2MS4wNyw3Ny43MSw5Ni43NywxLjE5LDEuOTYsMi4xNiw0LjA3LDMuMjIsNi4wN1oiIHN0eWxlPSJmaWxsOnVybCgjQ2Vyb3NHcmFkaWVudF9pZGI3Y2E2MTk0Yyk7ZmlsbDp1cmwoI0Nlcm9zR3JhZGllbnRfaWRkMmFmNGE0ZWEpOyIvPjwvc3ZnPg==)',
                        maskSize: '100% 100%',
                        margin: '-1rem 0 2.5rem 0',
                        transform:'scale(1.1)',
                    }}>

                        <img src={GirlImage} style={{ width: '100%', height: '100%' }} alt="Girl Image" />

                    </div>
                </motion.div>


            </Grid>
        </Grid>
    );
};

export default QuadRealText;
