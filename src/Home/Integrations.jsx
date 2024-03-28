import React from 'react'
import "./Integrations.css"
import workday from "../assets/workDay.png"
import MS from "../assets/MS.png"
import outlook from "../assets/outlook.png"
import { Box, Card } from '@mui/material'
import quotes from "../assets/Quotes.svg"
import { useState } from 'react'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const items = [
    {
         id:1,
         quote:'Implementing QuadReal Spaces for our offices has made management of our offices across the country so much simpler. With the ability to see how the desks and meeting rooms are being used, we are able to make data based decisions on how to improve our workspaces. Flex desk options allow for incoming visitors to choose their desk at leisure, giving me time back to focus on larger tasks.',
         name:'Jennifer Anderson',
         desg:'Regional Office Manager, QuadReal Property Group'
    },
    {
        id:2,
        quote:'Utilizing QR Spaces has allowed us to transform how we think about our workspaces. We have been able to convert two floors of space into an entirely flex space, with Mobile access enabled through the booking capability to allow for authroized entry into our spaces. Using this platform has digitized our entire process, providing insights and automation into our business.',
        name:'Alberta Infrastructure',
        desg:''
   }
]

const Integrations = () => {
    const [currentItemIndex, setCurrentItemIndex] = useState(0);
    const currentItem = items[currentItemIndex];

    const handleNextItem = () => {
        setCurrentItemIndex((prevIndex) => (prevIndex + 1) % items.length);
    };

    const handlePrevItem = () => {
        setCurrentItemIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
    };
  return (
    <>
      <div>
        <div style={{padding:'2rem',marginTop:'3rem',display:'flex',justifyContent:'center',flexDirection:'column'}}>
            <p className='integrations'>Integrations</p>
            <p className='follow my-3'>Quadreal Spaces works with the following:</p>
        </div>

        {/* Showing image 3 */}
        <div className='flex justify-evenly flex-wrap'>
           <img src={workday} style={{width:'144px' , height:'56px'}} />
           <img src={MS} style={{width:'236px' , height:'66px'}} />
           <img src={outlook} style={{width:'183px' , height:'66px'}} />
        </div>

        {/* Quote BOX */}
        <div className='settingMargin'>
            <p className='integrations'>Testimonials</p>
        </div>
        {currentItem && (
                    <Box className='p-16' >
                        <Card className='p-16' style={{boxShadow: 'rgba(0, 0, 0, 0.15) 0px 2px 30px 0px',
                    borderRadius:'10px'}}>
                            <div className='flex items-baseline'>
                            <img src={quotes} alt='quoteMark' />
                            <p className='quote flex flex-wrap'>{currentItem.quote}</p>
                            </div>
                            <hr className='mt-12 mb-12' style={{ border: '2px solid rgb(15, 103, 100)' }} />
                            <p className='name'>{currentItem.name}</p>
                            <p className='desg'>{currentItem.desg}</p>
                            <div>
                                <div className='flex justify-center mt-8'>
                                    <KeyboardArrowLeftIcon onClick={handlePrevItem} 
                                    style={{fontSize:'30px',cursor:'pointer'}}  />
                                   <p className='pagination'> {currentItem.id}/2 </p>
                                    <KeyboardArrowRightIcon onClick={handleNextItem} 
                                    style={{fontSize:'30px',cursor:'pointer'}}/>
                                </div>
                            </div>
                        </Card>
                    </Box>
                )}
      </div>
    </>
  )
}

export default Integrations