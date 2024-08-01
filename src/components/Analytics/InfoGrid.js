import React from "react";
import { Grid, Typography, Box } from "@mui/material";
import { IconAccessPoint, IconCircles, IconCreditCard, IconShare } from "@tabler/icons-react";

const DashboardBoxes = () => {
  return (
    <Grid container spacing={2}>
      {/* First Row of Boxes */}
      <Grid item xs={12} >
        <Grid container spacing={0} sx={{ display: "flex" }}>
          <Grid item xs={6} sx={{ padding: 0 }}>
            <Grid
              container
              spacing={0}
              sx={{
                height: 96,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRight: "1px solid #ddd",
                borderBottom: "1px solid #ddd",
                position: "relative",
                padding: "20px",
                width: "100%",
                boxSizing: "border-box",
                borderTopLeftRadius: "4px",
                backgroundColor: "#ffffff",
              }}
            >
              <Grid container spacing={2} sx={{ alignItems: "center", justifyContent: "center", textAlign: "center", flexDirection: "row", paddingTop: '0px', paddingLeft: '0px' }}>
                <Grid item xs={3} sx={{ padding: "8px 0px 0px 8px !important" }}>
                  <IconShare
                    style={{
                      width: '50px',
                      height: '50px',
                      color: '#673ab7',
                      borderRadius: '14px',
                      padding: '10px',
                      backgroundColor: '#e3f2fd',
                    }}
                  />
                </Grid>
                <Grid item xs={9} sx={{ padding: "8px 0px 0px 8px !important", alignItems: 'center' }}>
                  <Typography variant="h5" sx={{ fontSize: '14px' }}>1000</Typography>
                  <Typography variant="h6" sx={{ fontSize: '12px', color: '#697586' }}>SHARES</Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6} sx={{ padding: 0 }}>
            <Grid
              container
              spacing={0}
              sx={{
                height: 96,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderBottom: "1px solid #ddd",
                position: "relative",
                padding: "20px",
                width: "100%",
                boxSizing: "border-box",
                backgroundColor: "#ffffff",
                borderTopRightRadius:"4px"

              }}
            >
              <Grid container spacing={2} sx={{ alignItems: "center", justifyContent: "center", textAlign: "center", flexDirection: "row", paddingTop: '0px', paddingLeft: '0px' }}>
                <Grid item xs={3} sx={{ padding: "8px 0px 0px 8px !important" }}>
                  <IconAccessPoint
                    style={{
                      width: '50px',
                      height: '50px',
                      color: '#673ab7',
                      borderRadius: '14px',
                      padding: '10px',
                      backgroundColor: '#e3f2fd',
                    }}
                  />
                </Grid>
                <Grid item xs={9} sx={{ padding: "8px 0px 0px 8px !important", alignItems: 'center' }}>
                  <Typography variant="h5" sx={{ fontSize: '14px' }}>600</Typography>
                  <Typography variant="h6" sx={{ fontSize: '12px', color: '#697586' }}>NETWORK</Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/* Second Row of Boxes */}
      <Grid item xs={12} sx={{pt:'0px !important'}}>
        <Grid container spacing={0} sx={{ display: "flex" }}>
          <Grid item xs={6}>
            <Grid
              container
              spacing={0}
              sx={{
                height: 96,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRight: "1px solid #ddd",
                position: "relative",
                padding: '20px',
                width: "100%",
                boxSizing: "border-box",
                backgroundColor: "#ffffff",
                borderEndStartRadius:"4px"
              }}
            >
              <Grid container spacing={2} sx={{ alignItems: "center", justifyContent: "center", textAlign: "center", flexDirection: "row", paddingTop: '0px', paddingLeft: '0px' }}>
                <Grid item xs={3} sx={{ padding: "8px 0px 0px 8px !important" }}>
                  <IconCircles
                    style={{
                      width: '50px',
                      height: '50px',
                      color: '#673ab7',
                      borderRadius: '14px',
                      padding: '10px',
                      backgroundColor: '#e3f2fd',
                    }}
                  />
                </Grid>
                <Grid item xs={9} sx={{ padding: "8px 0px 0px 8px !important", alignItems: 'center' }}>
                  <Typography variant="h5" sx={{ fontSize: '14px' }}>3550</Typography>
                  <Typography variant="h6" sx={{ fontSize: '12px', color: '#697586' }}>RETURNS</Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6} sx={{ padding: 0 }}>
            <Grid
              container
              spacing={0}
              sx={{
                height: 96,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                padding: '20px',
                width: "100%",
                boxSizing: "border-box",
                backgroundColor: "#ffffff",
                borderEndEndRadius:"4px"
              }}
            >
              <Grid container spacing={2} sx={{ alignItems: "center", justifyContent: "center", textAlign: "center", flexDirection: "row", paddingTop: '0px', paddingLeft: '0px' }}>
                <Grid item xs={3} sx={{ padding: "8px 0px 0px 8px !important" }}>
                  <IconCreditCard
                    style={{
                      width: '50px',
                      height: '50px',
                      color: '#673ab7',
                      borderRadius: '14px',
                      padding: '10px',
                      backgroundColor: '#e3f2fd',
                    }}
                  />
                </Grid>
                <Grid item xs={9} sx={{ padding: "8px 0px 0px 8px !important", alignItems: 'center' }}>
                  <Typography variant="h5" sx={{ fontSize: '14px' }}>100%</Typography>
                  <Typography variant="h6" sx={{ fontSize: '12px', color: '#697586' }}>ORDER</Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default DashboardBoxes;
