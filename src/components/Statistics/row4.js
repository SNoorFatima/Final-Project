import React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { Stack } from "@mui/material";
import {
  AccountBalanceWalletTwoTone,
  AccountCircleTwoTone,
  EmojiEmotionsTwoTone,
  ShoppingCartTwoTone,
} from "@mui/icons-material";

const Row4 = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6} md={3}>
        <Paper>
          <Grid container alignItems="center">
            <Grid
              item
              sx={{
                backgroundColor: "rgb(103, 58, 183)",
                p: "28px 0px",
                borderTopLeftRadius: "8px",
                borderEndStartRadius: "8px",
              }}
              xs={4}
            >
              <Typography variant="h5" sx={{ textAlign: "center" }}>
                <AccountCircleTwoTone sx={{ color: "rgb(255,255,255)", height: "32px", width: "32px" }} />
              </Typography>
            </Grid>
            <Grid item sx={{ pl: "16px" }}>
              <Stack>
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
                <Typography variant="body" sx={{ color: "#364152", fontSize: "14px" }}>
                  Last week <span style={{ color: "rgb(103, 58, 183)" }}>users</span>
                </Typography>
              </Stack>
            </Grid>
          </Grid>
        </Paper>
      </Grid>

      <Grid item xs={12} sm={6} md={3}>
        <Paper>
          <Grid container alignItems="center">
            <Grid
              item
              sx={{
                backgroundColor: "rgb(30, 136, 229)",
                p: "28px 0px",
                borderTopLeftRadius: "8px",
                borderEndStartRadius: "8px",
              }}
              xs={4}
            >
              <Typography variant="h5" sx={{ textAlign: "center" }}>
                <AccountBalanceWalletTwoTone sx={{ color: "rgb(255,255,255)", height: "32px", width: "32px" }} />
              </Typography>
            </Grid>
            <Grid item sx={{ pl: "16px" }}>
              <Stack>
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
                <Typography variant="body" sx={{ color: "#364152", fontSize: "14px" }}>
                  Total <span style={{ color: "rgb(30, 136, 229)" }}>earning</span>
                </Typography>
              </Stack>
            </Grid>
          </Grid>
        </Paper>
      </Grid>

      <Grid item xs={12} sm={6} md={3}>
        <Paper>
          <Grid container alignItems="center">
            <Grid
              item
              sx={{
                backgroundColor: "rgb(0, 200, 83)",
                p: "28px 0px",
                borderTopLeftRadius: "8px",
                borderEndStartRadius: "8px",
              }}
              xs={4}
            >
              <Typography variant="h5" sx={{ textAlign: "center" }}>
                <EmojiEmotionsTwoTone sx={{ color: "rgb(255,255,255)", height: "32px", width: "32px" }} />
              </Typography>
            </Grid>
            <Grid item sx={{ pl: "16px" }}>
              <Stack>
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
                <Typography variant="body" sx={{ color: "#364152", fontSize: "14px" }}>
                  Today <span style={{ color: "rgb(0, 200, 83)" }}>visitors</span>
                </Typography>
              </Stack>
            </Grid>
          </Grid>
        </Paper>
      </Grid>

      <Grid item xs={12} sm={6} md={3}>
        <Paper>
          <Grid container alignItems="center">
            <Grid
              item
              sx={{
                backgroundColor: "rgb(244, 67, 54)",
                p: "28px 0px",
                borderTopLeftRadius: "8px",
                borderEndStartRadius: "8px",
              }}
              xs={4}
            >
              <Typography variant="h5" sx={{ textAlign: "center" }}>
                <ShoppingCartTwoTone sx={{ color: "rgb(255,255,255)", height: "32px", width: "32px" }} />
              </Typography>
            </Grid>
            <Grid item sx={{ pl: "16px" }}>
              <Stack>
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
                <Typography variant="body" sx={{ color: "#364152", fontSize: "14px" }}>
                  New <span style={{ color: "rgb(244, 67, 54)" }}>order</span>
                </Typography>
              </Stack>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Row4;
