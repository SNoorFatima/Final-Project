import React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

const Row8 = () => {
  return (
    <Grid container justifyContent="center">
      <Grid item xs={12}>
        <Paper sx={{ padding: "16px" }}>
          <Grid container spacing={2}>
            
            <Grid item xs={12} md={6}>
              <Box sx={{ textAlign: "center" }}>
                <Typography variant="subtitle2" sx={{ color: "#697586" }}>
                  Published Project
                </Typography>
                <Typography
                  variant="h4"
                  sx={{ fontWeight: "bold", color: "#121926", mt: "8px" }}
                >
                  532
                </Typography>
                <Box sx={{ mt: "16px", position: "relative" }}>
                  <Box
                    sx={{
                      backgroundColor: "#EEE5FF",
                      height: "8px",
                      borderRadius: "4px",
                    }}
                  >
                    <Box
                      sx={{
                        width: `${(532 / 4569) * 100}%`,
                        backgroundColor: "#7B61FF",
                        height: "8px",
                        borderRadius: "4px",
                      }}
                    />
                  </Box>
                </Box>
              </Box>
            </Grid>

            <Grid item xs={12} md={6}>
              <Box sx={{ textAlign: "center" }}>
                <Typography variant="subtitle2" sx={{ color: "#697586" }}>
                  Completed Task
                </Typography>
                <Typography
                  variant="h4"
                  sx={{ fontWeight: "bold", color: "#121926", mt: "8px" }}
                >
                  4569
                </Typography>
                <Box sx={{ mt: "16px", position: "relative" }}>
                  <Box
                    sx={{
                      backgroundColor: "#B9F6CA",
                      height: "8px",
                      borderRadius: "4px",
                    }}
                  >
                    <Box
                      sx={{
                        width: `${(4569 / 4569) * 100}%`,
                        backgroundColor: "#00C853",
                        height: "8px",
                        borderRadius: "4px",
                      }}
                    />
                  </Box>
                </Box>
              </Box>
            </Grid>

            <Grid item xs={12} md={6}>
              <Box sx={{ textAlign: "center" }}>
                <Typography variant="subtitle2" sx={{ color: "#697586" }}>
                  Pending Task
                </Typography>
                <Typography
                  variant="h4"
                  sx={{ fontWeight: "bold", color: "#121926", mt: "8px" }}
                >
                  1005
                </Typography>
                <Box sx={{ mt: "16px", position: "relative" }}>
                  <Box
                    sx={{
                      backgroundColor: "#FFE0B2",
                      height: "8px",
                      borderRadius: "4px",
                    }}
                  >
                    <Box
                      sx={{
                        width: `${(1005 / 4569) * 100}%`,
                        backgroundColor: "#FF6D00",
                        height: "8px",
                        borderRadius: "4px",
                      }}
                    />
                  </Box>
                </Box>
              </Box>
            </Grid>

            <Grid item xs={12} md={6}>
              <Box sx={{ textAlign: "center" }}>
                <Typography variant="subtitle2" sx={{ color: "#697586" }}>
                  Issues
                </Typography>
                <Typography
                  variant="h4"
                  sx={{ fontWeight: "bold", color: "#121926", mt: "8px" }}
                >
                  365
                </Typography>
                <Box sx={{ mt: "16px", position: "relative" }}>
                  <Box
                    sx={{
                      backgroundColor: "#FFCDD2",
                      height: "8px",
                      borderRadius: "4px",
                    }}
                  >
                    <Box
                      sx={{
                        width: `${(365 / 4569) * 100}%`,
                        backgroundColor: "#DD2C00",
                        height: "8px",
                        borderRadius: "4px",
                      }}
                    />
                  </Box>
                </Box>
              </Box>
            </Grid>
            
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Row8;
