import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Box, Card, CardHeader, CardContent, Divider } from "@mui/material";

const CustomerSatisfaction = () => {
  const data = {
    title: "Customer satisfaction",
    mainValue: "89.73%",
    progress: 89.73,
    previous: 56.75,
    change: "+12.60",
    trend: 23.78,
  };

  return (
    <Grid container justifyContent="center">
      <Grid item xs={12} md={6} lg={4}>
        <Card >
          <CardHeader  sx={{ padding: "24px",  }}
            title={data.title}
            titleTypographyProps={{ variant: "subtitle1", sx: { color: "#121946",fontSize:"18px",fontWeight:"500" } }}
          />
          <Divider sx={{borderWidth: "0px 0px thin", borderStyle: "solid",borderColor: "rgb(227, 232, 239)"}} />
          <CardContent sx={{ padding: "16px" }}>
            <Typography
              variant="h3"
              sx={{ fontWeight: "bold", color: "#121926", mt: "8px",fontSize:"20px",textAlign: "center" }}
            >
              {data.mainValue}
            </Typography>
            <Box sx={{ mt: "16px", position: "relative" }}>
              <Box
                sx={{
                  backgroundColor: "#E3F2FD",
                  height: "8px",
                  borderRadius: "4px",
                }}
              >
                <Box
                  sx={{
                    width: `${data.progress}%`,
                    backgroundColor: "#2196F3",
                    height: "8px",
                    borderRadius: "4px",
                  }}
                />
              </Box>
            </Box>
            <Grid container spacing={2} sx={{ mt: "16px" }}>
              <Grid item xs={4}>
                <Typography variant="body2" sx={{ color: "#697586",fontSize:"12px" }}>
                  previous
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ fontWeight: "bold", color: "#121926",fontSize:"14px" }}
                >
                  {data.previous}
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography variant="body2" sx={{ color: "#697586",fontSize:"12px" }}>
                  Change
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ fontWeight: "bold", color: "#121926",fontSize:"14px" }}
                >
                  {data.change}
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography variant="body2" sx={{ color: "#697586",fontSize:"12px" }}>
                  Trend
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ fontWeight: "bold", color: "#121926",fontSize:"14px" }}
                >
                  {data.trend}
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default CustomerSatisfaction;
