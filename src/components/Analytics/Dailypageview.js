import React from 'react'
import { CardContent, Grid, Paper, Typography } from "@mui/material";
import DescriptionTwoToneIcon from '@mui/icons-material/DescriptionTwoTone';
const Dailypageview = () => {
  return (
    
      <Grid item >
        <Paper
          sx={{
            transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
            boxShadow: "none",
            backgroundColor: "#2196f3",
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
              1K
            </Typography>
            <Typography variant="h6" sx={{ fontSize: "12px", fontWeight: "400" }}>
              Daily page view
            </Typography>
          </CardContent>
          <DescriptionTwoToneIcon
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
    
  )
}

export default Dailypageview
