import React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  CardMedia,
  IconButton,
  Box,
  Chip,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import phone1 from "./Assets/phone1.jpeg";
import phone2 from "./Assets/phone2.jpeg";
import phone3 from "./Assets/phone3.jpeg";
import phone4 from "./Assets/phone4.jpeg";

const orders = [
  {
    customer: "John Deo",
    orderId: "#81412314",
    photo: phone1,
    product: "Moto G5",
    total: 10,
    date: "17-2-2017",
    status: "Pending",
  },
  {
    customer: "Jenny William",
    orderId: "#68457898",
    photo: phone2,
    product: "iPhone 8",
    total: 16,
    date: "20-2-2017",
    status: "Paid",
  },
  {
    customer: "Lori Moore",
    orderId: "#45457898",
    photo: phone3,
    product: "Redmi 4",
    total: 20,
    date: "17-2-2017",
    status: "Success",
  },
  {
    customer: "Austin Pena",
    orderId: "#62446232",
    photo: phone4,
    product: "Jio",
    total: 15,
    date: "25-4-2017",
    status: "Failed",
  },
];

const getStatusChipStyles = (status) => {
  switch (status) {
    case "Pending":
      return { backgroundColor: "rgba(255, 193, 7, 0.2)", color: "orange" };
    case "Paid":
      return { backgroundColor: "rgba(33, 150, 243, 0.2)", color: "blue" };
    case "Success":
      return { backgroundColor: "rgba(76, 175, 80, 0.2)", color: "green" };
    case "Failed":
      return { backgroundColor: "rgba(244, 67, 54, 0.2)", color: "red" };
    default:
      return { backgroundColor: "grey", color: "white" };
  }
};

const LatestOrder = () => {
  return (
    <Card>
      <CardHeader title="Latest Order" titleTypographyProps={{fontSize:"18px"}}/>
      <Divider />
      <CardContent sx={{ padding: "0px!important" }}>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Customer</TableCell>
                <TableCell>Order Id</TableCell>
                <TableCell>Photo</TableCell>
                <TableCell>Product</TableCell>
                <TableCell>Total</TableCell>
                <TableCell>Date</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {orders.map((order, index) => (
                <TableRow key={index}>
                  <TableCell>{order.customer}</TableCell>
                  <TableCell>{order.orderId}</TableCell>
                  <TableCell>
                    <CardMedia
                      component="img"
                      image={order.photo}
                      alt={order.product}
                      sx={{ width: 50, height: 50, objectFit: "contain" }} // Adjust styling as needed
                    />
                  </TableCell>
                  <TableCell>{order.product}</TableCell>
                  <TableCell>{order.total}</TableCell>
                  <TableCell>{order.date}</TableCell>
                  <TableCell>
                    <Chip
                      label={order.status}
                      sx={{
                        ...getStatusChipStyles(order.status),
                      }}
                    />
                  </TableCell>
                  <TableCell>
                    <IconButton aria-label="edit">
                      <EditIcon />
                    </IconButton>
                    <IconButton aria-label="delete">
                      <DeleteIcon />
                    </IconButton>
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
            View All Orders
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default LatestOrder;
