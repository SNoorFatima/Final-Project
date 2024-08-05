import React from 'react';
import { Grid, Card, CardHeader, Divider, Paper, Pagination, PaginationItem, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import muilogo from "../../Utilities/Assets/logoMUI.png";
const BasicPagination = () => (
  <Card>
    <CardHeader title="Basic Pagination" titleTypographyProps={{ fontSize: "14px" }} />
    <Divider />
    <Paper sx={{ p: 2, textAlign: 'center' }}>
      <Pagination count={10} page={2} />
      <Pagination count={10} page={8} color="primary" />
    </Paper>
  </Card>
);

const OutlinePagination = () => (
  <Card>
    <CardHeader title="Outline Pagination" titleTypographyProps={{ fontSize: "14px" }} />
    <Divider />
    <Paper sx={{ p: 2, textAlign: 'center' }}>
      <Pagination count={10} variant="outlined" />
      <Pagination count={10} variant="outlined" color="primary" />
    </Paper>
  </Card>
);

const RoundedPagination = () => (
  <Card>
    <CardHeader title="Rounded Pagination" titleTypographyProps={{ fontSize: "14px" }} />
    <Divider />
    <Paper sx={{ p: 2, textAlign: 'center' }}>
      <Pagination count={10} shape="rounded" />
      <Pagination count={10} shape="rounded" color="primary" />
    </Paper>
  </Card>
);

const PaginationSize = () => (
  <Card>
    <CardHeader title="Pagination Size" titleTypographyProps={{ fontSize: "14px" }} />
    <Divider />
    <Paper sx={{ p: 2, textAlign: 'center' }}>
      <Pagination count={10} size="small" />
      <Pagination count={10} size="large" />
    </Paper>
  </Card>
);

const PaginationRanges = () => (
  <Card>
    <CardHeader title="Pagination Ranges" titleTypographyProps={{ fontSize: "14px" }} />
    <Divider />
    <Paper sx={{ p: 2, textAlign: 'center' }}>
      <Pagination count={11} defaultPage={6} siblingCount={1} boundaryCount={2} />
      <Pagination count={11} defaultPage={6} siblingCount={0} />
    </Paper>
  </Card>
);

const PaginationButtons = () => (
  <Card>
    <CardHeader title="Pagination Buttons" titleTypographyProps={{ fontSize: "14px" }} />
    <Divider />
    <Paper sx={{ p: 2, textAlign: 'center' }}>
      <Pagination count={10} renderItem={(item) => <PaginationItem {...item} />} />
      <Pagination count={10} showFirstButton showLastButton />
    </Paper>
  </Card>
);

const PaginationPlayground = () => {
  return (
    <Paper sx={{p:3}}>
         <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography variant="h5">Pagination</Typography>
        <a href="https://mui.com/material-ui/react-pagination/" target="_blank" rel="noopener noreferrer">
          <img src={muilogo} alt="MUI Logo" style={{ height: 40 }} />
        </a>
      </Stack>
      <Divider sx={{mb:2}}/>
    <Grid container spacing={3}>
      <Grid item xs={12} md={6}>
        <BasicPagination />
      </Grid>
      <Grid item xs={12} md={6}>
        <OutlinePagination />
      </Grid>
      <Grid item xs={12} md={6}>
        <RoundedPagination />
      </Grid>
      <Grid item xs={12} md={6}>
        <PaginationSize />
      </Grid>
      <Grid item xs={12} md={6}>
        <PaginationRanges />
      </Grid>
      <Grid item xs={12} md={6}>
        <PaginationButtons />
      </Grid>
    </Grid>
    </Paper>
  );
};

export default PaginationPlayground;
