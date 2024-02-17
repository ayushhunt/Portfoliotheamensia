import React, { useEffect, useRef,useState } from 'react';
import { AppBar, Toolbar,Tab,Tabs,useTheme,useMediaQuery, Typography, IconButton, Grid } from '@mui/material';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import audioFile from '/audio2.mp3'; // Adjust the import path to where your audio file is located
import DrawerComp from './Drawer';
import { Link,useLocation } from 'react-router-dom';
import logoimage from '/logo-no-background.svg'

const Header = () => {
  const audioRef = useRef(null);
  const theme=useTheme();
  const isMatch=useMediaQuery(theme.breakpoints.down('sm'));
  const [activeTab,setActiveTab]=useState(0);
  const location= useLocation();

  useEffect(() => {
    const pathname = location.pathname;
    switch (pathname) {
      case '/':
        setActiveTab(0);
        break;
      case '/wwd':
        setActiveTab(1);
        break;
      case '/services':
        setActiveTab(2)
        break;
      case '/about':
        setActiveTab(3)
        break;
      // ... add cases for other paths
      default:
        setActiveTab(0); // Set default tab if not matched
    }
  }, [location]);

  useEffect(() => {
    // Attempt to play audio on mount
    if (audioRef.current) {
      audioRef.current.play().catch((error) => {
        console.error('Audio playback failed:', error);
      });
    }
  }, []);

  const toggleAudio = () => {
    if (audioRef.current) {
      if (audioRef.current.paused) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  };

  return (
    <AppBar position="static" sx={{
        background:'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(48,9,121,1) 35%, rgba(0,212,255,1) 100%)', // Replace with your image path
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
      <Toolbar>
        {isMatch ? (
          <>
            <Link to="/">
              <img src={logoimage} alt="The Amnesia Logo" style={{ width: 140, height: 30 }} />
            </Link>
            <DrawerComp/>
          </>
        ):(
        <Grid container alignItems="center" spacing={2}>
        <Grid item alignContent="center">
            <Link to="/">
              <img src={logoimage} alt="The Amnesia Logo" style={{ width: 140, height: 30 }} />
            </Link>
          </Grid>
          <Grid item >
          <IconButton color="inherit" onClick={toggleAudio}>
            {audioRef.current && !audioRef.current.paused ? <VolumeOffIcon /> : <VolumeUpIcon />}
          </IconButton>
          </Grid>
        <audio ref={audioRef} src={audioFile} onEnded={() => {}} />
        <Grid item xs={6}>
              <Tabs indicatorColor='secondary' textColor="white" value={activeTab} onChange={(e, val) => setActiveTab(val)} 
              sx={{
                '& .MuiTab-root': { // Target all tab elements
                  color: 'white', // Set default color
                  '&.Mui-selected': { // Style the selected tab
                    backgroundColor: 'primary.main', // Use MUI theme palette
                    color: 'primary.contrastText',
                  },
                },
              }}
              >
                  <Link to="/">
                  <Tab className={activeTab === 0 ? 'active-tab' : ''} label="Home" />
                   </Link>
                   <Link to="/wwd">
                  <Tab className={activeTab === 1 ? 'active-tab' : ''} label="what we Do ?" />
                  </Link>
                  <Link to="/services">
                  <Tab className={activeTab === 2 ? 'active-tab' : ''} label="Services" />
                  </Link>
                  <Link to="/about">
                  <Tab className={activeTab === 3 ? 'active-tab' : ''} label="About us" />
                  </Link>
              </Tabs>
            </Grid>
        </Grid>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
