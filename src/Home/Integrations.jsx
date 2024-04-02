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
import { motion } from "framer-motion"

const items = [
    {
        id: 1,
        quote: 'Implementing QuadReal Spaces for our offices has made management of our offices across the country so much simpler. With the ability to see how the desks and meeting rooms are being used, we are able to make data based decisions on how to improve our workspaces. Flex desk options allow for incoming visitors to choose their desk at leisure, giving me time back to focus on larger tasks.',
        name: 'Jennifer Anderson',
        desg: 'Regional Office Manager, QuadReal Property Group'
    },
    {
        id: 2,
        quote: 'Utilizing QR Spaces has allowed us to transform how we think about our workspaces. We have been able to convert two floors of space into an entirely flex space, with Mobile access enabled through the booking capability to allow for authroized entry into our spaces. Using this platform has digitized our entire process, providing insights and automation into our business.',
        name: 'Alberta Infrastructure',
        desg: ''
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
                <div style={{ padding: '2rem', marginTop: '3rem', display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
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
                        <p className='integrations'>Integrations</p>
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
                        <p className='follow my-3'>Quadreal Spaces works with the following:</p>
                    </motion.div>
                </div>

                {/* Showing image 3 */}
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
                    <div className='flex justify-evenly flex-wrap'>
                        <img src={workday} style={{ width: '144px', height: '56px' }} />
                        <img src={MS} style={{ width: '236px', height: '66px' }} />
                        <img src={outlook} style={{ width: '183px', height: '66px' }} />
                    </div>
                </motion.div>

                {/* Quote BOX */}
                <div className='settingMargin'>
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
                        <p className='integrations'>Testimonials</p>
                    </motion.div>
                </div>
                {currentItem && (
                    <Box className='BoxStyle' >
                        <Card className='p-16' style={{
                            boxShadow: 'rgba(0, 0, 0, 0.15) 0px 2px 30px 0px',
                            borderRadius: '10px'
                        }}>
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

                                style={{ maxWidth: '100%', height: '100%' }}
                            >
                                <div className='flex items-start'>
                                    <img src={quotes} alt='quoteMark' className='imgquote' />


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
                                        <p className='quote flex flex-wrap'>{currentItem.quote}</p>

                                    </motion.div>
                                </div>
                            </motion.div>

                            {/* hr line */}
                            <motion.hr
                                className='mt-12 mb-12'
                                style={{
                                    border: '2px solid rgb(139, 189, 189)',
                                    width: '0', 
                                    opacity: 0, 
                                }}
                                animate={{
                                    opacity: 1,
                                }}
                                whileInView={{
                                    opacity: 1, 
                                    width:'100%',
                                    transition: {
                                        duration: 1,
                                    },
                                }}
                            />


                            <div>
                            <motion.div
                                initial={{
                                    opacity: 0,
                                    y: 100,
                                }}
                                animate={{
                                    opacity: 1,
                                }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                    transition: {
                                        duration: 1,
                                    },
                                }}

                            >
                                <p className='name'>{currentItem.name}</p>
                                </motion.div>

                                <motion.div
                                initial={{
                                    opacity: 0,
                                    y: 100,
                                }}
                                animate={{
                                    opacity: 1,
                                }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                    transition: {
                                        duration: 1,
                                    },
                                }}

                            >
                                <p className='desg'>{currentItem.desg}</p>
                                </motion.div>
                            </div>

                            {/* next prev buttons */}
                            <div>
                                <div className='flex justify-center mt-8'>
                                    <KeyboardArrowLeftIcon onClick={handlePrevItem}
                                        style={{ fontSize: '30px', cursor: 'pointer',color:'rgb(38,117,115)' }} />
                                    <p className='pagination'> {currentItem.id}/2 </p>
                                    <KeyboardArrowRightIcon onClick={handleNextItem}
                                        style={{ fontSize: '30px', cursor: 'pointer',color:'rgb(38,117,115)' }} />
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