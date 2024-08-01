import React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { CardContent, Stack } from "@mui/material";
import { ArrowDownward, ArrowUpward } from "@mui/icons-material";

const Row5 = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6} md={3}>
        <Paper>
          <CardContent>
            <Grid container alignItems="center" direction={"column"}>
              <Grid item>
                <Typography variant="h6" sx={{ fontSize: "14px" }}>
                  Total Paid Users
                </Typography>
              </Grid>
              <Grid item>
                <Stack direction={"row"} sx={{ mt: "14px", mb: "14px" }}>
                  <Typography variant="h5" sx={{ textAlign: "center" }}>
                    <ArrowDownward sx={{ color: "rgb(244, 67, 54)" }} />
                  </Typography>
                  <Typography
                    variant="h3"
                    sx={{
                      fontSize: "20px",
                      fontWeight: "600",
                      color: "#121946",
                    }}
                  >
                    6035
                  </Typography>
                </Stack>
              </Grid>
              <Grid item>
                <Typography variant="body" sx={{ color: "#364152", fontSize: "14px" }}>
                  8% less Last 3 Months
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Paper>
          <CardContent>
            <Grid container alignItems="center" direction={"column"}>
              <Grid item>
                <Typography variant="h6" sx={{ fontSize: "14px" }}>
                  Order Status
                </Typography>
              </Grid>
              <Grid item>
                <Stack direction={"row"} sx={{ mt: "14px", mb: "14px" }}>
                  <Typography variant="h5" sx={{ textAlign: "center" }}>
                    <ArrowUpward sx={{ color: "rgb(0, 200, 83)" }} />
                  </Typography>
                  <Typography
                    variant="h3"
                    sx={{
                      fontSize: "20px",
                      fontWeight: "600",
                      color: "#121946",
                    }}
                  >
                    19
                  </Typography>
                </Stack>
              </Grid>
              <Grid item>
                <Typography variant="body" sx={{ color: "#364152", fontSize: "14px" }}>
                  8% From Last 3 Months
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Paper>
          <CardContent>
            <Grid container alignItems="center" direction={"column"}>
              <Grid item>
                <Typography variant="h6" sx={{ fontSize: "14px" }}>
                  Unique Visitors
                </Typography>
              </Grid>
              <Grid item>
                <Stack direction={"row"} sx={{ mt: "14px", mb: "14px" }}>
                  <Typography variant="h5" sx={{ textAlign: "center" }}>
                    <ArrowDownward sx={{ color: "rgb(244, 67, 54)" }} />
                  </Typography>
                  <Typography
                    variant="h3"
                    sx={{
                      fontSize: "20px",
                      fontWeight: "600",
                      color: "#121946",
                    }}
                  >
                    63
                  </Typography>
                </Stack>
              </Grid>
              <Grid item>
                <Typography variant="body" sx={{ color: "#364152", fontSize: "14px" }}>
                  10% From Last 6 Months
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Paper>
          <CardContent>
            <Grid container alignItems="center" direction={"column"}>
              <Grid item>
                <Typography variant="h6" sx={{ fontSize: "14px" }}>
                  Monthly Earnings
                </Typography>
              </Grid>
              <Grid item>
                <Stack direction={"row"} sx={{ mt: "14px", mb: "14px" }}>
                  <Typography variant="h5" sx={{ textAlign: "center" }}>
                    <ArrowUpward sx={{ color: "rgb(0, 200, 83)" }} />
                  </Typography>
                  <Typography
                    variant="h3"
                    sx={{
                      fontSize: "20px",
                      fontWeight: "600",
                      color: "#121946",
                    }}
                  >
                    95%
                  </Typography>
                </Stack>
              </Grid>
              <Grid item>
                <Typography variant="body" sx={{ color: "#364152", fontSize: "14px" }}>
                  36% From last 3 Months
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Row5;
