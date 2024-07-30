import React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import {Stack } from "@mui/material";
import {
    AccountBalanceWalletTwoTone,
  AccountCircleTwoTone,
  EmojiEmotionsTwoTone,
  ShoppingCartTwoTone,
} from "@mui/icons-material";

const statistics4 = [
  {
    value: "6035",
    label1: "Last week ",
    label2:"users",
    icon: <AccountCircleTwoTone sx={{ color: "rgb(255,255,255)" ,height:"32px",width:"32px"}} />,
    label2Color:"rgb(103, 58, 183)",
    backgroundcolor:"rgb(103, 58, 183)"
  },
  {
    value: "19",
    label1: "Total ",
    label2:"earning",
    icon: <AccountBalanceWalletTwoTone sx={{ color: "rgb(255,255,255)" ,height:"32px",width:"32px"}} />,
    label2Color:"rgb(30, 136, 229)",
    backgroundcolor:"rgb(30, 136, 229)"
  },
  {
    value: "63",
    label1: "Today ",
    label2: "vistors",
    icon: <EmojiEmotionsTwoTone sx={{ color: "rgb(255,255,255)" ,height:"32px",width:"32px"}} />,
    label2Color:"rgb(0, 200, 83)",
    backgroundcolor:"rgb(0, 200, 83)"
  },
  {
    value: "95%",
    label1: "New ",
    label2:"order",
    icon: <ShoppingCartTwoTone sx={{ color: "rgb(255,255,255)",height:"32px",width:"32px" }} />,
    label2Color:"rgb(244, 67, 54)",
    backgroundcolor:"rgb(244, 67, 54)"
  },
];

const Row4 = () => {
  return (
    <Grid container spacing={2}>
      {statistics4.map((stat, index) => (
        <Grid item xs={12} sm={6} md={3} key={index}>
          <Paper>
            
              <Grid container alignItems="center" >
                <Grid item sx={{backgroundColor: stat.backgroundcolor,p:"28px 0px",borderTopLeftRadius:"8px",borderEndStartRadius:"8px"}} xs={4}>
                  <Typography variant="h5" sx={{textAlign:"center"}}>{stat.icon}</Typography>
                  
                </Grid>
                <Grid item sx={{pl:"16px"}}>
                    <Stack>
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
                    <Typography variant="body" sx={{ color: "#364152", fontSize: "14px" }}>
                    {stat.label1}
                    <span style={{ color: stat.label2Color }}>{stat.label2}</span>
                  </Typography>
                 
                  </Stack>
                </Grid>
              </Grid>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
};

export default Row4;
