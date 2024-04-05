import { Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'
import occupancy from "../assets/modal1.png"
import department from "../assets/DepartmentModal.png"
import meetingRoom from "../assets/meetingRoomModal.png"
import closeButtonIcon from "../assets/closeButtonIcon.svg"; // Import your close button icon
import "./ChildComponent.css"
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { motion } from "framer-motion"

const modalItems = [
  {
    'id': 1,
    'title': 'Occupancy',
    'para': 'Easily track and report on the usage within your space. Understand desk and office usage, and how traffic is flowing in your office on a daily, weekly and monthly basis.',
    'color': 'rgb(241, 248, 248)',
    'img': occupancy
  },
  {
    'id': 2,
    'title': 'Meeting Rooms',
    'para': 'Better understand how your meeting rooms are being used with occupancy and booking data working simultaneously. Allow your teams to make conscious decisions on space usage, and free up rooms that are unused.',
    'color': 'rgb(139, 189, 189)',
    'img': meetingRoom
  },
  {
    'id': 3,
    'title': 'Departments',
    'para': 'Take a deep dive with insights divulging how each of the departments and sectors in your business are making use of the space they are using. Track financials related to their occupied space, and make decisions based on verified metrics.',
    'color': 'rgb(15, 103, 100)',
    'img': department
  },

]
const ChildComponent = (props) => {

  const [button, setButton] = useState([])
  const [data, setData] = useState([]);
  

  useEffect(() => {
    if (props.cardName) {
      setButton(modalItems.filter((items) => items.title !== props.cardName));
      setData(modalItems.filter((content) => content.title === props.cardName));
      document.querySelectorAll('.blurrable').forEach((el) => {
        el.classList.add('blurred');
      });
    }
    return () => {
      document.querySelectorAll('.blurrable').forEach((el) => {
        el.classList.remove('blurred');
      });
    };
  }, [props.cardName]);

  const handleNext = (cardTitle) => {
    setData(modalItems.filter((nextItem) => nextItem.title === cardTitle))
    setButton(modalItems.filter((nextButton) => nextButton.title !== cardTitle));
  }

  const handlePrev = (cardTitle) => {
    setData(modalItems.filter((prevItem) => prevItem.title === cardTitle))
    setButton(modalItems.filter((prevButton) => prevButton.title !== cardTitle));
  }

  return (
    <>

<div>
      <div style={{ position: 'relative' }}>

        {/* Cross Button */}
        <button
          onClick={() => props.setOpen(true)}
          style={{
            position: 'absolute',
            top: '-5%',
            right: '2%',
            backgroundColor: 'transparent',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          <img src={closeButtonIcon} alt="Close" />
        </button>

        {data.length > 0 && (
          <Grid container >
            {data.map((item) => (
              <React.Fragment key={item.id}>
                <Grid item xs={12} md={5} display="flex" justifyContent="center" alignItems="center" padding='2rem'>
                  <div>
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
                      <p className='title'>{item.title}</p>
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
                      <p className='titleText'>
                        {item.para}
                      </p>
                    </motion.div>
                  </div>
                </Grid>

                {/* Background */}
                < div className="background">
                  <motion.div
                    initial={{
                      opacity: 0,
                      x: 100,
                      backgroundColor: 'transparent',
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                      backgroundColor: item.color,
                      transition: {
                        duration: 1,
                      },
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                      backgroundColor: item.color,
                      transition: {
                        duration: 1,
                      },
                    }}
                    viewport={{ once: true }}
                    style={{ width: '100%', height: '100%' }}
                  >
                    {/* Content */}
                  </motion.div>
                </div>


                {/* Image */}

                <Grid item xs={12} md={7} className="imgContainer">
                <motion.div
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
                viewport={{ once: true }}>

                  <img src={item.img} alt="Occupancy" className='imgsrc' />
                  </motion.div>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        )}



      </div>
      {/* Next prev buttons */}

      <>
        {button.length > 0 && (

          <div className='mt-4' key={button[0].id}>
            <div className='flex justify-between p-4 cursor-pointer' >

              <p className='btns' onClick={() => handlePrev(button[button.length - 1].title)}>
                <NavigateBeforeIcon style={{ color: 'rgb(14, 103, 98)', fontSize: '2rem' }} /> {button[button.length - 1].title}
              </p>


              <p className='btns' onClick={() => handleNext(button[button.length - 2].title)}>
                {button[button.length - 2].title}  <NavigateNextIcon style={{ color: 'rgb(14, 103, 98)', fontSize: '2rem' }} /></p>

            </div>
          </div>

        )}
      </>
      </div>
    </>
  )
}

export default ChildComponent;
