import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Grid,
  Avatar,
} from "@mui/material";
import {
  ArrowDownwardOutlined,
  LocalMallOutlined,
} from "@mui/icons-material";
import { LineChart, Line, ResponsiveContainer, Tooltip } from "recharts";

const monthData = [
  { name: "Day 1", value: 45 },
  { name: "Day 2", value: 66 },
  { name: "Day 3", value: 41 },
  { name: "Day 4", value: 89 },
  { name: "Day 5", value: 25 },
  { name: "Day 6", value: 44 },
  { name: "Day 7", value: 9 },
  { name: "Day 8", value: 54 },
];

const yearData = [
  { name: "Jan", value: 35 },
  { name: "Feb", value: 44 },
  { name: "Mar", value: 9 },
  { name: "Apr", value: 54 },
  { name: "May", value: 80 },
  { name: "Jun", value: 45 },
  { name: "Jul", value: 66 },
  { name: "Aug", value: 41 },
];

const OrderBox = () => {
  const [currentPeriod, setCurrentPeriod] = useState("month");

  const data = {
    month: {
      value: "$108",
      chartData: monthData,
    },
    year: {
      value: "$961",
      chartData: yearData,
    },
  };

  return (
    <Box className = "second-box"
      sx={{
        backgroundColor: "rgb(30, 136, 229)",
        borderRadius: "8px",
        color: "white",
        padding: "18px",
        position: "relative",
        overflow: "hidden"
      }}
    >
      <Grid container direction={"column"}>
        <Grid item>
          <Grid
            container
            sx={{
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Grid item>
              <Avatar
                sx={{
                  color: "white",
                  backgroundColor: "#1565c0",
                  borderRadius: "8px",
                  mt: "8px",
                }}
              >
                <LocalMallOutlined />
              </Avatar>
            </Grid>
            <Grid item>
              <Button
                variant={currentPeriod === "month" ? "contained" : "outlined"}
                size="small"
                sx={{
                  backgroundColor:
                    currentPeriod === "month" ? "#2196F3" : "inherit",
                  color: "white",
                  textTransform: "none",
                  zIndex:2
                }}
                onClick={() => setCurrentPeriod("month")}
              >
                Month
              </Button>
              <Button
                variant={currentPeriod === "year" ? "contained" : "outlined"}
                size="small"
                sx={{
                  backgroundColor:
                    currentPeriod === "year" ? "#2196F3" : "inherit",
                  color: "white",
                  textTransform: "none",
                  zIndex:2
                }}
                onClick={() => setCurrentPeriod("year")}
              >
                Year
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item sx={{ mb: "6px" }} xs={12}>
          <Grid container sx={{ alignItems: "center" }}>
            <Grid item xs={6}>
              <Grid container>
                <Grid item>
                  <Typography variant="h4" sx={{ margin: "4px 8px 6px 0px" }}>
                    {data[currentPeriod].value}
                  </Typography>
                </Grid>
                <Grid item>
                  <Avatar
                    sx={{
                      bgcolor: "rgb(144, 202, 249)",
                      borderRadius: "50%",
                      height: "22px",
                      width: "22px",
                      margin: "16px 8px 6px 0px",
                      color: "rgb(30, 136, 229)",
                    }}
                    variant="square"
                  >
                    <ArrowDownwardOutlined
                      sx={{
                        height: "17px",
                        width: "20px",
                        transform: "rotate3d(1, 1, 1, 45deg)",
                      }}
                    />
                  </Avatar>
                </Grid>
                <Grid item>
                  <Typography
                    variant="body2"
                    sx={{ color: "rgb(144, 202, 249)", fontWeight: "500" }}
                  >
                    Total Order
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={6}>
              <ResponsiveContainer width="100%" height="100%" minWidth="100px" minHeight = "100px">
                <LineChart data={data[currentPeriod].chartData} sx = {{minWidth:'100px'}}>
                  <Line
                    type="monotone"
                    dataKey="value"
                    stroke="white"
                    strokeWidth={3}
                    dot={false}
                  />
               <Tooltip
  contentStyle={{
    backgroundColor: "rgba(30, 30, 30, .8)",
    borderRadius: "5px", 
    cursor: "default",
    color: "white",
    fontSize: "14px",
    border: "none"
  }}
  labelStyle={{ display: "none" }} // Hide the label (month number)
  formatter={(value) => [`Total Order ${value}`, ""]} // Removed colon before "Total Order"
  wrapperStyle={{ boxShadow: "2px 2px 6px -4px #999" }} // Apply box shadow
/>

                </LineChart>
              </ResponsiveContainer>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default OrderBox;
