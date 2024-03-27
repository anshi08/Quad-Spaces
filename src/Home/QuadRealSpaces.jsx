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
import { Grid } from '@mui/material';

const QuadRealSpaces = () => {

    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const tabContent = [
        {
            value: '1',
            color: 'rgb(139, 189, 189)',
            heading:'Real Time Occupancy ',
            text: 'To improve workplace performance, you have to be able to measure it. Optimize your workspace with real time data monitoring through occupancy sensors to understan d how frequently spaces are being used to make decisions. Create better employee experiences and understand which amenities are preferred.', 
            image: img1
        },
        {
            value: '2',
            color:'rgb(241, 248, 248)',
            heading:'Space Management',
            text: 'Manage your entire office or workspace remotely from anywhere. Track the space usage or your office or meeting room spaces with integrated solutions providing you with the data to make conscious decisions for change. Easily adjust assignments and bookings for employees across your workforce.',
            image: img2
        },
        {
            value: '3',
            color:'rgb(14, 103, 98)',
            heading:'Environmental Controls',
            text: 'The key to increased productivity comes down to the environment in which people work. A healthy indoor climate at the office ensures that people feel energized and perform better. We strive to help you create a healthy and comfortable indoor climate at the office through easy control features in your platform.',
            image: img3
        },
        {
            value: '4',
            color:'rgb(219, 241, 243);',
            heading:'Desk Booking + Reservations',
            text: 'Book a desk anytime, anywhere — and find it quickly when you get there. Our desk booking capability allows your teams to book and schedule their work weeks with ease to align with their colleagues. Easily view available seating and assign seating to visitors with our customizable options..',
            image: img4
        },
        {
            value: '5',
            color:'rgb(82, 160, 189)',
            heading:'Data Driven Decisions ',
            text: 'Uncover actionable insights into how your office space is being used. Drive your workplace strategy with data that aids in your decision making process. Spaces will provide you with valuable data, whether youre looking at usage by floor, workspace type or department.',
            image: img5
        }
    ]

    return (

        <>
            <div>
                <p className='whatIs'>What is QuadReal Spaces?</p>
                <p className='custom'>A custom tailored space management solution, providing our
                    tenants with valuable insights and controls for their spaces.</p>
            </div>
                <TabContext value={value}>
            <div style={{ display: 'flex', justifyContent:'center', alignItems: 'center',flexWrap:'wrap' }}>
                    
                    <TabList onChange={handleChange}>
                        <Tab label="Feature 1" value="1" />
                        <Tab label="Feature 2" value="2" />
                        <Tab label="Feature 3" value="3" />
                        <Tab label="Feature 4" value="4" />
                        <Tab label="Feature 5" value="5" />
                    </TabList>
                    </div>
                    <TabPanel value={value}>
                        <Box  className='shadow-lg' 
                        
                        style={{ boxShadow: 'rgba(0, 0, 0, 0.15) 0px 2px 30px 0px'}}>
                        
                        
                        {tabContent
                                .filter((tab) => tab.value === value)
                                .map((content) => (
                                    <div key={content.value} style={{padding:'2rem'}}>
                                        <Grid container >
                                            <Grid item xs={12} md={6} display="flex" justifyContent="center">
                                            {/* <div style={{ borderLeft: `5px solid ${tabContent.find(tab => tab.value === value)?.color}`}}> */}
                                            
                                              <img src={content.image} style={{width:'418px',
                                              height:'261px',borderRadius:'10px',
                                              filter:' drop-shadow(rgba(0, 0, 0, 0.15) 0px 2px 8px)'}} />
                                              {/* </div> */}
                                            </Grid>
                                            <Grid item xs={12} md={6} display="flex" flexDirection="column" 
                                            justifyContent="center" className='flex-wrap'>
                                                <p className='contentHeading'>{content.heading}</p>
                                                <p className='contentText'>{content.text}</p>
                                            </Grid>
                                        </Grid>
                                    </div>
                                ))}
                        </Box>
                    </TabPanel>
                </TabContext>
           
        </>
    )
}

export default QuadRealSpaces