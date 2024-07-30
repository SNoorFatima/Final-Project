import React from "react";
import { Card, CardHeader, CardContent, Typography, Divider, Box, Avatar, Grid } from "@mui/material";
import img1 from './Assets/mediacard1.jpg'
import img2 from './Assets/mediacard2.jpg'
const posts = [
  { title: "Up unpacked friendly", type: "Video", time: "14 minutes ago", thumbnail: img1},
  { title: "Up unpacked friendly", type: "Video", time: "14 minutes ago", thumbnail: img2},
  { title: "Up unpacked friendly", type: "Video", time: "14 minutes ago", thumbnail: img1 }
];

const LatestPosts = () => {
  return (
    <Card sx={{ maxWidth: 345, mx: 'auto' }}>
      <CardHeader title="Latest Posts" />
      <Divider />
      <CardContent>
        <Grid container direction="column" spacing={2}>
          {posts.map((post, index) => (
            <Grid item key={index} sx={{ display: 'flex', alignItems: 'center' }}>
              <Avatar src={post.thumbnail} variant="square" sx={{ width: 56, height: 56, mr: 2 ,borderRadius:"4px"}} />
              <Box>
                <Typography variant="subtitle2" fontWeight="bold">{post.title}</Typography>
                <Typography variant="body2">{post.type} | {post.time}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </CardContent>
      <Divider/>
      <Box sx={{ textAlign: "right",p:"24px"}}>
          <Typography
            variant="body2"
            color="rgb(33, 150, 243)"
            fontSize="13px"
            sx={{ cursor: "pointer" }}
            onClick={() => console.log("View All Projects clicked")}
          >
            View Friends list
          </Typography>
        </Box>
    </Card>
  );
};

export default LatestPosts;
