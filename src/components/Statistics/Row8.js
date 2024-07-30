import React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

const statistics = [
  {
    value: 532,
    label: "Published Project",
    color: "#7B61FF",
    backgroundColor: "#EEE5FF",
  },
  {
    value: 4569,
    label: "Completed Task",
    color: "#00C853",
    backgroundColor: "#B9F6CA",
  },
  {
    value: 1005,
    label: "Pending Task",
    color: "#FF6D00",
    backgroundColor: "#FFE0B2",
  },
  {
    value: 365,
    label: "Issues",
    color: "#DD2C00",
    backgroundColor: "#FFCDD2",
  },
];

const Row8 = () => {
  return (
    <Grid container justifyContent="center">
      <Grid item xs={12}>
        <Paper sx={{ padding: "16px" }}>
          <Grid container spacing={2}>
            {statistics.map((stat, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Box sx={{ textAlign: "center" }}>
                  <Typography variant="subtitle2" sx={{ color: "#697586" }}>
                    {stat.label}
                  </Typography>
                  <Typography
                    variant="h4"
                    sx={{ fontWeight: "bold", color: "#121926", mt: "8px" }}
                  >
                    {stat.value}
                  </Typography>
                  <Box sx={{ mt: "16px", position: "relative" }}>
                    <Box
                      sx={{
                        backgroundColor: stat.backgroundColor,
                        height: "8px",
                        borderRadius: "4px",
                      }}
                    >
                      <Box
                        sx={{
                          width: `${(stat.value / 4569) * 100}%`,
                          backgroundColor: stat.color,
                          height: "8px",
                          borderRadius: "4px",
                        }}
                      />
                    </Box>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Row8;
