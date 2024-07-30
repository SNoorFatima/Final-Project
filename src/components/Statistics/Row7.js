import React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { Button, ButtonBase, CardContent, Stack } from "@mui/material";
import {
  PanToolTwoTone,
  RadioButtonCheckedTwoTone,
  RemoveRedEyeTwoTone,
} from "@mui/icons-material";

const statistics7 = [
  {
    value: "1,563",
    label1: "Imperessions",
    Date: "May 23 - June 01 (2018)",
    icon: <RemoveRedEyeTwoTone sx={{ color: "rgb(33, 150, 243)" }} />,
    Buttoncolor:"rgb(227, 242, 253)"
  },
  {
    value: "30,564",
    label1: "Goal",
    Date: "May 28 - June 01 (2018)",
    icon: <RadioButtonCheckedTwoTone sx={{ color: " rgb(0, 200, 83)" }} />,
    Buttoncolor:"rgb(185, 246, 202)"
  },
  {
    value: "42.6%",
    label1: "Impact ",
    Date: "May 30 - June 01 (2018)",
    icon: <PanToolTwoTone sx={{ color: "rgb(255, 193, 7)" }} />,
    Buttoncolor:"rgb(255, 248, 225)"
  },
];

const Row7 = () => {
  return (
    <Grid container spacing={2}>
      {statistics7.map((stat, index) => (
        <Grid item xs={12} sm={6} md={3} key={index}>
          <Paper>
            <CardContent>
              <Grid
                container
                alignItems="center"
                justifyContent="space-between"
              >
                <Grid item>
                  <Typography varient="h6" sx={{ fontSize: "14px" }}>
                    {stat.label1}
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
                    {stat.value}
                  </Typography>
                  <Typography
                    variant="body"
                    sx={{ color: "#364152", fontSize: "12px", mt: "8px" }}
                  >
                    {stat.Date}
                  </Typography>
                </Grid>
                <Grid item>
                  <Button
                    sx={{
                      textAlign: "center",
                      borderRadius: "50%",
                      backgroundColor: stat.Buttoncolor,
                      height: "48px",
                      width: "48px",
                      minWidth: "48px",
                      "&:hover": {
                        backgroundColor: stat.Buttoncolor,
                      },
                    }}
                  >
                    {stat.icon}
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
};

export default Row7;
