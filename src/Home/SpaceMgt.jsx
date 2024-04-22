import { Grid, Button } from '@mui/material';
import { useState } from 'react';
import gif1 from "../assets/screen-recording.gif";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import gif2 from "../assets/Map1.jpg";
import "./SpaceMgt.css";
import svgImage from "../assets/image (1).svg";
import { motion } from "framer-motion"

const SpaceMgt = ({ SpaceMgtData }) => {
    const [selectedItem, setSelectedItem] = useState(1); // Default selected item is 1

    const handleItemClick = (item) => {
        setSelectedItem(item);
    };

    const spacemanageData = SpaceMgtData

    return (
        <>
            <Grid container position="relative">

                {/* partially image in out */}
                <img src={svgImage} className='absolute spaceSvgImg' 
                />

                <Grid item xs={0} md={1} >
                </Grid>

                <Grid item xs={12} md={5} padding={1}
                    display="flex" justifyContent="center" flexDirection="column">
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
                        <p className='occupancytext'>{spacemanageData.heading}</p>
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
                        className='spanTag my-4'

                    >
                        <span >{spacemanageData.sub_heading}</span>
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
                        <div style={{ width: '70%', display: 'flex', justifyContent: 'space-between', cursor: 'pointer' }}>

                            <p
                                onClick={() => handleItemClick(1)}
                                className={`selected12 ${selectedItem === 1 ? 'selected' : ''}`}>
                                {spacemanageData.btn_text1}
                            </p>
                            {selectedItem === 1 && (
                                <div className='sidearrow-animation'>
                                    <ArrowForwardIosIcon className='sidearrow'
                                        onClick={() => handleItemClick(1)} />
                                </div>
                            )}
                        </div>
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
                        {selectedItem === 1 ? (
                            <hr className={`my-3 animated-line`} style={{ border: '2px solid rgb(15, 103, 100)', width: '70%' }} />
                        ) : (
                            <hr className={`my-3`} style={{ border: '2px solid lightgrey', width: '70%' }} />
                        )}
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
                        <div style={{ width: '70%', display: 'flex', justifyContent: 'space-between', cursor: 'pointer' }}>

                            <p
                                onClick={() => handleItemClick(2)}
                                className={`selected12 ${selectedItem === 2 ? 'selected' : ''}`}>
                                {spacemanageData.btn_text2}
                            </p>
                            {selectedItem === 2 && (
                                <div className='sidearrow-animation'>
                                    <ArrowForwardIosIcon className='sidearrow'
                                        onClick={() => handleItemClick(2)} />
                                </div>
                            )}
                        </div>
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
                        {selectedItem === 2 ? (
                            <hr className={`my-3 animated-line`} style={{ border: '2px solid rgb(15, 103, 100)', width: '70%' }} />
                        ) : (
                            <hr className={`my-3`} style={{ border: '2px solid lightgrey', width: '70%' }} />
                        )}
                    </motion.div>
                </Grid>

                <Grid item xs={12} md={6} style={{ position: 'relative' }}>
                    <motion.div
                        key={selectedItem}
                        initial={{
                            opacity: 0,
                            x: 100,
                        }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                            transition: {
                                duration: 1,
                            },
                        }}
                        animate={{
                            opacity: 1,
                            x: 0,
                            transition: {
                                duration: 1,
                            },
                        }}
                        viewport={{ once: true }}
                    >
                        <img src={selectedItem === 1 ? gif1 : gif2} alt="Gif" style={{ width: '100%' }} />
                    </motion.div>

                    {selectedItem === 1 && (
                  
                  <motion.div
                  initial={{
                      opacity: 0,
                      x: -200, 
                  }}
                  whileInView={{
                    opacity: 1,
                    x: -150,
                    transition: {
                        duration: 1,
                    },
                }}
                  animate={{
                      opacity: 1,
                      x: -150, 
                      transition: {
                          duration: 1, 
                      },
                  }}
                  style={{
                      position: 'absolute',
                      top: '-8%',
                      left: '53%',
                      transform: 'translateX(-50%)',
                  }}
              >
                  <p className='easily'>
                      {spacemanageData.card_text.para1}
                  </p>
              </motion.div>
                    )}
                 
                    {selectedItem === 2 && (
                                <motion.div
                                initial={{
                                    opacity: 0,
                                    x: -200, 
                                }}
                                whileInView={{
                                  opacity: 1,
                                  x: -150,
                                  transition: {
                                      duration: 1,
                                  },
                              }}
                                animate={{
                                    opacity: 1,
                                    x: -150, 
                                    transition: {
                                        duration: 1, 
                                    },
                                }}
                                style={{ position: 'absolute', 
                                top: '35%', left: '50%', 
                                transform: 'translate(-50%, -50%)', 
                                textAlign: 'center', color: 'black' }}
                            >
                        
                            <p className='computerText'>{spacemanageData.card_text.para2}
                            </p>
                        </motion.div>
                    )}
                </Grid>
            </Grid>
        </>
    )
}

export default SpaceMgt;
