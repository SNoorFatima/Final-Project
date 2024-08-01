import React from 'react';
import { Box, Typography, Grid, Paper, TextField, Button } from '@mui/material';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@mui/lab';

const OrderStatus = () => {
  return (
    <Box p={3}>
      <Paper sx={{ padding: 3, border: "1px solid rgb(227, 232, 239)", boxShadow: "none" }}>
        <Typography variant="h6" gutterBottom>ORDER STATUS</Typography>
         
        <Grid container spacing={2} mb={4}>
          <Grid item xs={2}>
            <Typography variant="body2">Order Place Date</Typography>
            <Typography variant="body2">10th Mar, 2021</Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography variant="body2">Order Status</Typography>
            <Typography variant="body2">Processing</Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography variant="body2">Delivery Option</Typography>
            <Typography variant="body2">Fedex Express Delivery</Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography variant="body2">Payment</Typography>
            <Typography variant="body2">Credit Card</Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography variant="body2">Order Amount</Typography>
            <Typography variant="body2">$90,020</Typography>
          </Grid>
        </Grid>

        <Timeline>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color="primary" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Typography variant="body1">Order Placed</Typography>
              <Typography variant="body2" color="textSecondary">12 Jun</Typography>
              <Typography variant="body2">
                The order was validated.<br />
                The order was placed.<br />
                The order was placed.
              </Typography>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color="primary" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Typography variant="body1">Order Processing</Typography>
              <Typography variant="body2" color="textSecondary">14 Jun</Typography>
              <Typography variant="body2">
                Payment transaction [method: Credit Card, type: sale, amount: $90,020, status: Processing]
              </Typography>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color="grey" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Typography variant="body1">Order Shipping</Typography>
              <Typography variant="body2" color="textSecondary">16 Jun</Typography>
              <Typography variant="body2">
                Sent a notification to the client by e-mail.
              </Typography>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color="grey" />
            </TimelineSeparator>
            <TimelineContent>
              <Typography variant="body1">Order Delivered</Typography>
              <Typography variant="body2" color="textSecondary">17 Jun</Typography>
              <Typography variant="body2">
                Order Delivered
              </Typography>
            </TimelineContent>
          </TimelineItem>
        </Timeline>

        <Box mt={4}>
          <TextField 
            label="Write a Review" 
            multiline 
            rows={4} 
            fullWidth 
            variant="outlined" 
          />
          <Box mt={2}>
            <Button variant="contained" color="primary">Post Review</Button>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};

export default OrderStatus;
