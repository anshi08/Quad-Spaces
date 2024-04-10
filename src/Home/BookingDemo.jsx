import React, { useState } from 'react';
import './BookingDemo.css';
import img1 from '../assets/BookingDemo.png';
import img2 from "../assets/BookingDemoImg2.png";
import img3 from "../assets/BookingDemoImg3.png";
import img4 from "../assets/BookingDemoImg4.png";
import tooltip1 from "../assets/tooltip1.png";
import tooltip2 from "../assets/tooltip2.png";
import tooltip3 from "../assets/tooltip3.png";
import tooltip4 from "../assets/tooltip4.png";
import tooltip5 from "../assets/tooltip5.png";
import tooltip6 from "../assets/tooltip6.png";
import tooltip7 from "../assets/tooltip7.png";
import tooltip8 from "../assets/tooltip8.png";
import handImg from "../assets/hand1.png"
import handimg2 from "../assets/hand2.png"
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Stepper from './Stepper';
import { motion } from 'framer-motion';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: 'rgb(255, 255, 255)',
  width: '100%',
  maxHeight: '222px',
  height: '100%',
  outline: 'none',
  boxShadow: 'none',
  p: 4,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
};



const BookingDemo = () => {

  const [currentImage, setCurrentImage] = useState(img1);
  const [currentHandImage, setCurrentHandImage] = useState(handImg);
  const [isSideBoxVisible, setIsSideBoxVisible] = useState(true);
  const [tooltipVisible, setTooltipVisible] = useState(false)
  const [tooltipIndex, setTooltipIndex] = useState(0);
  const [handVisible, setHandVisible] = useState(true);
  const [applyFilter, setApplyFilter] = useState(false); // filter
  const [currentStep, setCurrentStep] = useState(-1);

  const [open, setOpen] = useState(false);


  const handleTooltip2Click = () => {
    setHandVisible(true)
    setCurrentHandImage(handimg2)
    setTooltipIndex(2)
  }

  const handleTooltip4Click = () => {
    setHandVisible(true)
    setCurrentHandImage(handimg2)
    setTooltipIndex(4)
  }

  const handleTooltip5Click = () => {
    setTooltipIndex(6)
  }

  const handleTooltip6Click = () => {
    setHandVisible(true)
    setCurrentHandImage(handimg2)
    setTooltipIndex(7)
  }

  const tooltipImages = [tooltip1, tooltip2, tooltip3, tooltip4, tooltip5, tooltip6, tooltip7, tooltip8];
  const tooltipPositions = [
    { top: '29%', right: '26%' },
    { top: '14%', right: '16%' },
    { top: '33%', right: '16%' },
    { top: '30%', right: '16%' },
    { bottom: '0%', right: '16%' },
    { top: '14%', right: '16%' },
    { bottom: '10%', right: '16%' },
    { top: '29%', right: '26%' },
  ];

  const tooltipClickHandlers = [
    null,
    handleTooltip2Click,
    null,
    handleTooltip4Click,
    null,
    handleTooltip5Click,
    handleTooltip6Click
  ];


  const handleBeginDemo = () => {
    setIsSideBoxVisible(false);
    setTooltipVisible(true);
    // Set applyFilter to false if currentHandImage is equal to handimg2, otherwise set it to true
    setApplyFilter(currentHandImage !== handimg2);
    setHandVisible(true);
    setCurrentStep(currentStep + 1);
  };


  const handleNextTooltip = () => {
    if (applyFilter) {
      setCurrentImage(img2);
      setApplyFilter(false);
    }
    if (currentHandImage == handimg2) {
      setCurrentImage(img3)
      setCurrentStep(currentStep + 1);
    }
    if (tooltipIndex == 4) {
      setCurrentImage(img4)
      setCurrentStep(currentStep + 1);
    }
    if (tooltipIndex == 7) {
      setOpen(true)
      setCurrentImage(img1)
      setApplyFilter(true)
      setTooltipVisible(false)
      setHandVisible(false);
      setCurrentStep(currentStep + 1);
    }
    else {
      const newIndex = (tooltipIndex + 1) % tooltipImages.length;
      setTooltipIndex(newIndex);
      setTooltipVisible(true);
      setHandVisible(false);
    }
  }

  const Restart = () => {
    setApplyFilter(false)
    setCurrentImage(img1);
    setIsSideBoxVisible(true);
    setApplyFilter(false)
    setTooltipVisible(false);
    setHandVisible(false);
    setCurrentHandImage(handImg)
    setTooltipIndex(0);
    setCurrentStep(-1);
    setOpen(false)
  }

  //Child Component

  const updateStateAtIndexZero = () => {
    if (currentStep == -1) {
      handleBeginDemo();
    } else {
      setCurrentImage(img1)
      setHandVisible(true)
      setCurrentHandImage(handImg)
      setApplyFilter(true)
      setTooltipIndex(0)
    }
  }

  const updateStateAtIndexOne = () => {
    handleBeginDemo();
    setCurrentImage(img2);
    setTooltipIndex(1);
    setHandVisible(false)
    setApplyFilter(false);
    setCurrentStep(currentStep + 1);
  }

  const updateStateAtIndexTwo = () => {
    handleBeginDemo();
    setCurrentImage(img3);
    setTooltipIndex(3);
    setCurrentStep(currentStep + 1);
    setHandVisible(false)
    setApplyFilter(false);
  };

  const updateStateAtIndexThree = () => {
    handleBeginDemo();
    setCurrentImage(img4);
    setTooltipIndex(5);
    setCurrentStep(currentStep + 1);
    setHandVisible(false)
    setApplyFilter(false);
  }



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
      <div style={{ minWidth: '450px' }}>
        <div className='container'>
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

            <div className="image-stack__item image-stack__item--bottom" style={{ minWidth: '420px' }} >
              <div>
                <img src={currentImage} alt="" style={{ position: 'relative', filter: applyFilter ? 'brightness(70%)' : 'brightness(100%)' }} />
                {tooltipVisible &&
                  <>
                    <div className='tooltipDesign' style={tooltipPositions[tooltipIndex]} onClick={tooltipClickHandlers[tooltipIndex]}>
                      <motion.div
                        key={tooltipImages[tooltipIndex]}
                        initial={{
                          opacity: 0,
                          x: 50,
                        }}
                        animate={tooltipIndex === 4 ? "fadeIn" : "slideRight"} // Change animation based on tooltip ID
                        variants={{
                          fadeIn: { opacity: 1 },
                          slideRight: { opacity: 1, x: 0 },
                        }}
                        transition={{
                          duration: 1,
                        }}
                        style={tooltipIndex === 4 ? { position: 'relative', right: '16%' } : null}
                        viewport={{ once: true }}
                      >
                        <img src={tooltipImages[tooltipIndex]}
                          className={tooltipIndex === 1 || tooltipIndex === 3 || tooltipIndex === 5 || tooltipIndex === 6
                            ? 'cursor-pointer' : null} />
                      </motion.div>

                      {/* Hand Image */}
                      {handVisible &&

                        <img src={currentHandImage}
                          onClick={handleNextTooltip}
                          className='cursor-pointer'
                          style={
                            currentHandImage === handimg2 && tooltipIndex === 7
                              ? { right: '-15%', position: 'absolute', top: '40%', borderRadius: '10px' }
                              : (currentHandImage === handimg2 ? {
                                right: '-61%',
                                position: 'absolute', top: '40%', borderRadius: '10px'
                              } : {})
                          } />

                      }

                    </div>
                  </>
                }
              </div>
              <div>
                {open &&
                  <Card
                  // open={open}
                  // // onClose={handleClose}
                  // // disableScrollLock={true}
                  // aria-labelledby="modal-modal-title"
                  // aria-describedby="modal-modal-description"
                  >
                    <Box sx={style} style={{ maxWidth: '556px' }}>
                      <p className='modalHeading'>

                        You've completed the demo!
                      </p>
                      <p className='modalDiscrip' sx={{ mt: 2 }}>
                        Click below to restart from the beginning
                      </p>
                      <div className='flex justify-center mt-2'>
                        <button className="px-8 py-2 bg-rgb-15-103-100 text-white 
        transition duration-200 hover:bg-white hover:text-black border-2 border-transparent
        hover:border-my-green restartBtn" onClick={Restart}>
                          RESTART
                        </button></div>
                    </Box>
                  </Card>
                }
              </div>
            </div>
          </div>
        </div>

        <Stepper currentStep={currentStep} applyFilter={applyFilter} setCurrentStep={setCurrentStep}
          numberOfSteps={4} updateStateAtIndexZero={updateStateAtIndexZero} updateStateAtIndexOne={updateStateAtIndexOne}
          updateStateAtIndexTwo={updateStateAtIndexTwo} updateStateAtIndexThree={updateStateAtIndexThree}
        />
      </div>
    </>

  );
};

export default BookingDemo;
