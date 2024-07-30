import React from "react";
import { Card, CardHeader, CardContent, Typography, Divider, Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Chip } from "@mui/material";

const tickets = [
  { subject: "Website down for one week", department: "Support", date: "Today 2:00", status: "Open" },
  { subject: "Loosing control on server", department: "Support", date: "Yesterday", status: "Progress" },
  { subject: "Authorizations keys", department: "Support", date: "27, Aug", status: "Closed" },
  { subject: "Restoring default settings", department: "Support", date: "Today 9:00", status: "Open" },
  { subject: "Loosing control on server", department: "Support", date: "Yesterday", status: "Progress" },
  { subject: "Authorizations keys", department: "Support", date: "27, Aug", status: "Closed" },
  { subject: "Restoring default settings", department: "Support", date: "Today 9:00", status: "Open" },
  { subject: "Authorizations keys", department: "Support", date: "27, Aug", status: "Closed" }
];

const getStatusChip = (status) => {
  const chipStyles = {
    Open: { color: "#00E676", borderColor: "#00E676" },
    Progress: { color: "#2196F3", borderColor: "#2196F3" },
    Closed: { color: "#F44336", borderColor: "#F44336" },
    Unknown: { color: "#000000", borderColor: "#000000" }
  };

  const style = chipStyles[status] || chipStyles["Unknown"];

  return (
    <Chip
      label={status}
      size="small"
      variant="outlined"
      sx={{
        color: style.color,
        borderColor: style.borderColor,
        backgroundColor: "transparent"
      }}
    />
  );
};

const RecentTickets = () => {
  return (
    <Card>
      <CardHeader title="Recent Tickets" titleTypographyProps={{ fontSize: "18px" }} />
      <Divider />
      <CardContent sx={{ padding: "0px" }}>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Subject</TableCell>
                <TableCell>Department</TableCell>
                <TableCell>Date</TableCell>
                <TableCell>Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tickets.map((ticket, index) => (
                <TableRow key={index}>
                  <TableCell>{ticket.subject}</TableCell>
                  <TableCell>{ticket.department}</TableCell>
                  <TableCell>{ticket.date}</TableCell>
                  <TableCell>{getStatusChip(ticket.status)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Divider />
        <Box sx={{ textAlign: "right", p: "24px" }}>
          <Typography
            variant="body2"
            color="rgb(33, 150, 243)"
            fontSize="13px"
            sx={{ cursor: "pointer" }}
            onClick={() => console.log("View All Projects clicked")}
          >
            View All Tickets
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default RecentTickets;
