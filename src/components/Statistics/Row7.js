import React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { Button, CardContent } from "@mui/material";
import {
  PanToolTwoTone,
  RadioButtonCheckedTwoTone,
  RemoveRedEyeTwoTone,
} from "@mui/icons-material";

const Row7 = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6} md={3}>
        <Paper>
          <CardContent>
            <Grid container alignItems="center" justifyContent="space-between">
              <Grid item>
                <Typography variant="h6" sx={{ fontSize: "14px" }}>
                  Imperessions
                </Typography>
                <Typography
                  variant="h3"
                  sx={{
                    fontSize: "20px",
                    fontWeight: "600",
                    color: "#121946",
                    mt: "8px",
                  }}
                >
                  1,563
                </Typography>
                <Typography
                  variant="body"
                  sx={{ color: "#364152", fontSize: "12px", mt: "8px" }}
                >
                  May 23 - June 01 (2018)
                </Typography>
              </Grid>
              <Grid item>
                <Button
                  sx={{
                    textAlign: "center",
                    borderRadius: "50%",
                    backgroundColor: "rgb(227, 242, 253)",
                    height: "48px",
                    width: "48px",
                    minWidth: "48px",
                    "&:hover": {
                      backgroundColor: "rgb(227, 242, 253)",
                    },
                  }}
                >
                  <RemoveRedEyeTwoTone sx={{ color: "rgb(33, 150, 243)" }} />
                </Button>
              </Grid>
            </Grid>
          </CardContent>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Paper>
          <CardContent>
            <Grid container alignItems="center" justifyContent="space-between">
              <Grid item>
                <Typography variant="h6" sx={{ fontSize: "14px" }}>
                  Goal
                </Typography>
                <Typography
                  variant="h3"
                  sx={{
                    fontSize: "20px",
                    fontWeight: "600",
                    color: "#121946",
                    mt: "8px",
                  }}
                >
                  30,564
                </Typography>
                <Typography
                  variant="body"
                  sx={{ color: "#364152", fontSize: "12px", mt: "8px" }}
                >
                  May 28 - June 01 (2018)
                </Typography>
              </Grid>
              <Grid item>
                <Button
                  sx={{
                    textAlign: "center",
                    borderRadius: "50%",
                    backgroundColor: "rgb(185, 246, 202)",
                    height: "48px",
                    width: "48px",
                    minWidth: "48px",
                    "&:hover": {
                      backgroundColor: "rgb(185, 246, 202)",
                    },
                  }}
                >
                  <RadioButtonCheckedTwoTone sx={{ color: "rgb(0, 200, 83)" }} />
                </Button>
              </Grid>
            </Grid>
          </CardContent>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Paper>
          <CardContent>
            <Grid container alignItems="center" justifyContent="space-between">
              <Grid item>
                <Typography variant="h6" sx={{ fontSize: "14px" }}>
                  Impact
                </Typography>
                <Typography
                  variant="h3"
                  sx={{
                    fontSize: "20px",
                    fontWeight: "600",
                    color: "#121946",
                    mt: "8px",
                  }}
                >
                  42.6%
                </Typography>
                <Typography
                  variant="body"
                  sx={{ color: "#364152", fontSize: "12px", mt: "8px" }}
                >
                  May 30 - June 01 (2018)
                </Typography>
              </Grid>
              <Grid item>
                <Button
                  sx={{
                    textAlign: "center",
                    borderRadius: "50%",
                    backgroundColor: "rgb(255, 248, 225)",
                    height: "48px",
                    width: "48px",
                    minWidth: "48px",
                    "&:hover": {
                      backgroundColor: "rgb(255, 248, 225)",
                    },
                  }}
                >
                  <PanToolTwoTone sx={{ color: "rgb(255, 193, 7)" }} />
                </Button>
              </Grid>
            </Grid>
          </CardContent>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Row7;
