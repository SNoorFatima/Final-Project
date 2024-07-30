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
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Paper>
          <Box
            sx={{
              backgroundColor: "rgb(30, 136, 229)",
              color: "rgb(227, 242, 253)",
              borderRadius: "8px",
              display: "flex",
              alignItems: "center",
              padding: "16px",
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
      </Grid>
      <Grid item xs={12}>
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
    </Grid>
  );
};

export default TotalIncome;
