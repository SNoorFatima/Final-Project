import React, { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  Paper,
  Rating,
  Typography,
} from "@mui/material";
import { Favorite, FavoriteBorder, Star, StarBorder } from "@mui/icons-material";
import { Stack } from "@mui/system";
import muilogo from "../../Utilities/Assets/logoMUI.png";
const labels = {
  0.5: "Useless",
  1: "Useless+",
  1.5: "Poor",
  2: "Poor+",
  2.5: "Ok",
  3: "Ok+",
  3.5: "Good",
  4: "Good+",
  4.5: "Excellent",
  5: "Excellent+",
};


const RatingPlayground = () => {
  const [value, setValue] = useState(2);
  const [hover, setHover] = useState(-1);

  return (
    <Paper sx={{ flexGrow: 1,p:3 }}>
     <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography variant="h5">Rating</Typography>
        <a href="https://mui.com/material-ui/react-rating/" target="_blank" rel="noopener noreferrer">
          <img src={muilogo} alt="MUI Logo" style={{ height: 40 }} />
        </a>
      </Stack>
      <Divider sx={{mb:2}}/>
      <Grid container spacing={2}>
        {/* Basic */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardHeader title="Basic" />
            <CardContent>
              <Typography component="legend">Controlled</Typography>
              <Rating
                name="controlled"
                value={value}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
              />
              <Typography component="legend">Read only</Typography>
              <Rating name="read-only" value={value} readOnly />
              <Typography component="legend">Disabled</Typography>
              <Rating name="disabled" value={value} disabled />
              <Typography component="legend">Pristine</Typography>
              <Rating name="pristine" value={null} />
            </CardContent>
          </Card>
        </Grid>

        {/* Customized Icon */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardHeader title="Customized Icon" />
            <CardContent>
              <Typography component="legend">Empty Icon</Typography>
              <Rating name="customized-empty" value={2} emptyIcon={<StarBorder fontSize="inherit" />} />
              <Typography component="legend">Icon & Color</Typography>
              <Rating
                name="customized-color"
                value={2}
                getLabelText={(value) => `${value} Heart${value !== 1 ? "s" : ""}`}
                precision={0.5}
                icon={<Favorite fontSize="inherit" />}
                emptyIcon={<FavoriteBorder fontSize="inherit" />}
              />
              <Typography component="legend">6 Stars</Typography>
              <Rating
                name="customized-6stars"
                value={3}
                max={6}
                icon={<Star fontSize="inherit" />}
                emptyIcon={<StarBorder fontSize="inherit" />}
              />
              <Typography component="legend">Icon Set</Typography>
              <Rating
                name="customized-icons"
                value={2}
                getLabelText={(value) => `${labels[value]}`}
                icon={<span>😃</span>}
                emptyIcon={<span>😐</span>}
              />
            </CardContent>
          </Card>
        </Grid>

        {/* Size */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardHeader title="Size" />
            <CardContent>
                <Stack gap={'10px'}>
              <Rating name="size-small" defaultValue={2} size="small" />
              <Rating name="size-medium" defaultValue={2} />
              <Rating name="size-large" defaultValue={2} size="large" />
              </Stack>
            </CardContent>
          </Card>
        </Grid>

        {/* Half */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardHeader title="Half" />
            <CardContent>
                <Stack gap={'10px'}>
              <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
              <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
              </Stack>
            </CardContent>

          </Card>
        </Grid>

        {/* Hover */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardHeader title="Hover" />
            <CardContent>
                <Stack direction={'row'} gap={'10px'}>
              <Rating
                name="hover-feedback"
                value={value}
                precision={0.5}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
                onChangeActive={(event, newHover) => {
                  setHover(newHover);
                }}
              />
              {value !== null && (
                <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
              )}
              </Stack>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default RatingPlayground;
