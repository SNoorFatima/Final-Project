import React, { useState } from "react";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  MenuItem,
  Paper,
  TextField,
  Typography,
  IconButton,
  Breadcrumbs
} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import { Home } from "@mui/icons-material";
import { Link } from "react-router-dom";

const Invoice = () => {
  const [invoiceNumber, setInvoiceNumber] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
  const [customerContactNumber, setCustomerContactNumber] = useState("");
  const [customerAddress, setCustomerAddress] = useState("");
  const [invoiceDate, setInvoiceDate] = useState("");
  const [status, setStatus] = useState("Pending");
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState({ productName: "", quantity: 1, amount: 0 });
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isItemFormVisible, setIsItemFormVisible] = useState(false);

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!invoiceNumber) newErrors.invoiceNumber = "Invoice Number is required";
    if (!customerName) newErrors.customerName = "Customer Name is required";
    if (!customerEmail || !customerEmail.includes("@")) {
      newErrors.customerEmail = "Valid email is required";
    }
    if (!customerContactNumber || customerContactNumber.length < 10) {
      newErrors.customerContactNumber = "Valid contact number is required";
    }
    if (!customerAddress) newErrors.customerAddress = "Customer Address is required";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleAddInvoice = () => {
    if (validateForm()) {
      setIsDialogOpen(true);
    }
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };

  const handleAddItem = () => {
    setItems([...items, newItem]);
    setNewItem({ productName: "", quantity: 1, amount: 0 });
    setIsItemFormVisible(false); // Hide the form after adding the item
  };

  const handleCancelItem = () => {
    setNewItem({ productName: "", quantity: 1, amount: 0 });
    setIsItemFormVisible(false); // Hide the form when canceling
  };

  const handleDeleteItem = (index) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  };

  return (
    <Grid container spacing={2}>
    <Grid item xs={12}>
 <>
   <Paper >
     <Grid container p={2} display="flex" justifyContent={'space-between'}>
       <Grid item>
       <Typography variant="h6" sx={{ marginRight: '1rem' }}>Invoice</Typography>
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
        
         <Typography color="rgb(105, 117, 134)">Invoice</Typography>
       </Breadcrumbs>
       </Grid>
     </Grid>
   </Paper>
 </>
 </Grid>
 <Grid item xs={12}>
    <Box p={3}>
        <Paper sx={{padding:3}}>
      <Typography variant="h4">Create Invoice</Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Invoice Number"
            value={invoiceNumber}
            onChange={(e) => setInvoiceNumber(e.target.value)}
            fullWidth
            error={!!errors.invoiceNumber}
            helperText={errors.invoiceNumber}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Customer Name"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
            fullWidth
            error={!!errors.customerName}
            helperText={errors.customerName}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Customer Email"
            value={customerEmail}
            onChange={(e) => setCustomerEmail(e.target.value)}
            fullWidth
            error={!!errors.customerEmail}
            helperText={errors.customerEmail}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Customer Contact Number"
            value={customerContactNumber}
            onChange={(e) => setCustomerContactNumber(e.target.value)}
            fullWidth
            error={!!errors.customerContactNumber}
            helperText={errors.customerContactNumber}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Customer Address"
            value={customerAddress}
            onChange={(e) => setCustomerAddress(e.target.value)}
            fullWidth
            error={!!errors.customerAddress}
            helperText={errors.customerAddress}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Invoice Date"
            type="date"
            value={invoiceDate}
            onChange={(e) => setInvoiceDate(e.target.value)}
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            select
            fullWidth
          >
            <MenuItem value="Pending">Pending</MenuItem>
            <MenuItem value="Paid">Paid</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={12}>
          <Paper variant="outlined">
            <Box p={2}>
              <Typography variant="h6">Items</Typography>
              <Grid container spacing={2}>
                <Grid item xs={4}><Typography>Description</Typography></Grid>
                <Grid item xs={2}><Typography>Quantity</Typography></Grid>
                <Grid item xs={2}><Typography>Amount</Typography></Grid>
                <Grid item xs={2}><Typography>Total</Typography></Grid>
                <Grid item xs={2}></Grid>
                {items.map((item, index) => (
                  <Grid container spacing={2} key={index}>
                    <Grid item xs={4}><Typography>{item.productName}</Typography></Grid>
                    <Grid item xs={2}><Typography>{item.quantity}</Typography></Grid>
                    <Grid item xs={2}><Typography>{item.amount}</Typography></Grid>
                    <Grid item xs={2}><Typography>{item.quantity * item.amount}</Typography></Grid>
                    <Grid item xs={2}>
                      <IconButton onClick={() => handleDeleteItem(index)}>
                        <DeleteIcon />
                      </IconButton>
                    </Grid>
                  </Grid>
                ))}
                {isItemFormVisible ? (
                  <>
                    <Grid item xs={12}>
                      <TextField
                        label="Product Name"
                        value={newItem.productName}
                        onChange={(e) =>
                          setNewItem({ ...newItem, productName: e.target.value })
                        }
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <TextField
                        label="Quantity"
                        type="number"
                        value={newItem.quantity}
                        onChange={(e) =>
                          setNewItem({ ...newItem, quantity: e.target.value })
                        }
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <TextField
                        label="Amount"
                        type="number"
                        value={newItem.amount}
                        onChange={(e) =>
                          setNewItem({ ...newItem, amount: e.target.value })
                        }
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={handleAddItem}
                      >
                        Add
                      </Button>
                      <Button
                        variant="outlined"
                        color="secondary"
                        onClick={handleCancelItem}
                        style={{ marginLeft: "8px" }}
                      >
                        Cancel
                      </Button>
                    </Grid>
                  </>
                ) : (
                  <Grid item xs={12}>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => setIsItemFormVisible(true)}
                    >
                      Add Item
                    </Button>
                  </Grid>
                )}
              </Grid>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleAddInvoice}
          >
            Add Invoice
          </Button>
        </Grid>
      </Grid>

      <Dialog open={isDialogOpen} onClose={handleCloseDialog}>
        <DialogTitle>Invoice Created</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Your invoice has been created successfully.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            OK
          </Button>
        </DialogActions>
      </Dialog>
      </Paper>
    </Box>
    </Grid>
    </Grid>
  );
};

export default Invoice;
