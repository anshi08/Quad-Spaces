
import { Grid, Button } from '@mui/material';
import { useState } from 'react';
import gif1 from "../assets/screen-recording.gif";
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

                    <p onClick={() => handleItemClick(1)} 
                    className={selectedItem === 1 ? 'selected' : ''}>
                        Manage your Floorplan
                    </p>

                    <p onClick={() => handleItemClick(2)} 
                    className={selectedItem === 2 ? 'selected' : ''}>
                        Tracking Occupancy
                    </p>

                </Grid>

                <Grid item xs={12} md={7}>
                    <img src={selectedItem === 1 ? gif1 : gif2} alt="Gif" />
                </Grid>
            </Grid>
        </>
    )
}

export default SpaceMgt;
