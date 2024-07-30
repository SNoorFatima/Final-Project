import React from "react";
import { CardContent, Grid, Paper, Typography } from "@mui/material";
import AccountCircleTwoToneIcon from "@mui/icons-material/AccountCircleTwoTone";

const Dailyusers = () => {
  return (
    <Grid container justifyContent="center">
      <Grid item xs={12} sm={6} md={4}>
        <Paper
          sx={{
            transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
            boxShadow: "none",
            backgroundColor: "#673ab7",
            position: "relative",
            color: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center", // Center content horizontally
            padding: 2,
          }}
        >
          <CardContent
            sx={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center", // Center content horizontally
              padding: 0,
            }}
          >
            <Typography variant="h3" sx={{ fontSize: "20px", fontWeight: "600" }}>
              1,658
            </Typography>
            <Typography variant="h6" sx={{ fontSize: "12px", fontWeight: "400" }}>
              Daily Users
            </Typography>
          </CardContent>
          <AccountCircleTwoToneIcon
            sx={{
              position: "absolute",
              left: "-17px",
              bottom: "-27px",
              transform: "rotate(25deg)",
              opacity: "0.35",
              fontSize: "2.1875rem",
              height: "100px",
              width: "100px",
            }}
          />
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Dailyusers;
