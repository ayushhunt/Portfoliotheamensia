import React,{ useRef,useState } from 'react';
import { Container, Grid, Typography, Button, Card, CardMedia, CardContent, TextField, Box, Divider,IconButton } from '@mui/material';
import ImageSlider from "../comp/ImageSlider";
import CopyPhoneNumber from '../comp/CopyPhoneNumber';
import CampaignIcon from '@mui/icons-material/Campaign';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FormComponent from '../comp/FormComponent';
// ... other imports as needed

const Home = () => {

    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false); // Track playing state
  
    // Toggle play/pause
    const togglePlayPause = () => {
      const audio = audioRef.current;
      if (!audio) return;
  
      const willPlay = !isPlaying;
      setIsPlaying(willPlay);
  
      if (willPlay) {
        audio.play();
      } else {
        audio.pause();
      }
    };
      const cardContent = [
        {
          title: "Your Dance Floor",
          description: "Enjoy vibrant music and freestyle dancing with your friends.",
          image: "/card1.jpg",
        },
        {
          title: "The Cultural Singnificance",
          description: "Events orgainsed on our own cultural theme.",
          image: "/image7.jpg",
        },
        {
          title: "Isolated and Exotic scenry",
          description: "Enjoy the event at a isolated and exotic venue.",
          image: "/dish.jpg",
        },
        {
          title: "Culutural themed foods",
          description: "Enjoy a variety of delicious culutural themed foods.",
          image: "/dish2.jpg",
        },
        {
          title: "Build memories and Friends",
          description: "Build life long lasting (lll) memories and also get a chance to meet influncers and strangers.",
          image: "/card5.jpg",
        },
        {
          title: "Collobaration opportunities",
          description: "Meet with various smart people and colloborate.",
          image: "/card6.jpg",
        },
      ];

  return (
    <Container maxWidth="lg">
      <br/>
      <ImageSlider />
      <br/>
      <br />
      <Typography variant="h4" gutterBottom color='white'>
        The Amensia :Reviving tradition with innovation
      </Typography>
      <Typography paragraph style={{fontSize:'18px'}} color='white'>
      Welcome to "The Amensia," where we redefine the celebration of cultural heritage for a global audience. 
      Our mission is to bring the vibrancy of world traditions to the forefront, creating immersive experiences 
      that foster unity, understanding, and joy. By blending ancient rituals with contemporary celebration styles, 
      we invite you to journey through the essence of cultural festivities like never before. From the colorful throws 
      of Holi to the radiant lights of Diwali, "The Amensia" offers a platform for connection, discovery, and the celebration 
      of diversity. Join us in embracing the rich tapestry of human culture, and be part of crafting a future where every tradition 
      is cherished and shared.      </Typography>
      
      <Divider sx={{ my: 4 }} />
      <Typography variant='h4'>Our Next Event:</Typography>
      <br/>
      <Typography variant="h3" component="h1" gutterBottom align="center" style={{fontStyle:"italic"}}>SARARA THE SANGUM</Typography>
      <IconButton onClick={togglePlayPause} aria-label="toggle voice recording">
        <Typography variant='h4'>Hear the Announcement: </Typography>
        <CampaignIcon sx={{ fontSize: '100', color: 'black' }} /> {/* Change size here */}
      </IconButton>
      <audio ref={audioRef} src="/audio2.mp3" hidden></audio>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, my: 2 }}>
        <Typography variant="h4" gutterBottom component="div" color='violet'> 
          Event include's
        </Typography>
        <Divider flexItem orientation="horizontal" sx={{ bgcolor: 'text.primary' }} />
      </Box>
      {/*This needs to change as it will not accept different images and different text for each card*/}
      <Grid container spacing={4} alignItems="stretch">
      {cardContent.map((content, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Card sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            <CardMedia
              component="img"
              image={content.image} // Use the image from the object
              alt={content.title}
              sx={{ height: 140 }}
            />
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography gutterBottom variant="h5">
                {content.title} 
              </Typography>
              <Typography>
                {content.description} 
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
      <br/><br/>
      <Typography variant='h6' gutterBottom  color='red'>
      Our Next Venue Details
      </Typography>

      <Typography style={{fontSize:'15px'}} gutterBottom color='blue'>
        We are in chattishgarh on Holi.<br/>
        Complete venue details be shared soon
      </Typography>
      <br/>
      <br/>
      <Typography variant='h6' gutterBottom color='Black'>
        Get Your Ticket for Chahhtisgrah Holi event now:
      </Typography>
      <Typography style={{fontSize:'15px'}} color='red'>
        Pay the entry fee of Rs.250 only to confirm your ticket.
      </Typography>
      <br/>
      <Typography style={{fontSize:'15px'}} color='black'>
        Note: Make the payment on the attached QR code and copypaste the reference number here and submit the form with other details.
      </Typography>
      <br/>
      <br/>
      <FormComponent/>
    </Container>
  );
};

export default Home;
