import React from 'react'
import "./QuadRealSpaces.css"
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import img1 from "../assets/img1.jpg"
import img2 from "../assets/img2.jpg"
import img3 from "../assets/img3.jpg"
import img4 from "../assets/img4.jpg"
import img5 from "../assets/img5.jpg"
import { Card, Grid } from '@mui/material';
import { motion } from "framer-motion";
import svgImage from "../assets/image (1).svg";

const QuadRealSpaces = () => {

    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const tabContent = [
        {
            value: '1',
            color: 'rgb(139, 189, 189)',
            heading: 'Real Time Occupancy ',
            text: 'To improve workplace performance, you have to be able to measure it. Optimize your workspace with real time data monitoring through occupancy sensors to understan d how frequently spaces are being used to make decisions. Create better employee experiences and understand which amenities are preferred.',
            image: img1
        },
        {
            value: '2',
            color: 'rgb(241, 248, 248)',
            heading: 'Space Management',
            text: 'Manage your entire office or workspace remotely from anywhere. Track the space usage or your office or meeting room spaces with integrated solutions providing you with the data to make conscious decisions for change. Easily adjust assignments and bookings for employees across your workforce.',
            image: img2
        },
        {
            value: '3',
            color: 'rgb(14, 103, 98)',
            heading: 'Environmental Controls',
            text: 'The key to increased productivity comes down to the environment in which people work. A healthy indoor climate at the office ensures that people feel energized and perform better. We strive to help you create a healthy and comfortable indoor climate at the office through easy control features in your platform.',
            image: img3
        },
        {
            value: '4',
            color: 'rgb(219, 241, 243)',
            heading: 'Desk Booking + Reservations',
            text: 'Book a desk anytime, anywhere — and find it quickly when you get there. Our desk booking capability allows your teams to book and schedule their work weeks with ease to align with their colleagues. Easily view available seating and assign seating to visitors with our customizable options..',
            image: img4
        },
        {
            value: '5',
            color: 'rgb(82, 160, 189)',
            heading: 'Data Driven Decisions ',
            text: 'Uncover actionable insights into how your office space is being used. Drive your workplace strategy with data that aids in your decision making process. Spaces will provide you with valuable data, whether youre looking at usage by floor, workspace type or department.',
            image: img5
        }
    ]



    return (

        <>
           
            <div className='flex flex-col items-center'>
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
                    <p className='whatIs'>What is QuadReal Spaces?</p>
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
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '100%',
                    }}

                >
                    <p className='custom'>A custom tailored space management solution, providing our
                        tenants with valuable insights and controls for their spaces.</p>
                </motion.div>
            </div>

            <TabContext value={value} >
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
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
                        <TabList
                            onChange={handleChange}
                            variant="scrollable"
                            scrollButtons="auto"
                        >

                            <Tab
                                label="Feature 1"
                                value="1"
                                className={value === '1' ? 'featuresBtn' : 'nonSelected'}
                            />
                            <Tab
                                label="Feature 2"
                                value="2"
                                className={value === '2' ? 'featuresBtn' : 'nonSelected'}
                            />
                            <Tab
                                label="Feature 3"
                                value="3"
                                className={value === '3' ? 'featuresBtn' : 'nonSelected'}
                            />
                            <Tab
                                label="Feature 4"
                                value="4"
                                className={value === '4' ? 'featuresBtn' : 'nonSelected'}
                            />
                            <Tab
                                label="Feature 5"
                                value="5"
                                className={value === '5' ? 'featuresBtn' : 'nonSelected'}
                            />

                        </TabList>
                    </motion.div>
                </div>
                <TabPanel value={value} style={{position:'relative'}}>
                    
                    <Card

                        sx={{
                            boxShadow: 'rgba(0, 0, 0, 0.15) 0px 2px 30px 0px',
                            maxHeight: '442px',
                            overflow: 'auto',
                            zIndex:999
                            
                        }}>
                            

                        {tabContent
                            .filter((tab) => tab.value === value)
                            .map((content) => (
                                <div key={content.value} style={{ padding: '2rem', position: 'relative' }}>
                                    <Grid container spacing={3} >
                                        <Grid item xs={12} md={6} display="flex" justifyContent="center">
                                            {/* <div style={{ borderLeft: `5px solid ${tabContent.find(tab => tab.value === value)?.color}`}}> */}
                                            <motion.div
                                                initial={{
                                                    opacity: 0,
                                                    x: -200,
                                                }}
                                                whileInView={{
                                                    opacity: 1,
                                                    x: 0,
                                                    backgroundColor: tabContent.find(tab => tab.value === value)?.color,
                                                    transition: {
                                                        duration: 1,
                                                    },  
                                                }}
                                                animate={{
                                                    opacity: 1,
                                                    x: 0,
                                                    backgroundColor: tabContent.find(tab => tab.value === value)?.color,
                                                    transition: {
                                                        duration: 1,
                                                    },  
                                                }}
                                             
                                                viewport={{ once: true }}
                                                className='bgStyle'
                                                style={{
                                                    position: 'absolute',
                                                    left: 0,
                                                    top: 0,
                                                    height: '100%',
                                                    width: '10%',
                                                }}
                                            >

                                            </motion.div>

                                            {/* image */}
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
                                                <motion.img
                                                    src={content.image}
                                                    alt="Your Image"
                                                    style={{
                                                        width: '100%',
                                                        maxHeight: 'auto',
                                                        borderRadius: '10px',
                                                        filter: ' drop-shadow(rgba(0, 0, 0, 0.15) 0px 2px 8px)',
                                                        objectFit: 'cover',
                                                    }}
                                                    initial={{ opacity: 0 }}
                                                    animate={{ opacity: 1 }}
                                                    transition={{ duration: 1 }}
                                                />
                                            </motion.div>

                                        </Grid>
                                        <Grid item xs={12} md={6} display="flex" flexDirection="column"
                                            justifyContent="center" className='flex-wrap'>
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
                                                style={{ zIndex:1}}

                                            >
                                                <p className='contentHeading'>{content.heading}</p>
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
                                                <p className='contentText'>{content.text}</p>
                                            </motion.div>
                                        </Grid>
                                    </Grid>
                                </div>
                            ))}
                    </Card>
                    <img src={svgImage} className="FeatureImage" />
                    
               
                </TabPanel>
            </TabContext>
         
        </>
    )
}

export default QuadRealSpaces