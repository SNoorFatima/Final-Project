import { AppBar, Tab, Tabs } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navidation_orders = () => {
  return (
    <AppBar position="static">
    <Tabs value={false}>
      <Tab label="Details" component={Link} to="/OrderDetails" />
      <Tab label="Invoice" component={Link} to="/OrderInvoice" />
      <Tab label="Status" component={Link} to="/OrderStatus" />
    </Tabs>
  </AppBar>
  )
}

export default Navidation_orders
