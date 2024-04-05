import React, { useEffect, useState } from 'react'
import Home from './Home/Home'
import {useLocation } from 'react-router-dom';
import { Container, Box } from '@mui/material';
import CircularProgress, {
  circularProgressClasses,
} from '@mui/material/CircularProgress';

const App = () => {

  const location = useLocation();
  const [loading, setLoading] = useState(true);
  const [offline, setOffline] = useState(!navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setOffline(false);
    const handleOffline = () => setOffline(true);
 
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
 
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 3000);
 
    return () => clearTimeout(timeout);
  }, []);
 
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  if (offline) {
    return (
      <Container style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Box sx={{ position: 'relative' }}>
          <CircularProgress
            variant="determinate"
            sx={{
              color: (theme) =>
                theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
            }}
            size={40}
            thickness={4}
            value={100}
          />
          <CircularProgress
            variant="indeterminate"
            disableShrink
            sx={{
              color: 'black',
              animationDuration: '550ms',
              position: 'absolute',
              left: 0,
              [`& .${circularProgressClasses.circle}`]: {
                strokeLinecap: 'round',
              },
            }}
            size={40}
            thickness={4}
          />
        </Box>
      </Container>
    );
  }

  if (loading) {
    return (
      <Container style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Box sx={{ position: 'relative' }}>
          <CircularProgress
            variant="determinate"
            sx={{
              color: (theme) =>
                theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
            }}
            size={40}
            thickness={4}
            value={100}
          />
          <CircularProgress
            variant="indeterminate"
            disableShrink
            sx={{
              color: 'black',
              animationDuration: '1500ms',
              position: 'absolute',
              left: 0,
              [`& .${circularProgressClasses.circle}`]: {
                strokeLinecap: 'round',
              },
            }}
            size={40}
            thickness={4}
          />
        </Box>
      </Container>
    );
  }


  return (
    <>
    <Home /> 
      
    </>
  )
}

export default App