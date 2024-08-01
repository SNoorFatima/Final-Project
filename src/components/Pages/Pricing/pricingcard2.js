import React from "react";
import {
  CardContent,
  Typography,
  Box,
  Button,
  List,
  ListItem,
  ListItemText,
  Paper,
  Grid,
  Divider,
  Stack,
} from "@mui/material";
import {
  TwoWheelerTwoTone,
  CheckCircle,
  CheckTwoTone,
  AirportShuttleTwoTone,
} from "@mui/icons-material";

const PricingCard2 = () => {
  const features = [
    { text: "One End Product", enabled: true },
    { text: "No attribution required", enabled: true },
    { text: "TypeScript", enabled: true },
    { text: "Figma Design Resources", enabled: true },
    { text: "Create Multiple Products", enabled: false },
    { text: "Create a SaaS Project", enabled: false },
    { text: "Resale Product", enabled: false },
    { text: "Separate sale of our UI Elements?", enabled: false },
  ];

  return (
    <Grid item xs={12} sm={6} md={4} lg={4} spacing={3}>
      <Paper
        sx={{
          padding: 2,
          border: "1px solid rgba(144, 202, 249, 0.75)",
          "&:active": {
            border: "2px solid rgb(103, 58, 183)",
          },
        }}
      >
        <CardContent>
          <Grid container direction={"column"} textAlign={"center"} spacing={3}>
            <Grid item textAlign={"center"}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "50%",
                  width: "80px",
                  height: "80px",
                  backgroundColor: "rgb(227, 242, 253)",
                  color: "rgb(33, 150, 243)",
                }}
              >
                <AirportShuttleTwoTone fontSize="large" color="primary" />
              </Box>
            </Grid>
            <Grid item className="Textclass">
              <Typography variant="h5" textAlign="center" fontWeight={530}>
                Standard Plus
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                sx={{ color: "rgb(54, 65, 82)", fontSize: "0.875rem" }}
              >
                Create one end product for a client, transfer that end product
                to your client, charge them for your services. The license is
                then transferred to the client.
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="h4" textAlign="center">
                <sup>$</sup>129
                <span style={{ fontSize: "1.25rem", fontWeight: 500 }}>
                  /Lifetime
                </span>
              </Typography>
            </Grid>
            <List>
              {features.map((feature, index) => (
                <React.Fragment key={index}>
                  <ListItem disableGutters>
                    <Stack direction="row" alignItems="center">
                      <CheckTwoTone
                        sx={{
                          color: feature.enabled
                            ? "rgb(0, 200, 83)"
                            : "rgb(237, 231, 246)",
                          marginRight: "10px",
                        }}
                      />

                      <ListItemText
                        primary={feature.text}
                        primaryTypographyProps={{
                          color: feature.enabled
                            ? "text.primary"
                            : "text.disabled",
                          textAlign: "center",
                          fontSize: "14px",
                        }}
                      />
                    </Stack>
                  </ListItem>
                  {index < features.length - 1 && <Divider />}
                </React.Fragment>
              ))}
            </List>
            <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
              <Button variant="contained" color="primary">
                Order Now
              </Button>
            </Box>
          </Grid>
        </CardContent>
      </Paper>
    </Grid>
  );
};

export default PricingCard2;
