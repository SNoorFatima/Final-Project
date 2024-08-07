import React, { useState } from 'react';
import {
  Avatar, Box, Chip, Grid, IconButton, InputBase, Menu, MenuItem, Paper, Typography, TablePagination,
  Table, TableBody, TableCell, TableHead, TableRow, CardHeader, Divider, Checkbox, Toolbar, Tooltip,
  Breadcrumbs
} from '@mui/material';
import { styled } from '@mui/system';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchTwoTone from '@mui/icons-material/SearchTwoTone';
import DeleteIcon from '@mui/icons-material/Delete';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { Block, ChatBubbleOutline, Home } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "rgb(248, 250, 252)",
  border: "1px solid black",
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

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

const CustomerRow = ({ customer, isSelected, handleSelect }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <TableRow>
      <TableCell padding="checkbox">
        <Checkbox checked={isSelected} onChange={() => handleSelect(customer.name)} />
      </TableCell>
      <TableCell>
        <Box display="flex" alignItems="center">
         
          <Box>
            <Typography variant="body1">{customer.name}</Typography>
            <Typography variant="body2" color="textSecondary">{customer.email}</Typography>
          </Box>
        </Box>
      </TableCell>
      <TableCell>{customer.location}</TableCell>
      <TableCell>{customer.orders}</TableCell>
      <TableCell>{customer.registered}</TableCell>
      <TableCell>
        <Chip label={customer.status} sx={getStatusChipStyles(customer.status)} />
      </TableCell>
      <TableCell>
      <IconButton>
          <ChatBubbleOutline  sx={{color:"rgb(33, 150, 243)"}}/>
        </IconButton>
        <IconButton>
          <Block sx={{color:"rgb(216, 67, 21)",borderColor: "rgb(255, 171, 145)"}} />
        </IconButton>
      </TableCell>
    </TableRow>
  );
};

const CustomersList = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(4);
  const [selectedCustomers, setSelectedCustomers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });

  const handleSelect = (customerName) => {
    setSelectedCustomers((prevSelected) =>
      prevSelected.includes(customerName)
        ? prevSelected.filter((name) => name !== customerName)
        : [...prevSelected, customerName]
    );
  };

  const handleSelectAll = (event) => {
    if (event.target.checked) {
      setSelectedCustomers(customersData.map((customer) => customer.name));
    } else {
      setSelectedCustomers([]);
    }
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  const sortedCustomers = [...customersData].sort((a, b) => {
    if (a[sortConfig.key] < b[sortConfig.key]) {
      return sortConfig.direction === 'asc' ? -1 : 1;
    }
    if (a[sortConfig.key] > b[sortConfig.key]) {
      return sortConfig.direction === 'asc' ? 1 : -1;
    }
    return 0;
  });

  const filteredCustomers = sortedCustomers.filter((customer) =>
    customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    customer.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const paginatedCustomers = filteredCustomers.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  return (
    <Grid container spacing={2}>
    <Grid item xs={12}>
 <>
   <Paper >
     <Grid container p={2} display="flex" justifyContent={'space-between'}>
       <Grid item>
       <Typography variant="h6" sx={{ marginRight: '1rem' }}>Customer List</Typography>
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
         <Typography color="rgb(105, 117, 134)">Customers</Typography>
         <Typography color="rgb(105, 117, 134)">Customer List</Typography>
       </Breadcrumbs>
       </Grid>
     </Grid>
   </Paper>
 </>
 </Grid>
 <Grid item xs={12}>
    <Grid container spacing={3} mt={2}>
      <Grid item xs={12}>
        <Box>
          <Paper>
            <CardHeader
              title={selectedCustomers.length > 0 ? `${selectedCustomers.length} selected` : "Customers"}
              action={
                selectedCustomers.length > 0 ? (
                  <Tooltip title="Delete">
                    <IconButton>
                      <DeleteIcon />
                    </IconButton>
                  </Tooltip>
                ) : (
                  <Search>
                    <SearchIconWrapper>
                      <SearchTwoTone />
                    </SearchIconWrapper>
                    <StyledInputBase
                      placeholder="Search…"
                      inputProps={{ 'aria-label': 'search' }}
                      value={searchTerm}
                      onChange={handleSearchChange}
                    />
                  </Search>
                )
              }
            />
            <Divider />
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell padding="checkbox">
                    <Checkbox
                      indeterminate={selectedCustomers.length > 0 && selectedCustomers.length < customersData.length}
                      checked={customersData.length > 0 && selectedCustomers.length === customersData.length}
                      onChange={handleSelectAll}
                    />
                  </TableCell>
                  {['name', 'location', 'orders', 'registered', 'status'].map((key) => (
                    <TableCell key={key} onClick={() => handleSort(key)} sx={{ cursor: 'pointer', color: 'rgb(54, 65, 82)' }}>
                      {key.charAt(0).toUpperCase() + key.slice(1)}
                      {sortConfig.key === key ? (
                        sortConfig.direction === 'asc' ? (
                          <ArrowUpwardIcon style={{ marginLeft: 4, color: 'rgb(54, 65, 82)' }} />
                        ) : (
                          <ArrowDownwardIcon style={{ marginLeft: 4, color: 'rgb(54, 65, 82)' }} />
                        )
                      ) : null}
                    </TableCell>
                  ))}
                  <TableCell>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {paginatedCustomers.map((customer, index) => (
                  <CustomerRow
                    key={index}
                    customer={customer}
                    isSelected={selectedCustomers.includes(customer.name)}
                    handleSelect={handleSelect}
                  />
                ))}
              </TableBody>
            </Table>
            <TablePagination
              rowsPerPageOptions={[4, 8, 12]}
              component="div"
              count={filteredCustomers.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </Paper>
        </Box>
      </Grid>
    </Grid>
    </Grid>
    </Grid>
  );
};

const customersData = [
  {
    name: 'Phoebe',
    email: 'phoebe@example.com',
    location: 'Port Narcos',
    orders: 10,
    registered: '2021-06-15',
    status: 'Pending',
  },
  {
    name: 'Alice',
    email: 'alice@example.com',
    location: 'Springfield',
    orders: 5,
    registered: '2020-03-10',
    status: 'Paid',
  },
  {
    name: 'Charlie',
    email: 'charlie@example.com',
    location: 'Riverdale',
    orders: 8,
    registered: '2019-11-25',
    status: 'Success',
  },
  {
    name: 'Dana',
    email: 'dana@example.com',
    location: 'Hill Valley',
    orders: 12,
    registered: '2022-01-14',
    status: 'Failed',
  },
  {
    name: 'Eve',
    email: 'eve@example.com',
    location: 'Gotham',
    orders: 7,
    registered: '2021-09-07',
    status: 'Pending',
  },
  {
    name: 'Frank',
    email: 'frank@example.com',
    location: 'Metropolis',
    orders: 15,
    registered: '2018-08-19',
    status: 'Paid',
  },
  {
    name: 'Gina',
    email: 'gina@example.com',
    location: 'Star City',
    orders: 4,
    registered: '2021-04-21',
    status: 'Success',
  },
  {
    name: 'Hank',
    email: 'hank@example.com',
    location: 'Central City',
    orders: 9,
    registered: '2019-05-30',
    status: 'Failed',
  },
  {
    name: 'Ivy',
    email: 'ivy@example.com',
    location: 'Coast City',
    orders: 11,
    registered: '2022-02-10',
    status: 'Pending',
  },
  {
    name: 'Jack',
    email: 'jack@example.com',
    location: 'Bludhaven',
    orders: 6,
    registered: '2020-12-03',
    status: 'Paid',
  }
];

export default CustomersList;
