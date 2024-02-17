import React from 'react'
import { Container, Typography, Box, Divider, List, ListItem, ListItemText } from '@mui/material';

const Services = () => {
  return  (
  <Container style={{ alignContent: "center",my:4,color:"black" }}>
  <Typography variant="h3" component="h1" gutterBottom align="center">
    The services we provide at a Amensia Event:
  </Typography>
  <Typography paragraph style={{fontSize:"18px"}}>
    At "The Amensia," we are dedicated to revolutionizing the way we celebrate and share our rich cultural heritage. Our innovative approach not only redefines traditional festivities for a global audience but also opens a myriad of opportunities for businesses, brands, and individuals looking to engage with a vibrant and diverse community. Here's how we can collaborate:
  </Typography>
  <Divider sx={{ my: 4 }} />

  {/* Marketing Opportunities */}
  <Typography variant="h4" component="h2" gutterBottom>
    1. Marketing Opportunities
  </Typography>
  <List>
    {[
      "Capture the Young Demographic: Engage with a youthful, energetic crowd eager for authentic experiences, providing a fresh audience for your brand.",
      "Stall Settlements: Utilize our event spaces to set up stalls, offering direct access to attendees in a festive, open environment.",
      "Brand Introduction: Launch or introduce your brand in the midst of high-spirited celebrations, ensuring memorable connections with potential customers.",
      "Survey Opportunities: Conduct surveys within an engaged community, gathering valuable insights and feedback to inform your marketing strategies."
    ].map((item, index) => (
      <ListItem key={index} disablePadding>
        <ListItemText primary={item} />
      </ListItem>
    ))}
  </List>
  <Divider sx={{ my: 4 }} />

  {/* Business Opportunities */}
  <Typography variant="h4" component="h2" gutterBottom>
    2. Business Opportunities
  </Typography>
  <List>
    {[
      "Shop Settlements: Secure a spot in our festival marketplaces to sell or showcase your products and services to a captive audience.",
      "Huge Contained Crowd: Access a large, contained crowd, offering a direct line to a wide customer base in a single location.",
      "Pseudo Monopoly: With limited competition within our event spaces, enjoy a unique position to captivate the market.",
      "Guaranteed Profit: Benefit from the high footfall and the celebratory mood of our events to boost sales and profits.",
      "Good Publicity: Leverage the positive environment and the cultural significance of our events for favorable brand association and publicity."
    ].map((item, index) => (
      <ListItem key={index} disablePadding>
        <ListItemText primary={item} />
      </ListItem>
    ))}
  </List>
  <Divider sx={{ my: 4 }} />

  {/* Networking */}
  <Typography variant="h4" component="h2" gutterBottom>
    3. Networking
  </Typography>
  <List>
    {[
      "Influencer Endorsement Meetings: Network with influencers and key personalities at our events, opening doors to endorsement opportunities.",
      "Collaboration: Find potential partners for collaborations, from co-hosting events to launching joint marketing campaigns.",
      "Expansion Opportunities: Explore avenues for business expansion through interactions with a diverse set of event attendees and participants.",
      "Investment Connections: Build connections with potential investors who are keen on exploring unique and culturally enriched ventures."
    ].map((item, index) => (
      <ListItem key={index} disablePadding>
        <ListItemText primary={item} />
      </ListItem>
    ))}
  </List>
  <Divider sx={{ my: 4 }} />

  {/* Brand Building and Influencer Endorsement */}
  <Typography variant="h4" component="h2" gutterBottom>
    4. Brand Building and Influencer Endorsement
  </Typography>
  <List>
    {[
      "Reach New Customers: Push your brand into the spotlight, gaining access to new segments of customers looking for authentic experiences.",
      "Local High Liner Influencers: Get your brand endorsed by local high-profile influencers, tapping into their follower base and enhancing your brand's visibility and credibility."
    ].map((item, index) => (
      <ListItem key={index} disablePadding>
        <ListItemText primary={item} sx={{ fontSize: '1.25rem' }}/>
      </ListItem>
    ))}
  </List>
  <Divider sx={{ my: 4 }} />
  <Box sx={{ my: 4 }}>
    <Typography paragraph style={{fontSize:"18px"}}>
      Join "The Amensia" in Celebrating Culture, Building Connections, and Creating Opportunities
    </Typography>
    <Typography paragraph style={{fontSize:"18px"}}>
      At "The Amensia," we believe in the power of community and celebration to not only preserve our cultural heritage but also to forge new business opportunities, networking avenues, and brand-building platforms. Our events serve as the perfect backdrop for your brand to connect, engage, and grow. Let's collaborate to create unforgettable experiences and mutual success.
    </Typography>
    <Typography style={{fontSize:"18px"}}>
      For inquiries and further details on how you can be a part of "The Amensia" experiences, please contact us. We look forward to welcoming you to our community and exploring the vast possibilities together.
    </Typography>
  </Box>
</Container>
);
}

export default Services