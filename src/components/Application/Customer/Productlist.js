import React, { useState } from 'react';
import {
  Box, Chip, Grid, IconButton, InputBase, Menu, MenuItem, Paper, Typography, TablePagination,
  Table, TableBody, TableCell, TableHead, TableRow, CardHeader, Divider, Checkbox, Toolbar, Tooltip
} from '@mui/material';
import { styled } from '@mui/system';
import SearchTwoTone from '@mui/icons-material/SearchTwoTone';
import DeleteIcon from '@mui/icons-material/Delete';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { Edit, Delete } from '@mui/icons-material';

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

const getProductStatusChipStyles = (status) => {
  switch (status) {
    case "In Stock":
      return { backgroundColor: "rgba(76, 175, 80, 0.2)", color: "green" };
    case "Out of Stock":
      return { backgroundColor: "rgba(244, 67, 54, 0.2)", color: "red" };
    default:
      return { backgroundColor: "grey", color: "white" };
  }
};

const ProductRow = ({ product, isSelected, handleSelect }) => {
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
        <Checkbox checked={isSelected} onChange={() => handleSelect(product.id)} />
      </TableCell>
      <TableCell>{product.id}</TableCell>
      <TableCell>{product.productName}</TableCell>
      <TableCell>{product.category}</TableCell>
      <TableCell>{product.price}</TableCell>
      <TableCell>{product.date}</TableCell>
      <TableCell>{product.qty}</TableCell>
      <TableCell>
        <Chip label={product.status} sx={getProductStatusChipStyles(product.status)} />
      </TableCell>
      <TableCell>
        <IconButton>
          <Edit sx={{ color: "rgb(33, 150, 243)" }} />
        </IconButton>
        <IconButton>
          <Delete sx={{ color: "rgb(216, 67, 21)", borderColor: "rgb(255, 171, 145)" }} />
        </IconButton>
      </TableCell>
    </TableRow>
  );
};

const ProductList = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(4);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });

  const handleSelect = (productId) => {
    setSelectedProducts((prevSelected) =>
      prevSelected.includes(productId)
        ? prevSelected.filter((id) => id !== productId)
        : [...prevSelected, productId]
    );
  };

  const handleSelectAll = (event) => {
    if (event.target.checked) {
      setSelectedProducts(productsData.map((product) => product.id));
    } else {
      setSelectedProducts([]);
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

  const sortedProducts = [...productsData].sort((a, b) => {
    if (a[sortConfig.key] < b[sortConfig.key]) {
      return sortConfig.direction === 'asc' ? -1 : 1;
    }
    if (a[sortConfig.key] > b[sortConfig.key]) {
      return sortConfig.direction === 'asc' ? 1 : -1;
    }
    return 0;
  });

  const filteredProducts = sortedProducts.filter((product) =>
    product.productName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const paginatedProducts = filteredProducts.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  return (
    <Grid container spacing={3} mt={2}>
      <Grid item xs={12}>
        <Box>
          <Paper>
            <CardHeader
              title={selectedProducts.length > 0 ? `${selectedProducts.length} selected` : "Products"}
              action={
                selectedProducts.length > 0 ? (
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
                      indeterminate={selectedProducts.length > 0 && selectedProducts.length < productsData.length}
                      checked={productsData.length > 0 && selectedProducts.length === productsData.length}
                      onChange={handleSelectAll}
                    />
                  </TableCell>
                  {['id', 'productName', 'category', 'price', 'date', 'qty'].map((key) => (
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
                  <TableCell>Status</TableCell> 
                  <TableCell>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {paginatedProducts.map((product, index) => (
                  <ProductRow
                    key={index}
                    product={product}
                    isSelected={selectedProducts.includes(product.id)}
                    handleSelect={handleSelect}
                  />
                ))}
              </TableBody>
            </Table>
            <TablePagination
              rowsPerPageOptions={[4, 8, 12]}
              component="div"
              count={filteredProducts.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </Paper>
        </Box>
      </Grid>
    </Grid>
  );
};

const productsData = [
  {
    id: 'P001',
    productName: 'Laptop',
    category: 'Electronics',
    price: '$1000',
    date: '2023-01-01',
    qty: 10,
    status: 'In Stock',
  },
  {
    id: 'P002',
    productName: 'Headphones',
    category: 'Electronics',
    price: '$100',
    date: '2023-02-15',
    qty: 50,
    status: 'In Stock',
  },
  {
    id: 'P003',
    productName: 'Shoes',
    category: 'Fashion',
    price: '$50',
    date: '2023-03-10',
    qty: 30,
    status: 'Out of Stock',
  },
  {
    id: 'P004',
    productName: 'Watch',
    category: 'Accessories',
    price: '$200',
    date: '2023-04-25',
    qty: 15,
    status: 'In Stock',
  },
  {
    id: 'P005',
    productName: 'Smartphone',
    category: 'Electronics',
    price: '$800',
    date: '2023-05-07',
    qty: 25,
    status: 'In Stock',
  },
  {
    id: 'P006',
    productName: 'Bag',
    category: 'Fashion',
    price: '$60',
    date: '2023-06-19',
    qty: 20,
    status: 'Out of Stock',
  },
  {
    id: 'P007',
    productName: 'Glasses',
    category: 'Accessories',
    price: '$40',
    date: '2023-07-21',
    qty: 10,
    status: 'In Stock',
  },
  {
    id: 'P008',
    productName: 'Camera',
    category: 'Electronics',
    price: '$500',
    date: '2023-08-11',
    qty: 12,
    status: 'In Stock',
  },
  {
    id: 'P009',
    productName: 'Jacket',
    category: 'Fashion',
    price: '$100',
    date: '2023-09-30',
    qty: 18,
    status: 'Out of Stock',
  },
  {
    id: 'P010',
    productName: 'Book',
    category: 'Education',
    price: '$20',
    date: '2023-10-15',
    qty: 100,
    status: 'In Stock',
  },
];

export default ProductList;
