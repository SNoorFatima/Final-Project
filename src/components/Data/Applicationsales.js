import React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  Divider,
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from "@mui/material";

const sales = [
  {
    application: "Materially",
    description: "Powerful Admin Theme",
    sales: 16300,
    avgPrice: 53,
    total: 15652,
  },
  {
    application: "Photoshop",
    description: "Design Software",
    sales: 26421,
    avgPrice: 35,
    total: 8785,
  },
  {
    application: "Gurubale",
    description: "Best Admin Template",
    sales: 8265,
    avgPrice: 98,
    total: 9652,
  },
  {
    application: "Flatable",
    description: "Admin App",
    sales: 10652,
    avgPrice: 20,
    total: 7856,
  },
];

const ApplicationSales = () => {
  return (
    <Card>
      <CardHeader title="Application Sales" titleTypographyProps={"18px"} />
      <Divider />
      <CardContent sx={{ padding: "0px" }}>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Application</TableCell>
                <TableCell>Sales</TableCell>
                <TableCell>Avg. Price</TableCell>
                <TableCell>Total</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {sales.map((sale, index) => (
                <TableRow key={index}>
                  <TableCell>
                    <Box>
                      <Typography variant="subtitle2">
                        {sale.application}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        fontSize={"12px"}
                      >
                        {sale.description}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>{sale.sales.toLocaleString()}</TableCell>
                  <TableCell>${sale.avgPrice.toFixed(2)}</TableCell>
                  <TableCell>${sale.total.toLocaleString()}</TableCell>
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
            View All Tasks
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ApplicationSales;
