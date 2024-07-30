import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import User from "./components/Application/User/userprofile";
import Profilepage from "./components/Application/User/Profilepage";
import Followers from "./components/Application/User/Followers";
import Friends from "./components/Application/User/Friends";
import Gallery from "./components/Application/User/Gallery";
import FriendRequestCard from "./components/Application/User/FriendRequests";
import { Box } from "@mui/material";
import Lists from "./components/Application/User/List/List";
import CustomersList from "./components/Application/Customer/customerlist";
import OrdersList from "./components/Application/Customer/Orderslist";
import ProductList from "./components/Application/Customer/Productlist";
import InvoiceForm from "./components/Application/Customer/Createinvoice";
import Invoice from "./components/Application/Customer/Createinvoice";

import Navidation_orders from "./components/Application/Customer/Navidation_orders";
import OrderDetails from "./components/Application/Customer/OrderDetails";





const App = () => {
  return (
    <Box ml={'20px'} mr={'20px'} color={'rgb(238, 242, 246)'}     padding={'20px'} borderRadius= {'8px 8px 0px 0px '}>
      <Router>
    {/* <Router>
      <User/>
      <Routes>
        <Route path="/" element={<User />} />
        <Route path="/Profilepage" element={<Profilepage />} />
        <Route path="/followers" element={<Followers />} />
        <Route path="/friends" element={<Friends />} />
         <Route path="/gallery" element={<Gallery />} />
         <Route path="/friend-requests" element={<FriendRequestCard />} /> 
      </Routes>
    </Router> */} 
    {/* <Navigation/>
     <Routes>
          <Route path="/ProfileStyle" element={<ProfileStyle/>} />
          <Route path="/Personaldetails" element={<Personaldetails/> }/>
          <Route path="/AccountSettings" element={<AccountSettings/>} />
          <Route path="/ChangePassword" element={<ChangePassword/>} />
          <Route path="/SettingsPage" element={<SettingsPage/>} />
        </Routes> */}
        <Navidation_orders/>

        <Routes>
        <Route path="/OrderDetails" element={<OrderDetails/>} />
        {/* <Route path="/invoice" component={Invoice} />
        <Route path="/status" component={Status} /> */}
      </Routes>
        </Router>  
    </Box>
  );
};

export default App;
