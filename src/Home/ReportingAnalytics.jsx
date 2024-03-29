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

const ReportingAnalytics = () => {

    const [clickedCard, setClickedCard] = useState(false);
    

    const [open,setOpen]=useState(true)
    

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
                    <p className='reporting'>Reporting Analytics</p>
                    <p className='clickMore'>Click below to learn more</p>
                </div>
                <Grid container spacing={2} padding={3} >

                    {/* Left Image */}
                    <Grid item xs={12} md={4} >
                        <Box sx={{ minWidth: 275 }} className="card-root" style={{ boxShadow: "rgba(0, 0, 0, 0.15) 0px 2px 30px 0px" }}>
                            <Card variant="outlined" style={{ padding: '2rem' }} onClick={() => handleCardClick('Occupancy')}>
                                <CardContent style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                                    <img src={Occupancy} className='my-3' />
                                    <p className='cardText my-3'>
                                        Occupancy
                                    </p>
                                    <img src={ArrowIcon} className='my-3' />
                                </CardContent>
                                {/* <CardActions>
                                    <Button size="small">Learn More</Button>
                                </CardActions> */}
                            </Card>
                        </Box>
                    </Grid>

                    <Grid item xs={12} md={4}>
                        <Box sx={{ minWidth: 275 }} className="card-root" style={{ boxShadow: "rgba(0, 0, 0, 0.15) 0px 2px 30px 0px" }}>
                            <Card variant="outlined" style={{ padding: '2rem' }} onClick={() => handleCardClick('Meeting Rooms')} >
                                {/* Middle Image */}
                                <CardContent style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                                    <img src={MeetingRoom} className='my-3' />
                                    <p className='cardText my-3'>
                                        Meeting Rooms
                                    </p>
                                    <img src={ArrowIcon} className='my-3' />
                                </CardContent>
                                {/* <CardActions>
                                    <Button size="small">Learn More</Button>
                                </CardActions> */}
                            </Card>
                        </Box>
                    </Grid>

                    {/* Right Image */}
                    <Grid item xs={12} md={4} >
                        <Box sx={{ minWidth: 275 }} className="card-root" style={{ boxShadow: "rgba(0, 0, 0, 0.15) 0px 2px 30px 0px" }}>
                            <Card variant="outlined" 
                            style={{ padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
                            onClick={() => handleCardClick('Departments')}>
                                <CardContent style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                                    <img src={Departments} className='my-3' /> {/* Adjust the size of the icon as needed */}
                                    <p className='cardText my-3' >
                                        Departments
                                    </p>
                                    <img src={ArrowIcon} className='my-3' />
                                </CardContent>
                                {/* <CardActions>
                                    <Button size="small">Learn More</Button>
                                </CardActions> */}
                            </Card>
                        </Box>
                        {/* <img src={svgImage} style={{right: '-60%', top: '-30%', position:'relative',zIndex:'-1' }}  /> */}
                    </Grid>
                </Grid>
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