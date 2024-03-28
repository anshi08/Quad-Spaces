import { Grid, Button } from '@mui/material';
import { useState } from 'react';
import gif1 from "../assets/screen-recording.gif";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import gif2 from "../assets/Map1.jpg";
import "./SpaceMgt.css";

const SpaceMgt = () => {
    const [selectedItem, setSelectedItem] = useState(1); // Default selected item is 1

    const handleItemClick = (item) => {
        setSelectedItem(item);
    };

    return (
        <>
            <Grid container>
                <Grid item xs={12} md={5} padding="2rem"
                    display="flex" justifyContent="center" flexDirection="column">

                    <p className='occupancytext'>Space Management & Occupancy Tracking</p>

                    <span className='spanTag my-4'>Click below to see more</span>

                    <div style={{ width: '70%', display: 'flex', justifyContent: 'space-between', cursor: 'pointer' }}>
                        <p
                            onClick={() => handleItemClick(1)}
                            className={`selected12 ${selectedItem === 1 ? 'selected' : ''}`}>
                            Manage your Floorplan
                        </p>
                        {selectedItem === 1 && (
                        <div className='sidearrow-animation'>
                        <ArrowForwardIosIcon className='sidearrow'
                        onClick={() => handleItemClick(1)} />
                        </div>
                    )}
                    </div>
                    {/* {selectedItem === 1 && ( */}
                    <hr className='my-3' style={{ border: '2px solid rgb(15, 103, 100)', width: '70%' }} />
                    {/* )} */}
                    <div style={{ width: '70%', display: 'flex', justifyContent: 'space-between', cursor: 'pointer' }}>
                        <p 
                            onClick={() => handleItemClick(2)}
                            className={`selected12 ${selectedItem === 2 ? 'selected' : ''}`}>
                            Tracking Occupancy
                        </p>
                        {selectedItem === 2 && (
                        <div className='sidearrow-animation'>
                        <ArrowForwardIosIcon className='sidearrow'
                        onClick={() => handleItemClick(2)} />
                        </div>
                        )}
                    </div>
                    {/* {selectedItem === 2 && ( */}
                    <hr className='my-3' style={{ border: '2px solid rgb(15, 103, 100)', width: '70%' }} />
                    {/* )} */}
                </Grid>

                <Grid item xs={12} md={7}>
                    <img src={selectedItem === 1 ? gif1 : gif2} alt="Gif" />
                </Grid>
            </Grid>
        </>
    )
}

export default SpaceMgt;
