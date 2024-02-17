import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import './CustomImageBox.css';


export default function MediaCard({ title, description, imageUrl, audioUrl, buttonText, onButtonClick }) {
  const [playing, setPlaying] = React.useState(false);
  const audioRef = React.useRef(null);

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (!playing) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
      setPlaying(!playing);
    }
  };

  return (
    <Card sx={{ maxWidth: 345 }} className="custom-image-box">
      <CardMedia
        component="img"
        height="140"
        className="circular-image"
        image={imageUrl}
        alt={title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
          {/* Audio Play/Pause Button */}
          <IconButton aria-label="play/pause" onClick={togglePlayPause}>
            {playing ? <PauseIcon /> : <PlayArrowIcon />}
          </IconButton>
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        {/* Audio element */}
        <audio ref={audioRef} src={audioUrl} onEnded={() => setPlaying(false)} />
      </CardContent>
      <CardActions>
        <Button size="small" onClick={onButtonClick}>
          {buttonText}
        </Button>
      </CardActions>
    </Card>
  );
}
