import React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { CardContent } from "@mui/material";
import {
  AccountCircleTwoTone,
  BugReportTwoTone,
  DescriptionTwoTone,
  FolderOpenTwoTone,
} from "@mui/icons-material";

const Row3 = () => {
  return (
    <Grid container spacing={2}>
      <Grid item >
        <Paper>
          <CardContent>
            <Grid container alignItems="center" justifyContent="space-between">
              <Grid item>
                <Typography variant="h6">
                  <AccountCircleTwoTone sx={{ color: "rgb(30, 136, 229)" }} />
                </Typography>
                <Typography variant="h5" sx={{ color: "#364152", fontSize: "14px" }}>
                  Visitors
                </Typography>
              </Grid>
              <Grid item>
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
              </Grid>
            </Grid>
          </CardContent>
        </Paper>
      </Grid>
      <Grid item >
        <Paper>
          <CardContent>
            <Grid container alignItems="center" justifyContent="space-between">
              <Grid item>
                <Typography variant="h6">
                  <DescriptionTwoTone sx={{ color: "rgb(244, 67, 54)" }} />
                </Typography>
                <Typography variant="h5" sx={{ color: "#364152", fontSize: "14px" }}>
                  Invoices
                </Typography>
              </Grid>
              <Grid item>
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
              </Grid>
            </Grid>
          </CardContent>
        </Paper>
      </Grid>
      <Grid item >
        <Paper>
          <CardContent>
            <Grid container alignItems="center" justifyContent="space-between">
              <Grid item>
                <Typography variant="h6">
                  <BugReportTwoTone sx={{ color: "rgb(255, 193, 7)" }} />
                </Typography>
                <Typography variant="h5" sx={{ color: "#364152", fontSize: "14px" }}>
                  Issues
                </Typography>
              </Grid>
              <Grid item>
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
              </Grid>
            </Grid>
          </CardContent>
        </Paper>
      </Grid>
      <Grid item >
        <Paper>
          <CardContent>
            <Grid container alignItems="center" justifyContent="space-between">
              <Grid item>
                <Typography variant="h6">
                  <FolderOpenTwoTone sx={{ color: "rgb(0, 200, 83)" }} />
                </Typography>
                <Typography variant="h5" sx={{ color: "#364152", fontSize: "14px" }}>
                  Projects
                </Typography>
              </Grid>
              <Grid item>
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
              </Grid>
            </Grid>
          </CardContent>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Row3;
