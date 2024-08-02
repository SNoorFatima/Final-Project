import React from 'react'
import { StorefrontTwoTone, TableChartOutlined } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Grid,
  Paper,
  Typography,
} from "@mui/material";

const Totalicomebox2 = () => {
  return (
    <Grid item >
        <Paper>
          <Box
            sx={{
              backgroundColor: "rgb(255, 255, 255)",
              color: "rgb(30, 136, 229)",
              borderRadius: "8px",
              display: "flex",
              alignItems: "center",
              padding: "16px",
            }}
          >
            <Avatar
              sx={{
                backgroundColor: "#FFF8E1",
                color: "rgb(255, 193, 7)",
                marginRight: "16px",
              }}
              variant="square"
            >
              <StorefrontTwoTone />
            </Avatar>
            <Box>
              <Typography variant="h4" sx={{ color: "#121926",fontSize:"16px" }}>
                $203K
              </Typography>
              <Typography variant="h6" sx={{ mt: "2px", color: "#697586",fontSize:"12px" }}>
                Total Income
              </Typography>
            </Box>
          </Box>
        </Paper>
      </Grid> 
  )
}

export default Totalicomebox2
