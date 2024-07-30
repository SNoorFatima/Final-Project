import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import { IconSquares } from "@tabler/icons-react";
import { Avatar, Box, Grid, Typography } from "@mui/material";
import { ArrowUpwardOutlined } from "@mui/icons-material";
import OrderBox from "./orderbox";

const EarningBox = () => {
  return (
    // Ensure the Box is wrapped in a Grid item with a wider span
   
        <Box className = "first-box"
          sx={{
            backgroundColor: "#5e35b1",
            borderRadius: "8px",
            color: "white",
            padding: "18px",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <Grid container direction="column" spacing={2}>
            <Grid item>
              <Grid
                container
                justifyContent="space-between"
                alignItems="center"
              >
                <Grid item>
                  <Avatar
                    sx={{
                      color: "white",
                      backgroundColor: "#4527A0",
                      borderRadius: "8px",
                      mt: "8px",
                    }}
                    variant="square"
                  >
                    <IconSquares />
                  </Avatar>
                </Grid>
                <Grid item>
                  <Avatar
                    sx={{
                      color: "white",
                      backgroundColor: "#5E35B1",
                      borderRadius: "8px",
                      mt: "8px",
                    }}
                    variant="square"
                  >
                    <MoreHorizOutlinedIcon />
                  </Avatar>
                </Grid>
              </Grid>
            </Grid>
            <Grid item sx={{ mb: "6px" }}>
              <Grid container alignItems="center">
                <Grid item>
                  <Typography variant="h4" sx={{ margin: "4px 8px 6px 0px" }}>
                    $500.00
                  </Typography>
                </Grid>
                <Grid item>
                  <Avatar
                    sx={{
                      bgcolor: "rgb(144, 202, 249)",
                      borderRadius: "50%",
                      height: "22px",
                      width: "22px",
                      margin: "16px 8px 6px 0px",
                      color: "rgb(30, 136, 229)",
                    }}
                    variant="square"
                  >
                    <ArrowUpwardOutlined
                      sx={{
                        height: "17px",
                        width: "20px",
                        transform: "rotate3d(1, 1, 1, 45deg)",
                      }}
                    />
                  </Avatar>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Typography
                variant="body2"
                sx={{ color: "rgb(144, 202, 249)", fontWeight: "500" }}
              >
                Total Earning
              </Typography>
            </Grid>
          </Grid>
        </Box>
     
  
  );
};

export default EarningBox;
