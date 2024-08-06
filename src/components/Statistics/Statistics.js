import { Grid, Stack, Paper, Typography, Button, Box, Card, CardHeader, Divider, Breadcrumbs } from "@mui/material";
import React from "react";
import Revenuecard from "../Analytics/Revenuecard";
import Orderscard from "../Analytics/Orderscard";
import {
  AssessmentTwoTone,
  CalendarTodayTwoTone,
  DescriptionTwoTone,
  ThumbDownAltTwoTone,
  AccountCircleTwoTone,
  BugReportTwoTone,
  FolderOpenTwoTone,
  AccountBalanceWalletTwoTone,
  EmojiEmotionsTwoTone,
  ShoppingCartTwoTone,
  ArrowDownward,
  ArrowUpward,
  PanToolTwoTone,
  RadioButtonCheckedTwoTone,
  RemoveRedEyeTwoTone,
  Home,
} from "@mui/icons-material";
import { CardContent } from "@mui/material";
import TotalSales from "./Totalsales";
import Facebookcard from "./facebookcard";
import Twittercard from "./Twittercard";
import Youtubecard from "./youtubecard";
import Linkdencard from "./Linkdencard";
import Dailyusers from "../Analytics/Dailyusers";
import Dailypageview from "../Analytics/Dailypageview";
import LastmonthVisitors from "./LastmonthVisitor";
import CustomerSatisfaction from "./customersatisfaction";
import DashboardBoxes from "../Analytics/InfoGrid";
import Weatherbox from "./Weatherbox";
import { Link } from "react-router-dom";
const Statistics = () => {
  return (
    <Grid container spacing={2}>
    <Grid item xs={12}>
    <>
      <Paper >
        <Grid container p={2} display="flex" justifyContent={'space-between'}>
          <Grid item>
          <Typography variant="h6" sx={{ marginRight: '1rem' }}>Statistics</Typography>
          </Grid>
          <Grid item>
          <Breadcrumbs separator="›">
            <Link underline="hover" color="inherit" href="/">
              <Home sx={{
                marginRight: '0px',
                marginTop: '-2px',
                width: '1rem',
                height: '1rem',
                color: 'rgb(103, 58, 183)'
              }} />
            </Link>
            <Link underline="hover" color="rgb(18, 25, 38)" >
              Basic
            </Link>
            
            <Typography color="rgb(105, 117, 134)">Statistics</Typography>
          </Breadcrumbs>
          </Grid>
        </Grid>
      </Paper>
    </>
    </Grid>
    <Grid item>
    <Grid container spacing={3}>
      <Grid item lg={3} xs={12} md={6} >
        <Paper>
          <CardContent>
            <Grid
              container
              sx={{ justifyContent: "space-between", alignItems: "center" }}
            >
              <Grid item>
                <Typography
                  variant="h3"
                  sx={{ fontSize: "20px", fontWeight: "600", color: "#121946" }}
                >
                  $30200
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ mt: "8px", color: "#364152" }}
                >
                  All Earnings
                </Typography>
              </Grid>
              <Grid item>
                <Typography varient="h2">
                  <AssessmentTwoTone
                    sx={{
                      color: "rgb(103, 58, 183)",
                      height: "35px",
                      width: "35px",
                    }}
                  />
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Paper>
      </Grid>
      <Grid item lg={3} xs={12} md={6}>
        <Paper>
          <CardContent>
            <Grid
              container
              sx={{ justifyContent: "space-between", alignItems: "center" }}
            >
              <Grid item>
                <Typography
                  variant="h3"
                  sx={{ fontSize: "20px", fontWeight: "600", color: "#121946" }}
                >
                  145
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ mt: "8px", color: "#364152" }}
                >
                  Task
                </Typography>
              </Grid>
              <Grid item>
                <Typography varient="h2">
                  <CalendarTodayTwoTone
                    sx={{
                      color: "rgb(244, 67, 54)",
                      height: "35px",
                      width: "35px",
                    }}
                  />
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Paper>
      </Grid>
      <Grid item lg={3} xs={12} md={6}>
        <Paper>
          <CardContent>
            <Grid
              container
              sx={{ justifyContent: "space-between", alignItems: "center" }}
            >
              <Grid item>
                <Typography
                  variant="h3"
                  sx={{ fontSize: "20px", fontWeight: "600", color: "#121946" }}
                >
                  290+
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ mt: "8px", color: "#364152" }}
                >
                  Page Views
                </Typography>
              </Grid>
              <Grid item>
                <Typography varient="h2">
                  <DescriptionTwoTone
                    sx={{
                      color: "rgb(0, 200, 83)",
                      height: "35px",
                      width: "35px",
                    }}
                  />
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Paper>
      </Grid>
      <Grid item lg={3} xs={12} md={6}>
        <Paper>
          <CardContent>
            <Grid
              container
              sx={{ justifyContent: "space-between", alignItems: "center" }}
            >
              <Grid item>
                <Typography
                  variant="h3"
                  sx={{ fontSize: "20px", fontWeight: "600", color: "#121946" }}
                >
                  500
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ mt: "8px", color: "#364152" }}
                >
                  Downloads
                </Typography>
              </Grid>
              <Grid item>
                <Typography varient="h2">
                  <ThumbDownAltTwoTone
                    sx={{
                      color: "rgb(33, 150, 243)",
                      height: "35px",
                      width: "35px",
                    }}
                  />
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Paper>
      </Grid>
      <Grid item lg={4} md={12} >
        <Revenuecard />
      </Grid>
      <Grid item lg={4} xs={12} md={6}>
        <Orderscard />
      </Grid>
      <Grid item lg={4} xs={12} md={6}>
        <TotalSales />
      </Grid>
      <Grid item lg={3} xs={12} sm={6}>
        <Paper>
          <CardContent>
            <Grid container alignItems="center" justifyContent="space-between">
              <Grid item>
                <Typography variant="h6">
                  <AccountCircleTwoTone sx={{ color: "rgb(30, 136, 229)" }} />
                </Typography>
                <Typography
                  variant="h5"
                  sx={{ color: "#364152", fontSize: "14px" }}
                >
                  Visitors
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
                  6035
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Paper>
      </Grid>
      <Grid item lg={3} xs={12} sm={6}>
        <Paper>
          <CardContent>
            <Grid container alignItems="center" justifyContent="space-between">
              <Grid item>
                <Typography variant="h6">
                  <DescriptionTwoTone sx={{ color: "rgb(244, 67, 54)" }} />
                </Typography>
                <Typography
                  variant="h5"
                  sx={{ color: "#364152", fontSize: "14px" }}
                >
                  Invoices
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
                  19
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Paper>
      </Grid>
      <Grid item lg={3} xs={12} sm={6}>
        <Paper>
          <CardContent>
            <Grid container alignItems="center" justifyContent="space-between">
              <Grid item>
                <Typography variant="h6">
                  <BugReportTwoTone sx={{ color: "rgb(255, 193, 7)" }} />
                </Typography>
                <Typography
                  variant="h5"
                  sx={{ color: "#364152", fontSize: "14px" }}
                >
                  Issues
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
                  63
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Paper>
      </Grid>
      <Grid item lg={3} xs={12} sm={6}>
        <Paper>
          <CardContent>
            <Grid container alignItems="center" justifyContent="space-between">
              <Grid item>
                <Typography variant="h6">
                  <FolderOpenTwoTone sx={{ color: "rgb(0, 200, 83)" }} />
                </Typography>
                <Typography
                  variant="h5"
                  sx={{ color: "#364152", fontSize: "14px" }}
                >
                  Projects
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
                  95%
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6} lg={3}>
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
                <AccountCircleTwoTone
                  sx={{
                    color: "rgb(255,255,255)",
                    height: "32px",
                    width: "32px",
                  }}
                />
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
                <Typography
                  variant="body"
                  sx={{ color: "#364152", fontSize: "14px" }}
                >
                  Last week{" "}
                  <span style={{ color: "rgb(103, 58, 183)" }}>users</span>
                </Typography>
              </Stack>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6} lg={3}>
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
                <AccountBalanceWalletTwoTone
                  sx={{
                    color: "rgb(255,255,255)",
                    height: "32px",
                    width: "32px",
                  }}
                />
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
                <Typography
                  variant="body"
                  sx={{ color: "#364152", fontSize: "14px" }}
                >
                  Total{" "}
                  <span style={{ color: "rgb(30, 136, 229)" }}>earning</span>
                </Typography>
              </Stack>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6} lg={3}>
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
                <EmojiEmotionsTwoTone
                  sx={{
                    color: "rgb(255,255,255)",
                    height: "32px",
                    width: "32px",
                  }}
                />
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
                <Typography
                  variant="body"
                  sx={{ color: "#364152", fontSize: "14px" }}
                >
                  Today{" "}
                  <span style={{ color: "rgb(0, 200, 83)" }}>visitors</span>
                </Typography>
              </Stack>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6} lg={3}>
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
                <ShoppingCartTwoTone
                  sx={{
                    color: "rgb(255,255,255)",
                    height: "32px",
                    width: "32px",
                  }}
                />
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
                <Typography
                  variant="body"
                  sx={{ color: "#364152", fontSize: "14px" }}
                >
                  New <span style={{ color: "rgb(244, 67, 54)" }}>order</span>
                </Typography>
              </Stack>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6} lg={3}>
        <Paper>
          <CardContent>
            <Grid container alignItems="center" direction={"column"}>
              <Grid item>
                <Typography variant="h6" sx={{ fontSize: "14px" }}>
                  Total Paid Users
                </Typography>
              </Grid>
              <Grid item>
                <Stack direction={"row"} sx={{ mt: "14px", mb: "14px" }}>
                  <Typography variant="h5" sx={{ textAlign: "center" }}>
                    <ArrowDownward sx={{ color: "rgb(244, 67, 54)" }} />
                  </Typography>
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
                </Stack>
              </Grid>
              <Grid item>
                <Typography
                  variant="body"
                  sx={{ color: "#364152", fontSize: "14px" }}
                >
                  8% less Last 3 Months
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6} lg={3}>
        <Paper>
          <CardContent>
            <Grid container alignItems="center" direction={"column"}>
              <Grid item>
                <Typography variant="h6" sx={{ fontSize: "14px" }}>
                  Order Status
                </Typography>
              </Grid>
              <Grid item>
                <Stack direction={"row"} sx={{ mt: "14px", mb: "14px" }}>
                  <Typography variant="h5" sx={{ textAlign: "center" }}>
                    <ArrowUpward sx={{ color: "rgb(0, 200, 83)" }} />
                  </Typography>
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
                </Stack>
              </Grid>
              <Grid item>
                <Typography
                  variant="body"
                  sx={{ color: "#364152", fontSize: "14px" }}
                >
                  8% From Last 3 Months
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6} lg={3}>
        <Paper>
          <CardContent>
            <Grid container alignItems="center" direction={"column"}>
              <Grid item>
                <Typography variant="h6" sx={{ fontSize: "14px" }}>
                  Unique Visitors
                </Typography>
              </Grid>
              <Grid item>
                <Stack direction={"row"} sx={{ mt: "14px", mb: "14px" }}>
                  <Typography variant="h5" sx={{ textAlign: "center" }}>
                    <ArrowDownward sx={{ color: "rgb(244, 67, 54)" }} />
                  </Typography>
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
                </Stack>
              </Grid>
              <Grid item>
                <Typography
                  variant="body"
                  sx={{ color: "#364152", fontSize: "14px" }}
                >
                  10% From Last 6 Months
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6} lg={3}>
        <Paper>
          <CardContent>
            <Grid container alignItems="center" direction={"column"}>
              <Grid item>
                <Typography variant="h6" sx={{ fontSize: "14px" }}>
                  Monthly Earnings
                </Typography>
              </Grid>
              <Grid item>
                <Stack direction={"row"} sx={{ mt: "14px", mb: "14px" }}>
                  <Typography variant="h5" sx={{ textAlign: "center" }}>
                    <ArrowUpward sx={{ color: "rgb(0, 200, 83)" }} />
                  </Typography>
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
                </Stack>
              </Grid>
              <Grid item>
                <Typography
                  variant="body"
                  sx={{ color: "#364152", fontSize: "14px" }}
                >
                  36% From last 3 Months
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6} lg={3}>
        <Facebookcard />
      </Grid>
      <Grid item xs={12} sm={6} lg={3}>
        <Twittercard />
      </Grid>
      <Grid item xs={12} sm={6} lg={3}>
        <Youtubecard />
      </Grid>
      <Grid item xs={12} sm={6} lg={3}>
        <Linkdencard />
      </Grid>
      <Grid item xs={12} sm={6} lg={4}>
        <Paper>
          <CardContent>
            <Grid container alignItems="center" justifyContent="space-between">
              <Grid item>
                <Typography variant="h6" sx={{ fontSize: "14px" }}>
                  Imperessions
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
                  1,563
                </Typography>
                <Typography
                  variant="body"
                  sx={{ color: "#364152", fontSize: "12px", mt: "8px" }}
                >
                  May 23 - June 01 (2018)
                </Typography>
              </Grid>
              <Grid item>
                <Button
                  sx={{
                    textAlign: "center",
                    borderRadius: "50%",
                    backgroundColor: "rgb(227, 242, 253)",
                    height: "48px",
                    width: "48px",
                    minWidth: "48px",
                    "&:hover": {
                      backgroundColor: "rgb(227, 242, 253)",
                    },
                  }}
                >
                  <RemoveRedEyeTwoTone sx={{ color: "rgb(33, 150, 243)" }} />
                </Button>
              </Grid>
            </Grid>
          </CardContent>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6} lg={4}>
        <Paper>
          <CardContent>
            <Grid container alignItems="center" justifyContent="space-between">
              <Grid item>
                <Typography variant="h6" sx={{ fontSize: "14px" }}>
                  Goal
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
                  30,564
                </Typography>
                <Typography
                  variant="body"
                  sx={{ color: "#364152", fontSize: "12px", mt: "8px" }}
                >
                  May 28 - June 01 (2018)
                </Typography>
              </Grid>
              <Grid item>
                <Button
                  sx={{
                    textAlign: "center",
                    borderRadius: "50%",
                    backgroundColor: "rgb(185, 246, 202)",
                    height: "48px",
                    width: "48px",
                    minWidth: "48px",
                    "&:hover": {
                      backgroundColor: "rgb(185, 246, 202)",
                    },
                  }}
                >
                  <RadioButtonCheckedTwoTone
                    sx={{ color: "rgb(0, 200, 83)" }}
                  />
                </Button>
              </Grid>
            </Grid>
          </CardContent>
        </Paper>
      </Grid>
      <Grid item  xs={12} lg={4}>
        <Paper>
          <CardContent>
            <Grid container alignItems="center" justifyContent="space-between">
              <Grid item>
                <Typography variant="h6" sx={{ fontSize: "14px" }}>
                  Impact
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
                  42.6%
                </Typography>
                <Typography
                  variant="body"
                  sx={{ color: "#364152", fontSize: "12px", mt: "8px" }}
                >
                  May 30 - June 01 (2018)
                </Typography>
              </Grid>
              <Grid item>
                <Button
                  sx={{
                    textAlign: "center",
                    borderRadius: "50%",
                    backgroundColor: "rgb(255, 248, 225)",
                    height: "48px",
                    width: "48px",
                    minWidth: "48px",
                    "&:hover": {
                      backgroundColor: "rgb(255, 248, 225)",
                    },
                  }}
                >
                  <PanToolTwoTone sx={{ color: "rgb(255, 193, 7)" }} />
                </Button>
              </Grid>
            </Grid>
          </CardContent>
        </Paper>
      </Grid>
      <Grid item xs={12} >
        <Paper sx={{ padding: "16px" }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6} lg={3}>
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
            <Grid item xs={12} md={6} lg={3}>
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
            <Grid item xs={12} md={6} lg={3}>
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

            <Grid item xs={12} md={6} lg={3}>
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
      <Grid item xs={12} sm={6} lg={4}>
        <Dailyusers />
      </Grid>
      <Grid item xs={12} sm={6} lg={4}>
        <Dailypageview />
      </Grid>
      <Grid item xs={12} lg={4}>
        <LastmonthVisitors/>
      </Grid>
      <Grid item xs={12} lg={4}>
        <CustomerSatisfaction/>
      </Grid>
      <Grid item xs={12} sm={6} lg={4}>
      <DashboardBoxes/>
      </Grid>
      <Grid item xs={12}  lg={4}>
      <Weatherbox/>
      </Grid>
    </Grid>
    </Grid>
    </Grid>
  );
};

export default Statistics;
