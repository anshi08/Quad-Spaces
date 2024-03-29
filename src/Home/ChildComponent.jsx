import { Grid } from '@mui/material'
import React from 'react'
import occupancy from "../assets/modal1.png"
import closeButtonIcon from "../assets/closeButtonIcon.svg"; // Import your close button icon


const modalItems = [
    {
        'title':'Occupancy',
        'para':'Easily track and report on the usage within your space. Understand desk and office usage, and how traffic is flowing in your office on a daily, weekly and monthly basis.'
    },
    {
        'title':'Meeting Rooms',
        'para':'Better understand how your meeting rooms are being used with occupancy and booking data working simultaneously. Allow your teams to make conscious decisions on space usage, and free up rooms that are unused.'
    },
    {
        'title':'Departments',
        'para':'Take a deep dive with insights divulging how each of the departments and sectors in your business are making use of the space they are using. Track financials related to their occupied space, and make decisions based on verified metrics.'
    },
    
]
const ChildComponent = (props) => {
    console.log("aa",props.clickedCard)
  return (
    <>
      <div style={{ position: 'relative' }}>
        {/* Cross Button */}
        <button 
          onClick={()=>props.setOpen(true)}
          style={{
            position: 'absolute',
            top: '8px',
            right: '8px',
            backgroundColor: 'transparent',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          <img src={closeButtonIcon} alt="Close"  />
        </button>

        <Grid container>
          <Grid item xs={12} md={5}>
            <div>
              <p>Occupancy</p>
              <p>
              Easily track and report on the usage within your space. Understand desk and office usage, and how traffic is flowing in your office on a daily, weekly and monthly basis.
              </p>
            </div>
          </Grid>

          {/* Image */}
          <Grid item xs={12} md={7}>
            <img src={occupancy} alt="Occupancy" />
          </Grid>
        </Grid>
      </div>
    </>
  )
}

export default ChildComponent;
