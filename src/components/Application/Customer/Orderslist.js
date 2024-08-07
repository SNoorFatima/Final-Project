import React, { useState } from 'react';
import {
  Box, Chip, Grid, IconButton, InputBase, Menu, MenuItem, Paper, Typography, TablePagination,
  Table, TableBody, TableCell, TableHead, TableRow, CardHeader, Divider, Checkbox, Toolbar, Tooltip,
  Breadcrumbs
} from '@mui/material';
import { styled } from '@mui/system';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchTwoTone from '@mui/icons-material/SearchTwoTone';
import DeleteIcon from '@mui/icons-material/Delete';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { Block, ChatBubbleOutline, EditTwoTone, Home, Visibility } from '@mui/icons-material';
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

const CustomerRow = ({ order, isSelected, handleSelect }) => {
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
        <Checkbox checked={isSelected} onChange={() => handleSelect(order.id)} />
      </TableCell>
      <TableCell>{order.id}</TableCell>
      <TableCell>{order.customerName}</TableCell>
      <TableCell>{order.branch}</TableCell>
      <TableCell>{order.paymentType}</TableCell>
      <TableCell>{order.quantity}</TableCell>
      <TableCell>{order.registered}</TableCell>
      <TableCell>
        <Chip label={order.status} sx={getStatusChipStyles(order.status)} />
      </TableCell>
      <TableCell>
        <IconButton>
          <Visibility sx={{ color: "rgb(33, 150, 243)" }} />
        </IconButton>
        <IconButton>
          <EditTwoTone sx={{ color: "rgb(103, 58, 183)", borderColor: "rgb(103, 58, 183)" }} />
        </IconButton>
      </TableCell>
    </TableRow>
  );
};

const OrdersList = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(4);
  const [selectedOrders, setSelectedOrders] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });

  const handleSelect = (orderId) => {
    setSelectedOrders((prevSelected) =>
      prevSelected.includes(orderId)
        ? prevSelected.filter((id) => id !== orderId)
        : [...prevSelected, orderId]
    );
  };

  const handleSelectAll = (event) => {
    if (event.target.checked) {
      setSelectedOrders(ordersData.map((order) => order.id));
    } else {
      setSelectedOrders([]);
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

  const sortedOrders = [...ordersData].sort((a, b) => {
    if (a[sortConfig.key] < b[sortConfig.key]) {
      return sortConfig.direction === 'asc' ? -1 : 1;
    }
    if (a[sortConfig.key] > b[sortConfig.key]) {
      return sortConfig.direction === 'asc' ? 1 : -1;
    }
    return 0;
  });

  const filteredOrders = sortedOrders.filter((order) =>
    order.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    order.branch.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const paginatedOrders = filteredOrders.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  return (
    <Grid container spacing={2}>
    <Grid item xs={12}>
 <>
   <Paper >
     <Grid container p={2} display="flex" justifyContent={'space-between'}>
       <Grid item>
       <Typography variant="h6" sx={{ marginRight: '1rem' }}>Order List</Typography>
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
         <Typography color="rgb(105, 117, 134)">Order List</Typography>
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
              title={selectedOrders.length > 0 ? `${selectedOrders.length} selected` : "Orders"}
              action={
                selectedOrders.length > 0 ? (
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
                      indeterminate={selectedOrders.length > 0 && selectedOrders.length < ordersData.length}
                      checked={ordersData.length > 0 && selectedOrders.length === ordersData.length}
                      onChange={handleSelectAll}
                    />
                  </TableCell>
                  {['id', 'customerName', 'branch', 'paymentType', 'quantity', 'registered', 'status'].map((key) => (
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
                {paginatedOrders.map((order, index) => (
                  <CustomerRow
                    key={index}
                    order={order}
                    isSelected={selectedOrders.includes(order.id)}
                    handleSelect={handleSelect}
                  />
                ))}
              </TableBody>
            </Table>
            <TablePagination
              rowsPerPageOptions={[4, 8, 12]}
              component="div"
              count={filteredOrders.length}
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

const ordersData = [
  {
    id: '001',
    customerName: 'Phoebe',
    branch: 'North',
    paymentType: 'Credit Card',
    quantity: 10,
    registered: '2021-06-15',
    status: 'Pending',
  },
  {
    id: '002',
    customerName: 'Alice',
    branch: 'East',
    paymentType: 'Paypal',
    quantity: 5,
    registered: '2020-03-10',
    status: 'Paid',
  },
  {
    id: '003',
    customerName: 'Charlie',
    branch: 'West',
    paymentType: 'Debit Card',
    quantity: 8,
    registered: '2019-11-25',
    status: 'Success',
  },
  {
    id: '004',
    customerName: 'Dana',
    branch: 'South',
    paymentType: 'Credit Card',
    quantity: 12,
    registered: '2022-01-14',
    status: 'Failed',
  },
  {
    id: '005',
    customerName: 'Eve',
    branch: 'North',
    paymentType: 'Paypal',
    quantity: 7,
    registered: '2021-09-07',
    status: 'Pending',
  },
  {
    id: '006',
    customerName: 'Frank',
    branch: 'East',
    paymentType: 'Debit Card',
    quantity: 15,
    registered: '2018-08-19',
    status: 'Paid',
  },
  {
    id: '007',
    customerName: 'Gina',
    branch: 'West',
    paymentType: 'Credit Card',
    quantity: 4,
    registered: '2021-04-21',
    status: 'Success',
  },
  {
    id: '008',
    customerName: 'Hank',
    branch: 'South',
    paymentType: 'Paypal',
    quantity: 9,
    registered: '2019-05-30',
    status: 'Failed',
  },
  {
    id: '009',
    customerName: 'Ivy',
    branch: 'North',
    paymentType: 'Debit Card',
    quantity: 11,
    registered: '2022-02-10',
    status: 'Pending',
  },
  {
    id: '010',
    customerName: 'Jack',
    branch: 'East',
    paymentType: 'Credit Card',
    quantity: 6,
    registered: '2020-12-03',
    status: 'Paid',
  }
];

export default OrdersList;
