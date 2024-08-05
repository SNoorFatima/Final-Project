import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Box, Card, CardContent, Typography, Paper, Stack, Grid } from '@mui/material';
import muilogo from "../../Utilities/Assets/logoMUI.png";
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import HotelIcon from '@mui/icons-material/Hotel';
import RepeatIcon from '@mui/icons-material/Repeat';

export default function TimelinePlayground() {
  return (
    <Paper sx={{ flexWrap: 'wrap', gap: 2, padding: 2 }}>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography variant="h5">Timeline</Typography>
        <a href="https://mui.com/material-ui/react-timeline/" target="_blank" rel="noopener noreferrer">
          <img src={muilogo} alt="MUI Logo" style={{ height: 40 }} />
        </a>
      </Stack>
      
      <Grid container spacing={2}>
        {/* Basic Timeline */}
        <Grid item xs={12} md={6}>
          <Card sx={{ position: 'relative' }}>
            <CardContent>
              <Typography variant="h6">Basic</Typography>
              <Timeline>
                <TimelineItem>
                  <TimelineSeparator>
                    <TimelineDot>
                      <FastfoodIcon />
                    </TimelineDot>
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>Eat</TimelineContent>
                </TimelineItem>
                <TimelineItem>
                  <TimelineSeparator>
                    <TimelineDot color="primary">
                      <LaptopMacIcon />
                    </TimelineDot>
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>Code</TimelineContent>
                </TimelineItem>
                <TimelineItem>
                  <TimelineSeparator>
                    <TimelineDot color="secondary">
                      <HotelIcon />
                    </TimelineDot>
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>Sleep</TimelineContent>
                </TimelineItem>
                <TimelineItem>
                  <TimelineSeparator>
                    <TimelineDot>
                      <RepeatIcon />
                    </TimelineDot>
                  </TimelineSeparator>
                  <TimelineContent>Repeat</TimelineContent>
                </TimelineItem>
              </Timeline>
            </CardContent>
          </Card>
        </Grid>

        {/* Right Aligned Timeline */}
        <Grid item xs={12} md={6}>
          <Card sx={{ position: 'relative' }}>
            <CardContent>
              <Typography variant="h6">Right Aligned</Typography>
              <Timeline position="right">
                <TimelineItem>
                  <TimelineSeparator>
                    <TimelineDot>
                      <FastfoodIcon />
                    </TimelineDot>
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>Eat</TimelineContent>
                </TimelineItem>
                <TimelineItem>
                  <TimelineSeparator>
                    <TimelineDot color="primary">
                      <LaptopMacIcon />
                    </TimelineDot>
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>Code</TimelineContent>
                </TimelineItem>
                <TimelineItem>
                  <TimelineSeparator>
                    <TimelineDot color="secondary">
                      <HotelIcon />
                    </TimelineDot>
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>Sleep</TimelineContent>
                </TimelineItem>
                <TimelineItem>
                  <TimelineSeparator>
                    <TimelineDot>
                      <RepeatIcon />
                    </TimelineDot>
                  </TimelineSeparator>
                  <TimelineContent>Repeat</TimelineContent>
                </TimelineItem>
              </Timeline>
            </CardContent>
          </Card>
        </Grid>

        {/* Alternating Timeline */}
        <Grid item xs={12} md={6}>
          <Card sx={{ position: 'relative' }}>
            <CardContent>
              <Typography variant="h6">Alternating</Typography>
              <Timeline position="alternate">
                <TimelineItem>
                  <TimelineOppositeContent>
                    09:30 am
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineDot>
                      <FastfoodIcon />
                    </TimelineDot>
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>Eat</TimelineContent>
                </TimelineItem>
                <TimelineItem>
                  <TimelineOppositeContent>
                    10:00 am
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineDot color="primary">
                      <LaptopMacIcon />
                    </TimelineDot>
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>Code</TimelineContent>
                </TimelineItem>
                <TimelineItem>
                  <TimelineOppositeContent>
                    12:00 am
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineDot color="secondary">
                      <HotelIcon />
                    </TimelineDot>
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>Sleep</TimelineContent>
                </TimelineItem>
                <TimelineItem>
                  <TimelineOppositeContent>
                    09:00 am
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineDot>
                      <RepeatIcon />
                    </TimelineDot>
                  </TimelineSeparator>
                  <TimelineContent>Repeat</TimelineContent>
                </TimelineItem>
              </Timeline>
            </CardContent>
          </Card>
        </Grid>

        {/* Outlined Timeline */}
        <Grid item xs={12} md={6}>
          <Card sx={{ position: 'relative' }}>
            <CardContent>
              <Typography variant="h6">Outlined</Typography>
              <Timeline>
                <TimelineItem>
                  <TimelineSeparator>
                    <TimelineDot variant="outlined">
                      <FastfoodIcon />
                    </TimelineDot>
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>Eat</TimelineContent>
                </TimelineItem>
                <TimelineItem>
                  <TimelineSeparator>
                    <TimelineDot variant="outlined" color="primary">
                      <LaptopMacIcon />
                    </TimelineDot>
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>Code</TimelineContent>
                </TimelineItem>
                <TimelineItem>
                  <TimelineSeparator>
                    <TimelineDot variant="outlined" color="secondary">
                      <HotelIcon />
                    </TimelineDot>
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>Sleep</TimelineContent>
                </TimelineItem>
                <TimelineItem>
                  <TimelineSeparator>
                    <TimelineDot variant="outlined">
                      <RepeatIcon />
                    </TimelineDot>
                  </TimelineSeparator>
                  <TimelineContent>Repeat</TimelineContent>
                </TimelineItem>
              </Timeline>
            </CardContent>
          </Card>
        </Grid>

        {/* Opposite Content Timeline */}
        <Grid item xs={12} md={6}>
          <Card sx={{ position: 'relative' }}>
            <CardContent>
              <Typography variant="h6">Opposite Content</Typography>
              <Timeline position="alternate">
                <TimelineItem>
                  <TimelineOppositeContent color="textSecondary">
                    09:30 am
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineDot>
                      <FastfoodIcon />
                    </TimelineDot>
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>Eat</TimelineContent>
                </TimelineItem>
                <TimelineItem>
                  <TimelineOppositeContent color="textSecondary">
                    10:00 am
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineDot color="primary">
                      <LaptopMacIcon />
                    </TimelineDot>
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>Code</TimelineContent>
                </TimelineItem>
                <TimelineItem>
                  <TimelineOppositeContent color="textSecondary">
                    12:00 am
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineDot color="secondary">
                      <HotelIcon />
                    </TimelineDot>
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>Sleep</TimelineContent>
                </TimelineItem>
                <TimelineItem>
                  <TimelineOppositeContent color="textSecondary">
                    09:00 am
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineDot>
                      <RepeatIcon />
                    </TimelineDot>
                  </TimelineSeparator>
                  <TimelineContent>Repeat</TimelineContent>
                </TimelineItem>
              </Timeline>
            </CardContent>
          </Card>
        </Grid>

        {/* Customized Timeline */}
        <Grid item xs={12}>
          <Card sx={{ position: 'relative' }}>
            <CardContent>
              <Typography variant="h6">Customized</Typography>
              <Timeline>
                <TimelineItem>
                  <TimelineOppositeContent color="textSecondary">
                    09:30 am
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineDot variant="outlined">
                      <FastfoodIcon />
                    </TimelineDot>
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>Eat</TimelineContent>
                </TimelineItem>
                <TimelineItem>
                  <TimelineOppositeContent color="textSecondary">
                    10:00 am
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineDot variant="outlined" color="primary">
                      <LaptopMacIcon />
                    </TimelineDot>
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>Code</TimelineContent>
                </TimelineItem>
                <TimelineItem>
                  <TimelineOppositeContent color="textSecondary">
                    12:00 am
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineDot variant="outlined" color="secondary">
                      <HotelIcon />
                    </TimelineDot>
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>Sleep</TimelineContent>
                </TimelineItem>
                <TimelineItem>
                  <TimelineOppositeContent color="textSecondary">
                    09:00 am
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineDot variant="outlined">
                      <RepeatIcon />
                    </TimelineDot>
                  </TimelineSeparator>
                  <TimelineContent>Repeat</TimelineContent>
                </TimelineItem>
              </Timeline>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Paper>
  );
}
