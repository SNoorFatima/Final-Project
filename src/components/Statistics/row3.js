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

const statistics3 = [
  {
    value: "6035",
    label: "Visitors",
    icon: <AccountCircleTwoTone sx={{ color: "rgb(30, 136, 229)" }} />,
  },
  {
    value: "19",
    label: "Invoices",
    icon: <DescriptionTwoTone sx={{ color: "rgb(244, 67, 54)" }} />,
  },
  {
    value: "63",
    label: "Issues",
    icon: <BugReportTwoTone sx={{ color: "rgb(255, 193, 7)" }} />,
  },
  {
    value: "95%",
    label: "Projects",
    icon: <FolderOpenTwoTone sx={{ color: "rgb(0, 200, 83)" }} />,
  },
];

const Row3 = () => {
  return (
    <Grid container spacing={2}>
      {statistics3.map((stat, index) => (
        <Grid item xs={12} sm={6} md={3} key={index}>
          <Paper>
            <CardContent>
              <Grid container alignItems="center" justifyContent="space-between">
                <Grid item>
                  <Typography variant="h6">{stat.icon}</Typography>
                  <Typography variant="h5" sx={{ color: "#364152", fontSize: "14px" }}>
                    {stat.label}
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
                    {stat.value}
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
};

export default Row3;
