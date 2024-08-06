import { AppBar, Tab, Tabs } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navidation_orders = () => {
  return (
    <AppBar position="static">
    <Tabs value={false}>
      <Tab label="Details" component={Link} to="/ordernavigation/OrderDetails" />
      <Tab label="Invoice" component={Link} to="/ordernavigation/OrderInvoice" />
      <Tab label="Status" component={Link} to="/ordernavigation/OrderStatus" />
    </Tabs>
  </AppBar>
  )
}

export default Navidation_orders
