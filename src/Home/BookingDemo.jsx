import React from 'react'
import "./BookingDemo.css"
import img from "../assets/BookingDemo.png"
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Stepper from './Stepper';
import { useState } from 'react';


// const goToNextStep = () => setCurrentStep(prev => prev === NUMBER_OF_STEPS - 1 ? prev : prev + 1)
// const goToPreviousStep = () => setCurrentStep(prev => prev <= 0 ? prev : prev - 1)



const BookingDemo = () => {
 
    const [currentStep, setCurrentStep] = useState(0)
    const NUMBER_OF_STEPS = 5


  return (
    <>
     <div className='p-14' >
        
        <p className='bookDemo'>Booking Demo</p>
        <p className='Follow'>Follow along to discover how you can easily reserve your workspace</p>
     </div>
     <div>
     <div className="container">
      <div className="image-stack">
        <div className="image-stack__item image-stack__item--top">
       
            {/* <Box style={{border:'2px solid red',backgroundColor:" rgb(15, 103, 100)"}}> */}
            <div style={{backgroundColor:" rgb(15, 103, 100)"}} >
                <div className='p-4'>
                <p className='welcome my-2'>
                  Welcome to Quadreal Spaces
                </p>
                <p className='dashboard my-2'>You can book your own workspace using this dashboard.</p>
                {/* Button  */}
                <div className='flex cursor-pointer'>
                <p className='welcome my-2'>
                    BEGIN DEMO 
                 </p>
                 <ArrowForwardIosIcon style={{color:'white',fontSize:'1rem'}} className='my-2.5' />
                 </div>
                </div>
            </div>
            {/* </Box> */}
          
        </div>
 
        <div className="image-stack__item image-stack__item--bottom">
          <img
            src={img}
            alt=""
          />
        </div>
      </div>
    </div>

 {/* Stepper */}
 <Stepper currentStep={currentStep} numberOfSteps={NUMBER_OF_STEPS}/>
     

     </div>
    </>
  )
}

export default BookingDemo