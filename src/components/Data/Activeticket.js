import React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  Divider,
  Box,
  Avatar,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import img1 from "./Assets/avatar-1-Dja0YEDP.png";
import img2 from "./Assets/avatar-2-F9B2bxNX.png";
import img3 from "./Assets/avatar-3-DAakmaVf.png";
const tickets = [
  {
    due1: "12",
    due2: "hours",
    name: "John Deo",
    position: "[#1183] Workaround for OS X selects printing bug",
    description:
      "Chrome fixed the bug several versions ago, thus rendering this...",
    avatar: img1,
  },
  {
    due1: "16",
    due2: "hours",
    name: "Jems Win",
    position: "[#1249] Vertically center carousel controls",
    description:
      "Try any carousel control and reduce the screen width below...",
    avatar:img2,
  },
  {
    due1: "40",
    due2: "hours",
    name: "Jeny William",
    position: "[#1254] Inaccurate small pagination height",
    description: "The height of pagination elements is not consistent with...",
    avatar: img3,
  },
  {
    due1: "12",
    due2: "hours",
    name: "Jems Win",
    position: "[#1249] Vertically center carousel controls",
    description:
      "Try any carousel control and reduce the screen width below...",
    avatar: img2,
  },
];

const ActiveTickets = () => {
  return (
    <Card>
      <CardHeader
        title="Active Tickets"
        titleTypographyProps={{ fontSize: "18px" }}
      />
      <Divider />
      <CardContent>
        <TableContainer>
          <Table stickyHeader>
            <TableHead sx={{ fontSize: "14px" }}>
              <TableRow>
                <TableCell>Due</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Position</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tickets.map((ticket, index) => (
                <TableRow key={index}>
                  <TableCell>
                    <Typography
                      variant="body2"
                      color="#121926"
                      fontSize={"14px"}
                    >
                      {ticket.due1}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="rgb(105, 117, 134)"
                      fontSize={"12px"}
                    >
                      {ticket.due2}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <Avatar src={ticket.avatar} sx={{ mr: 2 }} />
                      <Typography variant="h6" fontSize={"14px"} color={'#121926'}>
                        {ticket.name}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Typography variant="body2" fontSize={"14px"}color={'#121926'}>
                      {ticket.position}
                    </Typography>
                    <Typography variant="body2" fontSize={"12px"} color={"rgb(105, 117, 134)"}>
                      {ticket.description}
                    </Typography>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Box sx={{ textAlign: "right",p:"24px"}}>
          <Typography
            variant="body2"
            color="rgb(33, 150, 243)"
            fontSize="13px"
            sx={{ cursor: "pointer" }}
            onClick={() => console.log("View All Projects clicked")}
          >
            View All Projects
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ActiveTickets;
