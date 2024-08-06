import React, { useState } from 'react';
import {
  Box, Chip, Grid, IconButton, InputBase, Paper, Typography, TablePagination,
  Table, TableBody, TableCell, TableHead, TableRow, CardHeader, Divider, Checkbox, Tooltip
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

const getStatusChipStyles = (status) => {
  switch (status) {
    case "Published":
      return { backgroundColor: "rgba(76, 175, 80, 0.2)", color: "green" };
    case "Pending":
      return { backgroundColor: "rgba(255, 235, 59, 0.2)", color: "yellow" };
    case "Removed":
      return { backgroundColor: "rgba(244, 67, 54, 0.2)", color: "red" };
    default:
      return { backgroundColor: "grey", color: "white" };
  }
};

const ProductRow = ({ product, isSelected, handleSelect }) => {
  return (
    <TableRow>
      <TableCell padding="checkbox">
        <Checkbox checked={isSelected} onChange={() => handleSelect(product.id)} />
      </TableCell>
      <TableCell>{product.productName}</TableCell>
      <TableCell>{product.author}</TableCell>
      <TableCell>{product.review}</TableCell>
      <TableCell>
        <Box display="flex">
          {Array.from({ length: 5 }, (_, index) => (
            <span key={index} style={{ color: index < product.rating ? 'gold' : 'gray' }}>★</span>
          ))}
        </Box>
      </TableCell>
      <TableCell>{product.date}</TableCell>
      <TableCell>
        <Chip label={product.status} sx={getStatusChipStyles(product.status)} />
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

const ProductReview = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

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

  const filteredProducts = productsData.filter((product) =>
    product.productName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const paginatedProducts = filteredProducts.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  return (
    <Grid container spacing={3} mt={2}>
      <Grid item xs={12}>
        <Box>
          <Paper>
            <CardHeader
              title="Product Review"
              action={
                <Search>
                  <SearchIconWrapper>
                    <SearchTwoTone />
                  </SearchIconWrapper>
                  <StyledInputBase
                    placeholder="Search Product…"
                    inputProps={{ 'aria-label': 'search' }}
                    value={searchTerm}
                    onChange={handleSearchChange}
                  />
                </Search>
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
                  <TableCell>Product Name</TableCell>
                  <TableCell>Author</TableCell>
                  <TableCell>Review</TableCell>
                  <TableCell>Rating</TableCell>
                  <TableCell>Date</TableCell>
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
              rowsPerPageOptions={[10, 25, 50]}
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
  { id: '1', productName: 'Apple Watch Series 4', author: 'Joseph William', review: 'The device is elegant and performance is great.', rating: 5, date: '12/12/2018', status: 'Published' },
  { id: '2', productName: 'Apple Xs', author: 'Jane Doe', review: 'An amazing phone with fantastic features.', rating: 4, date: '10/12/2018', status: 'Pending' },
  { id: '3', productName: 'Apple Watch Series 4', author: 'Larry Doe', review: 'Very good watch with excellent features.', rating: 5, date: '08/12/2018', status: 'Published' },
  { id: '4', productName: 'Apple Watch Series 4', author: 'Jane Doe', review: 'Highly recommend this watch.', rating: 5, date: '12/12/2018', status: 'Removed' },
  { id: '5', productName: 'Apple Xs', author: 'Jane Doe', review: 'Best phone ever used.', rating: 5, date: '12/12/2018', status: 'Published' },
  { id: '6', productName: 'Apple Watch Series 4', author: 'Larry Doe', review: 'Amazing performance.', rating: 4, date: '12/12/2018', status: 'Pending' },
  { id: '7', productName: 'Apple Xs', author: 'Jane Doe', review: 'Just awesome.', rating: 5, date: '12/12/2018', status: 'Removed' },
  { id: '8', productName: 'Apple Watch Series 4', author: 'Larry Doe', review: 'A very reliable watch.', rating: 5, date: '12/12/2018', status: 'Published' },
  { id: '9', productName: 'Apple Xs', author: 'Jane Doe', review: 'Simply the best.', rating: 5, date: '12/12/2018', status: 'Pending' },
  { id: '10', productName: 'Apple Watch Series 4', author: 'Larry Doe', review: 'Works perfectly.', rating: 4, date: '12/12/2018', status: 'Published' },
];

export default ProductReview;
