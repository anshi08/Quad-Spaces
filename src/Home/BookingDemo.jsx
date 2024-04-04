import React, { useState } from 'react';
import './BookingDemo.css';
import img1 from '../assets/BookingDemo.png';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Stepper from './Stepper';
import { motion } from 'framer-motion';
import Tooltip from '@mui/material/Tooltip'; 

const BookingDemo = () => {

  const img2 = 'https://quadreal-spaces.azurewebsites.net/media/8c84afe27b16d323e63e73d1099f2d07/screen-shot-2023-03-27-at-2-41-26-pm-quarter.png'
  const img3 = 'https://quadreal-spaces.azurewebsites.net/media/6c6ea52e6627733215630948a2d3fc1e/screen-shot-2023-03-27-at-2-42-18-pm-quarter.png'
  const img4 =  'https://quadreal-spaces.azurewebsites.net/media/a9656bbbb76ad8627ee5a907170b797d/screen-shot-2023-03-27-at-2-42-34-pm-quarter.png'

  const images = [
    img1,
    img2,
    img3,
    img4
  ];
 
  
  const [demoStarted, setDemoStarted] = useState(false);
  const [currentImage, setCurrentImage] = useState(images[0]);
  const [tooltipTitle, setTooltipTitle] = useState('Click to reserve this seat.')
  const [showTooltip, setShowTooltip] = useState(false);
  const [IsBtnClicked, setIsBtnClicked] = useState(false)
  const [isSideBoxVisible, setIsSideBoxVisible] = useState(true);

  const handleBeginDemo = () => {
    setDemoStarted(true);
    setShowTooltip(true);
    setIsBtnClicked(true)
    setIsSideBoxVisible(false);
  };

  const handleTooltipClick = () => {
    setShowTooltip(false);
    setCurrentImage((prevImage) => {
      const currentIndex = images.indexOf(prevImage);
      const nextIndex = (currentIndex + 1) % images.length;
      return images[nextIndex];
    });
    setTimeout(() => {
      setTooltipTitle("Click here to create a new booking.")
      setShowTooltip(true)
    }, 1000);
  };


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
              <Tooltip
                title={tooltipTitle}
                open={showTooltip}
                arrow
                placement="right"
                onClick={IsBtnClicked ? handleTooltipClick : undefined}
                className='MuiTooltip-popper[data-popper-placement*="right"] .css-1k51tf5-MuiTooltip-tooltip'
              >
                <img src={currentImage} alt="" />
              </Tooltip>
            </div>
          </div>
        </div>

        <Stepper currentStep={0} numberOfSteps={4} />
      </div>
    </>
  );
};

export default BookingDemo;
