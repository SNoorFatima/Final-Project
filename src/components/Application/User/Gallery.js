import React, { useState } from 'react';
import { Breadcrumbs, Card, CardContent, CardMedia, Grid, IconButton, Menu, MenuItem, Paper, Typography } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import post1 from './Assets/post3.jpg';
import post2 from './Assets/post2.png';
import post3 from './Assets/post1.png';
import post4 from './Assets/post5.png';
import post5 from './Assets/post6.png';
import post6 from './Assets/post4.png';
import User from './userprofile';
import { Link } from 'react-router-dom';
// Add more imports for other images as needed

const Gallery = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedCard, setSelectedCard] = useState(null);

  const handleMenuClick = (event, cardIndex) => {
    setAnchorEl(event.currentTarget);
    setSelectedCard(cardIndex);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setSelectedCard(null);
  };

  const cardData = [
    {
      image: post1,
      name: '1080p_table_denar.pdf',
      date: 'Tue Aug 24 2021',
    },
    {
      image: post2,
      name: 'Sample PDF 2',
      date: 'Wed Aug 25 2021',
    },
    {
      image: post3,
      name: 'Sample PDF 3',
      date: 'Thu Aug 26 2021',
    },
    {
      image: post4,
      name: 'Sample PDF 4',
      date: 'Fri Aug 27 2021',
    },
    {
      image: post5,
      name: 'Sample PDF 5',
      date: 'Sat Aug 28 2021',
    },
    {
      image: post6,
      name: 'Sample PDF 6',
      date: 'Sun Aug 29 2021',
    },
    // Add more card objects as needed
  ];

  return (
    <Grid container spacing={2}>
    <Grid item xs={12}>
 
   <Paper >
     <Grid container p={2} display="flex" justifyContent={'space-between'}>
       <Grid item>
       <Typography variant="h6" sx={{ marginRight: '1rem' }}>Friend Request</Typography>
       </Grid>
       <Grid item>
       <Breadcrumbs separator="›">
         <Link underline="hover" color="inherit" href="/">
           Home
         </Link>
         <Typography color="rgb(105, 117, 134)">Social Profile</Typography>
         <Typography color="rgb(105, 117, 134)">Friend Request</Typography>
       </Breadcrumbs>
       </Grid>
     </Grid>
   </Paper>
 
 </Grid>
 <Grid item>
    <User/>
    <Grid container spacing={3} marginTop={'16px'}>
      {cardData.map((card, index) => (
        <Grid item key={index} xs={12} sm={6} md={4}> 
          <Card>
            <CardMedia
              component="img"
              height="140"
              image={card.image}
              alt={`Image for ${card.name}`}
            />
            <CardContent>
              <Grid container alignItems="center" justifyContent="space-between">
                <Grid item>
                  <Typography variant="body1" component="p">
                    {card.name}
                  </Typography>
                  <Typography variant="caption" color="textSecondary">
                    {card.date}
                  </Typography>
                </Grid>
                <Grid item>
                  <IconButton onClick={(event) => handleMenuClick(event, index)}>
                    <MoreVertIcon />
                  </IconButton>
                </Grid>
              </Grid>
            </CardContent>
            <Menu
              anchorEl={anchorEl}
              open={selectedCard === index}
              onClose={handleMenuClose}
            >
              <MenuItem onClick={handleMenuClose}>
                Favorites
              </MenuItem>
              <MenuItem onClick={handleMenuClose}>
                Edit
              </MenuItem>
              <MenuItem onClick={handleMenuClose}>
                Remove
              </MenuItem>
            </Menu>
          </Card>
        </Grid>
      ))}
    </Grid>
    </Grid>
    </Grid>
  );
};

export default Gallery;
