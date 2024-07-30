import React from 'react';
import { Paper, CardHeader, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Grid } from '@mui/material';

// Import images
import GermanyFlag from './Assets/Flags/Germany.jpeg';
import USAFlag from './Assets/Flags/USA.jpeg';
import AustraliaFlag from './Assets/Flags/Australia.jpeg';
import UKFlag from './Assets/Flags/UK.jpeg';
import BrazilFlag from './Assets/Flags/Brazail.jpeg';

const LatestCustomers = () => {
  const data = [
    { country: "Germany", flag: GermanyFlag, name: "Angelina Jolly", average: "56.23%" },
    { country: "USA", flag: USAFlag, name: "John Deo", average: "25.23%" },
    { country: "Australia", flag: AustraliaFlag, name: "Jenifer Vintage", average: "12.45%" },
    { country: "United Kingdom", flag: UKFlag, name: "Lori Moore", average: "8.65%" },
    { country: "Brazil", flag: BrazilFlag, name: "Allianz Dacron", average: "3.56%" },
    { country: "Australia", flag: AustraliaFlag, name: "Jenifer Vintage", average: "12.45%" },
    { country: "USA", flag: USAFlag, name: "John Deo", average: "25.23%" },
    { country: "Australia", flag: AustraliaFlag, name: "Jenifer Vintage", average: "12.45%" },
    { country: "United Kingdom", flag: UKFlag, name: "Lori Moore", average: "8.65%" }
  ];

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Paper elevation={3}>
          <CardHeader title="Latest Customers" />
          <TableContainer sx={{ maxHeight: 400 }}>
            <Table stickyHeader>
              <TableHead>
                <TableRow>
                  <TableCell>#</TableCell>
                  <TableCell>Country</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Average</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell>
                      <img src={row.flag} alt={row.country} style={{ width: '30px', marginRight: '10px' }} />
                    </TableCell>
                    <TableCell> {row.country}</TableCell>
                    <TableCell>{row.name}</TableCell>
                    <TableCell>{row.average}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default LatestCustomers;
