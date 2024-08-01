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
import OrderStatus from "./components/Application/Customer/OrderStatus";
import OrderInvoice from "./components/Application/Customer/OrderInvoice";
import ChatBox from "./components/Application/Chat/chatbox";
import MailSystem from "./components/Application/Email/MailSystem";



import './App.css';
import FullYearCalendar from "./components/Application/Calender";
import EventCalendar from "./components/Application/Calender";
import KanbanBoard from "./components/Application/Kanban/kanbanboard";
import { Container } from "@mui/system";
import TypographyShowcase from "./components/Utilities/Typography";
import ColorPalette from "./components/Utilities/colorpallete";
import ShadowDisplay from "./components/Utilities/Shadow";
import GridDisplay from "./components/Utilities/Gridplayground";
import AnimationPlayground from "./components/Utilities/AnimationPlayground";
import LoginPage from "./components/Pages/Loginpage";
import SignupPage from "./components/Pages/Signup";
import ForgotPasswordPage from "./components/Pages/ForgetPassword";
import CheckMail from "./components/Pages/CheckMail";
import ResetPasswordPage from "./components/Pages/PasswordReset";
import VerificationCodePage from "./components/Pages/VerificationPage";
import Analytics from "./components/Analytics/Analytics";





const App = () => {
  return (
    <Box ml={'20px'} mr={'20px'}      padding={'20px'} borderRadius= {'8px 8px 0px 0px '}>
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
        

        {/* <Routes>
        <Route path="/OrderDetails" element={<OrderDetails/>} />
        <Route path="/OrderInvoice" element={<OrderInvoice/>} />
        <Route path="/OrderStatus" element={<OrderStatus/>} />
      </Routes> */}
      <Container>
     <Analytics/>
      </Container>
        </Router>  
    </Box> 
  );
};

export default App;
