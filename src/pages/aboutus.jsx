import { Container, Typography,Divider,List,ListItem,ListItemText } from '@mui/material';
import React from 'react'

const Aboutus = () => {
  const pledges = [
    "Promote Healthy Celebrations: We stand firmly against promoting activities that could harm our participants, such as drinking and smoking. Our events are designed to celebrate life and culture in a healthy, joyful manner.",
    "Authentic Enjoyment: We believe in the power of community, music, and tradition to provide genuine enjoyment. Our events do not require artificial stimulants to be memorable; they are fueled by the collective spirit and happiness of our participants.",
    "Cultural Immersion: We pledge to offer an immersive experience that allows you to dive deep into the heart of our traditions, learning about and living the essence of our cultural and religious festivals.",
    "Safety First: The safety and well-being of our attendees are our top priorities. We ensure that every event is organized with the highest safety standards in mind, creating a secure environment where everyone can enjoy without worry.",
    "Environmental Responsibility: We are committed to sustainability and pledge to minimize our environmental impact. Our celebrations are designed to respect and protect our planet, ensuring we can continue our traditions for generations to come.",
    "Community Engagement: 'The Amnesia' is dedicated to working closely with local communities. We empower and involve local artisans, performers, and vendors, providing a platform to showcase their talents and crafts.",
    "Global Unity: Our events serve as bridges, connecting cultures and people from around the world. We pledge to promote understanding, respect, and unity among all participants, celebrating diversity as our strength.",
    "Inclusive Celebrations: We ensure that our events are accessible to everyone, regardless of age, background, or belief. Our pledge is to create a space where everyone can participate and share in the joy of our collective heritage."
  ];

  return (
    <>
      <Container style={{ alignContent: "center",my:4,color:"black" }}>
      <Typography variant="h3" component="h1" gutterBottom align="center">
        Introduction
  </Typography>
      <Typography paragraph>
      The Amensia" is a pioneering cultural celebration enterprise dedicated to rejuvenating 
      and sharing the world's rich cultural heritage in a modern, inclusive, and vibrant setting. 
      Founded with the vision of bridging traditional festivities and contemporary experiences, 
      we offer a unique platform for people from all walks of life to connect, celebrate, and immerse 
      themselves in the depth and diversity of cultural traditions. Our events, ranging from local festivals
       to global gatherings, are designed with a focus on authenticity, community engagement, and environmental 
       sustainability. By collaborating closely with local artisans, performers, and communities, we ensure that each 
       celebration is not only a reflection of the culture's soul but also a step towards global unity and understanding. 
       "The Amensia" stands as a beacon for those seeking to explore, enjoy, and preserve our collective heritage, promising 
       unforgettable experiences that honor the past while embracing the future.
      </Typography>
      <Divider sx={{ my: 4 }} />
      <br/>
      <Typography variant="h3" component="h1" gutterBottom align="center">Our Vision</Typography>
        <br/>
        <Typography paragraph>
At "The Amensia," our vision transcends mere celebration; it's a quest to reimagine and share the rich tapestry of our cultural and religious festivals with the world. Our heritage events are more than just gatherings; they are vibrant spectacles of joy, color, and unity, embodying the essence of utopian societies.
</Typography>
<br/>
<Typography paragraph>
We believe in the power of our traditions to captivate hearts and minds across the globe. Our festivals, brimming with life, stories, and heritage, are unparalleled in their ability to bring people together in celebration. Yet, despite their deep cultural significance and inherent beauty, they remain lesser-known on the global stage.
</Typography>
<br/>
<Typography paragraph>
Our ambition is bold yet simple: to elevate our traditional festivals to the same level of international acclaim and recognition as the festival of La Tomatina and the Bull Run. We envision a world where our cultural and religious celebrations are not just local festivities but global phenomena, where people from all walks of life come together to experience the unparalleled joy, color, and community spirit of our events.
</Typography>
<br/>
<Typography paragraph>
To achieve this, "The Amensia" is committed to innovatively presenting these festivals, ensuring each event is a beautiful tapestry of traditional elements and contemporary appeal. We aim to create immersive experiences that not only honor our heritage but also make it accessible and engaging for a global audience. Through our efforts, we aspire to foster a deeper appreciation and understanding of our culture, bridging gaps and building a more connected world.
</Typography>
<br/>
<Typography paragraph>
Our vision is a celebration of diversity, unity, and the timeless allure of our traditions. Join us in our journey to bring the joyous, colorful, and profound essence of our festivals to every corner of the globe, making our heritage as celebrated as the most iconic festivals of the world.
        </Typography>
        <Divider sx={{ my: 4 }} />
        <br/>
        <Typography variant="h3" component="h1" gutterBottom align="center">Our Pledge</Typography>
      <List component="ol" sx={{ width: '100%' }}>
      {pledges.map((pledge, index) => (
        <ListItem key={index} alignItems="flex-start">
          <ListItemText primary={<Typography type="body2" style={{ whiteSpace: 'pre-line' }}>{`${index + 1}. ${pledge}`}</Typography>} />
        </ListItem>
      ))}
    </List>
      </Container>
    </>
  )
}

export default Aboutus;