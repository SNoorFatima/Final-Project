import React from "react";
import {
  Box,
  Card,
  CardHeader,
  CardContent,
  Divider,
  Typography,
  Grid,
} from "@mui/material";
import { FiberManualRecord } from "@mui/icons-material";
import { green, red, yellow, blue } from "@mui/material/colors";

const requests = [
  { text: "Incoming requests", color: green[500] },
  { text: "You have 2 pending requests..", color: red[500] },
  { text: "You have 3 pending tasks", color: yellow[500] },
  { text: "New order received", color: blue[500] },
  { text: "Incoming requests", color: green[500] },
  { text: "You have 2 pending requests..", color: red[500] },
  { text: "New order received", color: blue[500] },
  { text: "Incoming requests", color: green[500] },
  { text: "You have 2 pending requests..", color: red[500] },
];

const IncomingRequests = () => {
  return (
   <Grid item >
        <Card sx={{ display: "flex", flexDirection: "column" }}>
          <CardHeader
            title="Incoming Requests"
            titleTypographyProps={{ variant: "subtitle1", sx: { color: "#697586" } }}
          />
          <Divider />
          <CardContent sx={{ padding: 0}}>
            <Box
              sx={{
                maxHeight: "250px",
                overflowY: "auto",
                padding: "16px",
              }}
            >
              {requests.map((request, index) => (
                <Box
                  key={index}
                  display="flex"
                  alignItems="center"
                  sx={{ mb: 1 }}
                >
                  <FiberManualRecord sx={{ color: request.color, mr: 2 }} />
                  <Typography variant="body2">{request.text}</Typography>
                </Box>
              ))}
            </Box>
          </CardContent>
          <Divider />
          <Box sx={{ textAlign: "center",p:2 }}>
            <Typography
              variant="body2"
              color="rgb(33, 150, 243)"
              fontSize="13px"
              sx={{ cursor: "pointer" }}
              onClick={() => console.log("Show More clicked")}
            >
              Show More
            </Typography>
          </Box>
        </Card>
      </Grid>
   
  );
};

export default IncomingRequests;
