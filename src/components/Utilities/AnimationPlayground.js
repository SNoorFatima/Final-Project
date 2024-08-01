import React, { useState } from 'react';
import { Box, Button, CardHeader, Divider, Grid, Paper, Switch, Typography } from '@mui/material';
import { styled } from '@mui/system';
import Grow from '@mui/material/Grow';
import Collapse from '@mui/material/Collapse';
import Fade from '@mui/material/Fade';
import Slide from '@mui/material/Slide';
import Zoom from '@mui/material/Zoom';
import image from './Assets/animation.png'
const AnimationBox = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '200px',
  borderRadius: theme.shape.borderRadius,
  overflow: 'hidden',
}));

const AnimationPlayground = () => {
  const [animation, setAnimation] = useState('grow');
  const [position, setPosition] = useState('top-left');
  const [direction, setDirection] = useState('up');
  const [animate, setAnimate] = useState(false);

  const handleAnimationChange = (newAnimation) => {
    setAnimation(newAnimation);
  };

  const handlePositionChange = (newPosition) => {
    setPosition(newPosition);
  };

  const handleDirectionChange = (newDirection) => {
    setDirection(newDirection);
  };

  const handleSwitchChange = (event) => {
    setAnimate(event.target.checked);
  };

  const renderAnimation = (children) => {
    switch (animation) {
      case 'grow':
        return <Grow in={animate}>{children}</Grow>;
      case 'collapse':
        return <Collapse in={animate}>{children}</Collapse>;
      case 'fade':
        return <Fade in={animate}>{children}</Fade>;
      case 'slide':
        return <Slide in={animate} direction={direction}>{children}</Slide>;
      case 'zoom':
        return <Zoom in={animate}>{children}</Zoom>;
      default:
        return children;
    }
  };

  return (
    <Box sx={{ padding: 3 }}>
       <Paper>
       <CardHeader title=" Animations" titleTypographyProps={{fontSize:"18px"}}/>
       </Paper>
       <Divider/>
      <Paper sx={{ padding: 2}}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" component="div" sx={{ padding: 2 }}>
              Animation
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Button variant={animation === 'grow' ? 'contained' : 'outlined'} onClick={() => handleAnimationChange('grow')}>Grow</Button>
              <Button variant={animation === 'collapse' ? 'contained' : 'outlined'} onClick={() => handleAnimationChange('collapse')}>Collapse</Button>
              <Button variant={animation === 'fade' ? 'contained' : 'outlined'} onClick={() => handleAnimationChange('fade')}>Fade</Button>
              <Button variant={animation === 'slide' ? 'contained' : 'outlined'} onClick={() => handleAnimationChange('slide')}>Slide</Button>
              <Button variant={animation === 'zoom' ? 'contained' : 'outlined'} onClick={() => handleAnimationChange('zoom')}>Zoom</Button>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" component="div" sx={{ padding: 2 }}>
              Position (Grow & Zoom Animation)
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Button variant={position === 'top-left' ? 'contained' : 'outlined'} onClick={() => handlePositionChange('top-left')}>Top Left (Default)</Button>
              <Button variant={position === 'top' ? 'contained' : 'outlined'} onClick={() => handlePositionChange('top')}>Top</Button>
              <Button variant={position === 'top-right' ? 'contained' : 'outlined'} onClick={() => handlePositionChange('top-right')}>Top Right</Button>
              <Button variant={position === 'bottom-left' ? 'contained' : 'outlined'} onClick={() => handlePositionChange('bottom-left')}>Bottom Left</Button>
              <Button variant={position === 'bottom' ? 'contained' : 'outlined'} onClick={() => handlePositionChange('bottom')}>Bottom</Button>
              <Button variant={position === 'bottom-right' ? 'contained' : 'outlined'} onClick={() => handlePositionChange('bottom-right')}>Bottom Right</Button>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" component="div" sx={{ padding: 2 }}>
              Direction (Slide Animation)
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Button variant={direction === 'up' ? 'contained' : 'outlined'} onClick={() => handleDirectionChange('up')}>Up</Button>
              <Button variant={direction === 'down' ? 'contained' : 'outlined'} onClick={() => handleDirectionChange('down')}>Down</Button>
              <Button variant={direction === 'right' ? 'contained' : 'outlined'} onClick={() => handleDirectionChange('right')}>Right</Button>
              <Button variant={direction === 'left' ? 'contained' : 'outlined'} onClick={() => handleDirectionChange('left')}>Left</Button>
            </Box>
          </Grid>
        </Grid>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 2 }}>
          <Typography variant="body1">IN</Typography>
          <Switch checked={animate} onChange={handleSwitchChange} />
          <Typography variant="body1">OUT</Typography>
        </Box>
      </Paper>
<Divider/>
      <Paper sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center',padding:2 }}>
        
        <AnimationBox>
          {renderAnimation(
            <img src={image} alt="Sample" width="100%" height="100%" />
          )}
        </AnimationBox>

      </Paper>
    </Box>
  );
};

export default AnimationPlayground;
