import React from "react";
import { CardContent, Grid, Paper, Typography } from "@mui/material";
import AccountCircleTwoToneIcon from "@mui/icons-material/AccountCircleTwoTone";
import { EmojiEventsTwoTone } from "@mui/icons-material";

const LastmonthVisitors = () => {
  return (
    
      <Grid item >
        <Paper
          sx={{
            transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
            boxShadow: "none",
            backgroundColor: "rgb(0, 200, 83)",
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
              5,678
            </Typography>
            <Typography variant="h6" sx={{ fontSize: "12px", fontWeight: "400" }}>
              Last Month Visitors
            </Typography>
          </CardContent>
          <EmojiEventsTwoTone
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
    
  );
};

export default LastmonthVisitors;
