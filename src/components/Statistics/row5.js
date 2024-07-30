import React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import {CardContent, Stack } from "@mui/material";
import {
  ArrowDownward,
  ArrowUpward
} from "@mui/icons-material";

const statistics5 = [
  {
    value: "6035",
    label1: "Total Paid Users",
    label2:"8% less Last 3 Months",
    icon: <ArrowDownward sx={{ color: "rgb(244, 67, 54)" }} />,
    label2Color:"rgb((244, 67, 54)",
  },
  {
    value: "19",
    label1: "Order Status ",
    label2:"8% From Last 3 Months",
    icon: <ArrowUpward sx={{ color: "rgb(0, 200, 83)" }} />,
    label2Color:"rgb(30, 136, 229)",
    
  },
  {
    value: "63",
    label1: "Unique Visitors ",
    label2: "10% From Last 6 Months",
    icon: <ArrowDownward sx={{ color: "rgb(244, 67, 54)" }} />,
    label2Color:"rgb(0, 200, 83)"
    
  },
  {
    value: "95%",
    label1: "Monthly Earnings ",
    label2:"36% From last 3 Months",
    icon: <ArrowUpward sx={{ color: "rgb(0, 200, 83)" }} />,
    label2Color:"rgb(244, 67, 54)"
  },
];

const Row5 = () => {
  return (
    <Grid container spacing={2}>
      {statistics5.map((stat, index) => (
        <Grid item xs={12} sm={6} md={3} key={index}>
          <Paper>
            <CardContent>
              <Grid container alignItems="center" direction={"column"} >
                <Grid item>
                  <Typography varient="h6" sx={{fontSize:"14px"}}>{stat.label1}</Typography>
                </Grid>
                <Grid item >
                    <Stack direction={"row"} sx={{mt:"14px",mb:"14px"}}>
                <Typography variant="h5" sx={{textAlign:"center"}}>{stat.icon}</Typography>
                    <Typography
                    variant="h3"
                    sx={{
                      fontSize: "20px",
                      fontWeight: "600",
                      color: "#121946",
                    }}
                  >
                    {stat.value}
                  </Typography>
                  </Stack>
                </Grid>
                <Grid item>  <Typography variant="body" sx={{ color: "#364152", fontSize: "14px" }}>
                    {stat.label2}
                  </Typography></Grid>
              </Grid>
              </CardContent>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
};

export default Row5;
