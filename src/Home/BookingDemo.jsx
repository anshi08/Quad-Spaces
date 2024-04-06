import React, { useEffect, useState } from 'react';
import './BookingDemo.css';
import img1 from '../assets/BookingDemo.png';
import img2 from "../assets/Capture1.png";
import img3 from "../assets/Capture2.png";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Stepper from './Stepper';
import { motion } from 'framer-motion';
import Tooltip from '@mui/material/Tooltip'; 

const BookingDemo = () => {

 
  const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMouseOrTouchMove = (event) => {
      // Check if the event is a touch event
      const isTouchEvent = event.type.startsWith('touch');
      
      // Get the coordinates based on whether it's a mouse or touch event
      const x = isTouchEvent ? event.touches[0].clientX : event.clientX;
      const y = isTouchEvent ? event.touches[0].clientY : event.clientY;
  
      // Update state with the coordinates
      setCoordinates({ x, y });
    };
  
    // Attach the event listener for both mouse and touch events
    window.addEventListener('mousemove', handleMouseOrTouchMove);
    window.addEventListener('touchmove', handleMouseOrTouchMove);
  
    // Cleanup function to remove the event listeners when the component unmounts
    return () => {
      window.removeEventListener('mousemove', handleMouseOrTouchMove);
      window.removeEventListener('touchmove', handleMouseOrTouchMove);
    };
  }, []);
  

 
  const [demoStarted, setDemoStarted] = useState(false);
  const [currentImage, setCurrentImage] = useState(img1);
  // const [tooltipTitle, setTooltipTitle] = useState('Click to reserve this seat.')
  // const [showTooltip, setShowTooltip] = useState(false);
  // const [IsBtnClicked, setIsBtnClicked] = useState(false)
  const [isSideBoxVisible, setIsSideBoxVisible] = useState(true);

  const handleBeginDemo = () => {
    setDemoStarted(true);
    // setShowTooltip(true);
    setCurrentImage(img2)
    // setIsBtnClicked(true)
    setIsSideBoxVisible(false);
  };

  const handleImageChange = () => {
    setCurrentImage(img3)
  }

  // const handleTooltipClick = () => {
  //   setShowTooltip(false);
  //   setCurrentImage(img2)
    // setTimeout(() => {
    //   setTooltipTitle("Click here to create a new booking.")
    //   setShowTooltip(true)
    // }, 1000);
  // };


  return (
    <>
      <div className="p-14">
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
        >
          <p className="bookDemo">Booking Demo</p>
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
        >
          <p className="Follow">Follow along to discover how you can easily reserve your workspace</p>
        </motion.div>
      </div>
      <div>
        <div className={`container ${demoStarted ? 'demo-started' : ''}`}>
          <div className="image-stack">
            <div className="image-stack__item image-stack__item--top">
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
              >
                <div style={{ backgroundColor: 'rgb(15, 103, 100)', display: isSideBoxVisible ? 'block' : 'none' }}>
                  <div className="p-4 md:p-8">
                    <p className="welcome my-2">Welcome to Quadreal Spaces</p>
                    <p className="dashboard my-2">You can book your own workspace using this dashboard.</p>
                    <div className="flex cursor-pointer items-center" onClick={handleBeginDemo}>
                      <p className="welcome my-2">BEGIN DEMO</p>
                      <ArrowForwardIosIcon style={{ color: 'white', fontSize: '1rem' }} className="my-2.5" />
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="image-stack__item image-stack__item--bottom"  >
              {/* <Tooltip
                title={tooltipTitle}
                open={showTooltip}
                arrow
                placement="right"
                // onClick={IsBtnClicked ? handleTooltipClick : undefined}
                className='MuiTooltip-popper[data-popper-placement*="right"] .css-1k51tf5-MuiTooltip-tooltip'
              >
              </Tooltip> */}
                <img src={currentImage} alt="" onClick={handleImageChange}/>
            </div>
          </div>
        </div>

        <Stepper currentStep={0} numberOfSteps={4} />
      </div>
    </>
  );
};

export default BookingDemo;
