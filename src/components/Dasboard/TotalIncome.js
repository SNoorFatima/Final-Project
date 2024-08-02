import { StorefrontTwoTone, TableChartOutlined } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import React from "react";

const TotalIncome = () => {
  return (
    
      
        <Paper   >
          <Box 
            sx={{
              backgroundColor: "rgb(30, 136, 229)",
              color: "rgb(227, 242, 253)",
              borderRadius: "8px",
              display: "flex",
              alignItems: "center",
              padding: "16px",
               overflow: "hidden"
            }}
          >
            <Avatar
              sx={{
                backgroundColor: "#1565C0",
                marginRight: "16px",
              }}
              variant="square"
            >
              <TableChartOutlined />
            </Avatar>
            <Box>
              <Typography variant="h4" sx={{fontSize:"16px"}}>$203K</Typography>
              <Typography variant="h6" sx={{ mt: "2px",fontSize:"12px" }}>
                Total Income 
              </Typography>
            </Box>
          </Box>
        </Paper>
    

     
    
  );
};

export default TotalIncome;
