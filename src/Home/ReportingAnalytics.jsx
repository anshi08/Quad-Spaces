import React, { useState } from 'react'
import './ReportingAnalytics.css'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import MeetingRoom from '../assets/MeetingRoom.svg';
import Button from '@mui/material/Button';
import svgImage from "../assets/image (1).svg";
import { Grid } from '@mui/material'
import Occupancy from "../assets/Occupancy.svg"
import Departments from "../assets/Departments.svg"
import ArrowIcon from "../assets/ArrowIcon.svg"
import ChildComponent from './ChildComponent';
import { motion } from "framer-motion"

const ReportingAnalytics = () => {

    const [clickedCard, setClickedCard] = useState(false);


    const [open, setOpen] = useState(true)


    const handleCardClick = (cardName) => {
        if (clickedCard === cardName) {
            setOpen(!open);
        } else {
            setClickedCard(cardName); //Different
            setOpen(false);
        }
    };

    return (
        <>
            {open ?
                <>


                    <div>
                        <div className='flex justify-center flex-col items-center'>
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
                                <p className='reporting'>Reporting Analytics</p>
                            </motion.div>

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
                                <p className='clickMore'>Click below to learn more</p>
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
                            <Grid container spacing={2} padding={3} >



                                {/* Left Image */}
                                <Grid item xs={12} md={4} >
                                    <Box sx={{ minWidth: 275 }} className="card-root" style={{ boxShadow: "rgba(0, 0, 0, 0.15) 0px 2px 30px 0px" }}>
                                        <Card variant="outlined" style={{ padding: '2rem' }} 
                                        onClick={() => handleCardClick('Occupancy' )}>
                                            <CardContent style={{ display: 'flex', alignItems: 'center', 
                                            justifyContent: 'center', flexDirection: 'column',cursor:'pointer' }}>
                                                <motion.div
                                                    initial={{
                                                        opacity: 0,
                                                        y: 100,
                                                    }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{
                                                        duration: 1,
                                                    }}
                                                    className='my-3'
                                                >
                                                    <img src={Occupancy} />
                                                </motion.div>

                                                <motion.div
                                                    initial={{
                                                        opacity: 0,
                                                        y: 100,
                                                    }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{
                                                        duration: 1,
                                                    }}
                                                    className='my-3'
                                                >
                                                    <p className='cardText'>
                                                        Occupancy
                                                    </p>
                                                </motion.div>

                                                <motion.div
                                                    initial={{
                                                        opacity: 0,
                                                        y: 100,
                                                    }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{
                                                        duration: 1,
                                                    }}
                                                    className='my-3'
                                                >
                                                    <img src={ArrowIcon} />
                                                </motion.div>
                                            </CardContent>
                                        </Card>
                                    </Box>

                                </Grid>

                                <Grid item xs={12} md={4}>
                                    <Box sx={{ minWidth: 275 }} className="card-root" style={{ boxShadow: "rgba(0, 0, 0, 0.15) 0px 2px 30px 0px" }}>
                                        <Card variant="outlined" style={{ padding: '2rem' }} onClick={() => handleCardClick('Meeting Rooms')} >
                                            {/* Middle Image */}
                                            <CardContent style={{ display: 'flex', alignItems: 'center', 
                                            justifyContent: 'center', flexDirection: 'column',cursor:'pointer' }}>
                                                <motion.div
                                                    initial={{
                                                        opacity: 0,
                                                        y: 100,
                                                    }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{
                                                        duration: 1,
                                                    }}
                                                    className='my-3'
                                                >
                                                    <img src={MeetingRoom} />
                                                </motion.div>
                                                <motion.div
                                                    initial={{
                                                        opacity: 0,
                                                        y: 100,
                                                    }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{
                                                        duration: 1,
                                                    }}
                                                    className='my-3'
                                                >
                                                    <p className='cardText'>
                                                        Meeting Rooms
                                                    </p>
                                                </motion.div>

                                                <motion.div
                                                    initial={{
                                                        opacity: 0,
                                                        y: 100,
                                                    }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{
                                                        duration: 1,
                                                    }}
                                                    className='my-3'
                                                >
                                                    <img src={ArrowIcon} />
                                                </motion.div>
                                            </CardContent>

                                        </Card>
                                    </Box>
                                </Grid>

                                {/* Right Image */}
                                <Grid item xs={12} md={4}  >
                                    <Box sx={{ minWidth: 275 }} className="card-root" style={{ boxShadow: "rgba(0, 0, 0, 0.15) 0px 2px 30px 0px" }}>
                                        <Card variant="outlined"
                                            style={{ padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
                                            onClick={() => handleCardClick('Departments')}>
                                            <CardContent style={{ display: 'flex', alignItems: 'center', 
                                            justifyContent: 'center', flexDirection: 'column',cursor:'pointer' }}>

                                                <motion.div
                                                    initial={{
                                                        opacity: 0,
                                                        y: 100,
                                                    }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{
                                                        duration: 1,
                                                    }}
                                                    className='my-3'
                                                >
                                                    <img src={Departments} />
                                                </motion.div>

                                                <motion.div
                                                    initial={{
                                                        opacity: 0,
                                                        y: 100,
                                                    }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{
                                                        duration: 1,
                                                    }}
                                                    className='my-3'
                                                >
                                                    <p className='cardText' >
                                                        Departments
                                                    </p>
                                                </motion.div>

                                                <motion.div
                                                    initial={{
                                                        opacity: 0,
                                                        y: 100,
                                                    }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{
                                                        duration: 1,
                                                    }}
                                                    className='my-3'
                                                >
                                                    <img src={ArrowIcon} />
                                                </motion.div>
                                            </CardContent>
                                        </Card>
                                    </Box>
                                    <img src={svgImage} 
                                    className='reportSVG'  />
                                </Grid>
                            </Grid>
                        </motion.div>
                    </div>
                </>
                :

                <>
                    {clickedCard && <ChildComponent cardName={clickedCard} setOpen={setOpen}
                        open={open} />}
                </>}
        </>
    )
}

export default ReportingAnalytics