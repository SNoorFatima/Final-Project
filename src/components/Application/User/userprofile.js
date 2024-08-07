import React from "react";
import {
  CardContent,
  Avatar,
  Box,
  Button,
  Typography,
  Grid,
  Tabs,
  Tab,
  Paper,
  Breadcrumbs,
} from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import coverimage from "./Assets/Coverimage.png";
import avater from "./Assets/avater.png";
import { Home } from "@mui/icons-material";

const User = () => {
  const location = useLocation();
  const currentTab = location.pathname.split("/")[2] || "profile";

  return (
    
    <Grid item>
    <Grid container direction={"column"}>

      <Grid item md={4} sm={6} xs={12}>
        <Paper className="user-profile-card">
          <CardContent sx={{ padding: "12px 12px 0 12px !important" }}>
            <Box>
              <img
                src={coverimage}
                alt="Cover"
                style={{
                  width: "100%",
                  height: "250px",
                  objectFit: "cover",
                  borderRadius: '8px'
                }}
              />
            </Box>
            <Grid container>
              <Grid
                item
                paddingTop={"24px"}
                paddingLeft={"24px"}
                sx={{ flexBasis: "auto" }}
                md={3}
              >
                <Avatar 
                  src={avater}
                  alt="Profile"
                  sx={{
                    width: 140,
                    height: 140,
                    borderRadius: "16px",
                    margin: "-75px auto 0px"
                  }}
                />
              </Grid>
              <Grid item paddingTop={"24px"} paddingLeft={"24px"} sx={{ flexGrow: 1 }}>
                <Grid container>
                  <Grid item>
                    <Typography variant="h6" >JWT User</Typography>
                    <Typography variant="body2" color="textSecondary" >
                      Android Developer
                    </Typography>
                  </Grid>
                  <Grid item paddingLeft={'24px'} sx={{ flexGrow: 1 }}>
                    <Grid container justifyContent={'flex-end'} alignItems={'center'}>
                      <Grid item> 
                        <Button
                          variant="contained"
                          color="primary"
                        >
                          Message
                        </Button>
                      </Grid>
                      <Grid item paddingLeft={'24px'}>   
                        <Button variant="outlined" color="primary">
                          Send Request
                        </Button>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid container>
                  <Tabs value={currentTab} centered>
                    <Tab
                      label="Profile"
                      component={Link}
                      to="/user"
                      value="Profilepage"
                    />
                    <Tab
                      label="Followers"
                      component={Link}
                      to="/user/followers"
                      value="followers"
                    />
                    <Tab
                      label="Friends"
                      component={Link}
                      to="/user/friends"
                      value="friends"
                    />
                    <Tab
                      label="Gallery"
                      component={Link}
                      to="/user/gallery"
                      value="gallery"
                    />
                    <Tab
                      label="Friend Requests"
                      component={Link}
                      to="/user/friend-requests"
                      value="friend-requests"
                    />
                  </Tabs>
                </Grid>
              </Grid>
            </Grid>
          </CardContent>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12}></Grid>
    </Grid>
    </Grid>
    
  );
};

export default User;
