import {
  Container,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";

const Wwd = () => {

 

  return (
    <>
      <Container style={{ alignContent: "center",my:4,color:"black" }}>
        <br/>
        <Typography title variant="h4">
          What is “The Amensia”?
        </Typography>
        <br/>
        <Typography paragraph>
        "The Amensia" is a startup fueled by ambition and vision to 
        endure until the end of time. Our mission is to rejuvenate 
        centuries-old traditions and cultural celebrations of festivals 
        like Holi, Diwali, Dussehra, Janmashtami, and many others, each with unique 
        regional traditions. Our goal is to become an effective conduit for celebrating 
        our heritage and promoting it on a global stage.
          <br />
          
          
        </Typography>

        <Typography title variant="h4">
          How Do We Achieve This?
        </Typography>
        <br />
        <Typography paragraph>
        We organize themed events at isolated, exotic venues in collaboration 
        with locals, focusing on specific festivals like Holi or Diwali. 
        We creatively integrate regional culture into these celebrations, 
        offering a fresh perspective on traditional festivities.
        </Typography>
        <br/>
        
        <Typography variant="h4">Why Are We Doing This ?</Typography>
        <br />
        <Typography paragraph>
        In India, festivals are a time to connect with loved ones and engage in traditional rituals, 
        often limiting the opportunity for outdoor celebrations with friends and extended family. These outdoor 
        events frequently lack a central gathering point, a clear agenda, or cultural significance. "The Amensia" aims 
        to address these challenges by providing a platform that not only facilitates these gatherings but also has the 
        potential to introduce our rich traditions to a global audience.
        </Typography>
        <br/>
        <Typography variant="h4">Benefits you will get:</Typography>

        <List dense sx={{ mb: 4,fontSize:25 }}>
        {["A unified meeting point.", "Immersive cultural experiences.", "Memorable and enjoyable celebrations.", "An optimized way to forge lasting memories.", "Opportunities for interactions with influencers.", "A platform to build new connections."]
        .map((benefit, index) => (
          <ListItem key={index}>
            <ListItemText>{benefit}</ListItemText>
          </ListItem>
        ))}
      </List>

        
      


      </Container>
    </>
  );
};

export default Wwd;
