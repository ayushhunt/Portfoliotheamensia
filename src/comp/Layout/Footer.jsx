//Code the Layout Footer it will contain details about the creator of website copy right details
//Portfolio social links 
//order now important links 
//contact us and address 

import React from 'react';
import { Box, Typography, Grid,IconButton,Link as MUIlink} from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Facebook from '@mui/icons-material/Facebook';
import Twitter from '@mui/icons-material/Twitter';
import  Instagram  from '@mui/icons-material/Instagram';
import LinkedIn from '@mui/icons-material/LinkedIn';
import CopyPhoneNumber from '../CopyPhoneNumber';
import {Link} from 'react-router-dom';

const Footer = () => {
    const brandColors = {
      facebook: '#3b5998',
      twitter: '#1da1f2',
      instagram: '#e1306c',
      linkedin: '#0077b5'
    };
    const phoneNumber='+916261461832';
    const phoneNumber2='+916260139976';
    const Email="theamensia@gmail.com";

  return (
    <Box component="footer"  sx={{
      backgroundColor: 'transparent',
      backgroundImage: `url('/handf.jpg')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
      backgroundRepeat: 'no-repeat',
      width: '100%', // Ensure it takes up full width
      // ... other styles
    }}
  >
    
        <Grid container spacing={2} justifyContent="center" sx={{ mx: 'auto' ,p:4,m:0,color:'white'}}>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h5" gutterBottom>
              Portfolio 
            </Typography>
            <Typography color="black" style={{fontSize:'17px'}}>
            <Link to="/">Home</Link>
            </Typography>
            <Typography color="black" style={{fontSize:'17px'}}>
              <Link to="/wwd">what we do ?</Link>
            </Typography>
            <Typography color="blacl" style={{fontSize:'17px'}}>
            <Link to="/services">Services</Link>
            </Typography>
            <Typography color="black" style={{fontSize:'17px'}}>
            <Link to="/about">About</Link>
            </Typography>
            {/* Company links */}
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h5" gutterBottom>
              Contact Us 
            </Typography>
            <Typography style={{fontSize:'17px'}}>
            {phoneNumber}
            <CopyPhoneNumber phoneNumber={phoneNumber}/><br/>
            {phoneNumber2}
            <CopyPhoneNumber phoneNumber={phoneNumber}/><br/>
            {Email}
            <CopyPhoneNumber phoneNumber={Email}/>
            <br/>
            /*<IconButton
              color="primary"
              aria-label="Get Directions"
              component="a"
              href='https://maps.app.goo.gl/'
              target="_blank"
              rel="noopener noreferrer"
            >
                <LocationOnIcon/>
            </IconButton>*/
            </Typography>
            
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h5" gutterBottom>
              Follow Us
            </Typography>
            <Box>
            {/* Wrap IconButton with MUIlink*/}
            <MUIlink href="https://www.facebook.com/profile.php?id=61556339049396" target="_blank" >
              <IconButton aria-label="Facebook" style={{ color: brandColors.facebook }}>
                <Facebook />
              </IconButton>
            </MUIlink>
            <MUIlink href="https://twitter.com/theamensia" target="_blank" color="inherit">
              <IconButton aria-label="Twitter" style={{ color: brandColors.twitter }}>
                <Twitter/>
              </IconButton>
            </MUIlink>
            <MUIlink href="https://www.instagram.com/the_amensia/" target="_blank" color="inherit">
              <IconButton aria-label="Instagram" style={{ color: brandColors.instagram }}>
                <Instagram />
              </IconButton>
            </MUIlink>
          </Box>
            {/* Social links */}
            
      

          </Grid>
        </Grid>

          <Typography variant="body2" align="center" sx={{ bgcolor: 'grey', py: 2 }}>
            © {new Date().getFullYear()} Designed by Ayush Singh. All rights reserved.
          </Typography>
       
     
    </Box>
  );
};

export default Footer;
