import React from "react";
import {
  Box,
  Card,
  CardHeader,
  CardContent,
  Grid,
  Skeleton,
  Paper,
  Typography,
  Divider,
} from "@mui/material";
import { Stack } from "@mui/system";
import muilogo from "../../Utilities/Assets/logoMUI.png";
const SkeletonPlayground = () => {
  return (
    <Paper sx={{ flexGrow: 1, padding: 2 }}>
        <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography variant="h5">Skeleton</Typography>
        <a href="https://mui.com/material-ui/react-skeleton/" target="_blank" rel="noopener noreferrer">
          <img src={muilogo} alt="MUI Logo" style={{ height: 40 }} />
        </a>
      </Stack>
      <Divider sx={{mb:2}}/>
      <Grid container spacing={2}>
        {/* Example 1 */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardHeader title="Example 1" />
            <CardContent>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Skeleton variant="rectangular" width="100%" height={118} />
                </Grid>
                <Grid item xs={6}>
                  <Skeleton variant="rectangular" width="100%" height={20} />
                </Grid>
                <Grid item xs={6}>
                  <Skeleton variant="rectangular" width="100%" height={20} />
                </Grid>
                <Grid item xs={12}>
                  <Skeleton variant="rectangular" width="100%" height={20} />
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>

        {/* Example 2 */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardHeader title="Example 2" />
            <CardContent>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Skeleton variant="rectangular" width="100%" height={50} />
                </Grid>
                <Grid item xs={12}>
                  <Skeleton variant="rectangular" width="100%" height={50} />
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>

        {/* Example 3 */}
        <Grid item xs={12} md={8}>
          <Card>
            <CardHeader title="Example 3" />
            <CardContent>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Skeleton variant="rectangular" width="100%" height={400} />
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>

        {/* Example 4 */}
        <Grid item xs={12} md={4}>
          <Card>
            <CardHeader title="Example 4" />
            <CardContent>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Skeleton variant="rectangular" width="100%" height={150} />
                </Grid>
                <Grid item xs={12}>
                  <Skeleton variant="rectangular" width="100%" height={20} />
                </Grid>
                <Grid item xs={12}>
                  <Skeleton variant="rectangular" width="100%" height={20} />
                </Grid>
                <Grid item xs={12}>
                  <Skeleton variant="rectangular" width="100%" height={20} />
                </Grid>
                <Grid item xs={12}>
                  <Skeleton variant="rectangular" width="100%" height={20} />
                </Grid>
                <Grid item xs={12}>
                  <Skeleton variant="rectangular" width="100%" height={20} />
                </Grid>
                <Grid item xs={12}>
                  <Skeleton variant="rectangular" width="100%" height={20} />
                </Grid>
                <Grid item xs={12}>
                  <Skeleton variant="rectangular" width="100%" height={20} />
                </Grid>
                <Grid item xs={12}>
                  <Skeleton variant="rectangular" width="100%" height={20} />
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default SkeletonPlayground;
