import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";
import Sidebar from "./components/sidebar";
import Navbar from "./components/nabvar";
import { SidebarContextProvider } from "./SidebarContext";
import Dashboard from "./components/Dasboard/Dashboard";
import Analytics from "./components/Analytics/Analytics";
import Statistics from "./components/Statistics/Statistics";
import Data from "./components/Data/Data";
import Chart from "./components/Chart/Chart";
import User from "./components/Application/User/userprofile";
import Profilepage from "./components/Application/User/Profilepage";
import Followers from "./components/Application/User/Followers";
import Friends from "./components/Application/User/Friends";
import Gallery from "./components/Application/User/Gallery";
import FriendRequestCard from "./components/Application/User/FriendRequests";
import './App.css';
import Navigation from "./components/Application/User/Profile/Navigation";
import ProfileStyle from "./components/Application/User/Profile/ProfileStyle";
import Personaldetails from "./components/Application/User/Profile/Personaldetails";
import AccountSettings from "./components/Application/User/Profile/AccountSetting";
import ChangePassword from "./components/Application/User/Profile/ChangePassword";
import SettingsPage from "./components/Application/User/Profile/SettingsPage";
import Cards from "./components/Application/User/Card/Card";
import Lists from "./components/Application/User/List/List";
import CustomersList from "./components/Application/Customer/customerlist";
import OrdersList from "./components/Application/Customer/Orderslist";
import Invoice from "./components/Application/Customer/Createinvoice";
import OrderDetails from "./components/Application/Customer/OrderDetails";
import ProductList from "./components/Application/Customer/Productlist";
import ProductReview from "./components/Application/Customer/ProductReview";
import OrderInvoice from "./components/Application/Customer/OrderInvoice";
import OrderStatus from "./components/Application/Customer/OrderStatus";
import Navidation_orders from "./components/Application/Customer/Navidation_orders";
import ChatBox from "./components/Application/Chat/chatbox";
import MailSystem from "./components/Application/Email/MailSystem";
import KanbanBoard from "./components/Application/Kanban/kanbanboard";
import EventCalendar from "./components/Application/Calender";
import AccordionsPlayground from "./components/UIElements/BasicElements/Accordinplayground";
import AvatarPlayground from "./components/UIElements/BasicElements/AvaterPlayground";
import BadgePlayground from "./components/UIElements/BasicElements/Badge";
import BreadcrumbsPlayground from "./components/UIElements/BasicElements/BreadCrumbs";
import ChipPlayground from "./components/UIElements/BasicElements/Chipplayground";
import TabsPlayground from "./components/UIElements/BasicElements/TabsPlayground";
import ListPlayground from "./components/UIElements/BasicElements/ListPlayground";
import AlertsPlayground from "./components/UIElements/AdvancedElements/Alert";
import DialogsExample from "./components/UIElements/AdvancedElements/Dialog";
import PaginationPlayground from "./components/UIElements/AdvancedElements/Pagination";
import ProgressPlayground from "./components/UIElements/AdvancedElements/Progress";
import RatingPlayground from "./components/UIElements/AdvancedElements/Rating";
import SnackbarPlayground from "./components/UIElements/AdvancedElements/Snackbar";
import SkeletonPlayground from "./components/UIElements/AdvancedElements/Skeleton";
import TimelinePlayground from "./components/UIElements/AdvancedElements/TimelinePlayground";
import TogglePlayground from "./components/UIElements/AdvancedElements/TogglePlayground";
import TreeViewPlayground from "./components/UIElements/AdvancedElements/Treeviewplayground";
import LoginPage from "./components/Pages/Loginpage";
import SignupPage from "./components/Pages/Signup";
import ForgotPasswordPage from "./components/Pages/ForgetPassword";
import CheckMail from "./components/Pages/CheckMail";
import ResetPasswordPage from "./components/Pages/PasswordReset";
import VerificationCodePage from "./components/Pages/VerificationPage";
import PricingCard from "./components/Pages/Pricing/PricingCard";
import Samplepage from "./components/Samplepage";
import AnimationPlayground from "./components/Utilities/AnimationPlayground";
import GridDisplay from "./components/Utilities/Gridplayground";
import ColorPalette from "./components/Utilities/colorpallete";
import ShadowDisplay from "./components/Utilities/Shadow";
import TypographyShowcase from "./components/Utilities/Typography";
import { ThemeContextProvider, useThemeContext } from './components/ThemeContext';

const App = () => {
  const [sideBarOpen, setSideBarOpen] = useState(true);
  const { mode, toggleTheme } = useThemeContext();

  const toggleSidebar = () => {
    setSideBarOpen(prevState => !prevState);
  };

  return (
    <ThemeContextProvider>
      <SidebarContextProvider>
        <Router>
          <Box>
            <Navbar toggleSidebarCall={toggleSidebar} toggleTheme={toggleTheme} />
            <Box>
              <Sidebar />
              <div style={{ marginLeft: sideBarOpen ? "0px" : "270px", transition: "margin-left 0.3s", flexGrow: 1, padding: '16px', marginTop: '100px' }}>
                <Routes>
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/Analytics" element={<Analytics />} />
                  <Route path="/Statistics" element={<Statistics />} />
                  <Route path="/Data" element={<Data />} />
                  <Route path="/Chart" element={<Chart />} />
                  <Route path="/user/*" element={<UserRoutes />} />
                  <Route path="/navigation/*" element={<ProfileRoutes />} />
                  <Route path="/Cards" element={<Cards />} />
                  <Route path="/Lists" element={<Lists />} />
                  <Route path="/CustomersList" element={<CustomersList />} />
                  <Route path="/OrdersList" element={<OrdersList />} />
                  <Route path="/Invoice" element={<Invoice />} />
                  <Route path="/ordernavigation/*" element={<OrderRoutes />} />
                  <Route path="/ProductList" element={<ProductList />} />
                  <Route path="/ProductReview" element={<ProductReview />} />
                  <Route path="/ChatBox" element={<ChatBox />} />
                  <Route path="/MailSystem" element={<MailSystem />} />
                  <Route path="/EventCalendar" element={<EventCalendar />} />
                  <Route path="/KanbanBoard" element={<KanbanBoard />} />
                  <Route path="/AccordionsPlayground" element={<AccordionsPlayground />} />
                  <Route path="/AvatarPlayground" element={<AvatarPlayground />} />
                  <Route path="/BadgePlayground" element={<BadgePlayground />} />
                  <Route path="/BreadcrumbsPlayground" element={<BreadcrumbsPlayground />} />
                  <Route path="/ChipPlayground" element={<ChipPlayground />} />
                  <Route path="/TabsPlayground" element={<TabsPlayground />} />
                  <Route path="/ListPlayground" element={<ListPlayground />} />
                  <Route path="/AlertsPlayground" element={<AlertsPlayground />} />
                  <Route path="/DialogsExample" element={<DialogsExample />} />
                  <Route path="/PaginationPlayground" element={<PaginationPlayground />} />
                  <Route path="/ProgressPlayground" element={<ProgressPlayground />} />
                  <Route path="/RatingPlayground" element={<RatingPlayground />} />
                  <Route path="/SnackbarPlayground" element={<SnackbarPlayground />} />
                  <Route path="/SkeletonPlayground" element={<SkeletonPlayground />} />
                  <Route path="/TimelinePlayground" element={<TimelinePlayground />} />
                  <Route path="/TogglePlayground" element={<TogglePlayground />} />
                  <Route path="/TreeViewPlayground" element={<TreeViewPlayground />} />
                  <Route path="/LoginPage" element={<LoginPage />} />
                  <Route path="/SignupPage" element={<SignupPage />} />
                  <Route path="/ForgotPasswordPage" element={<ForgotPasswordPage />} />
                  <Route path="/CheckMail" element={<CheckMail />} />
                  <Route path="/ResetPasswordPage" element={<ResetPasswordPage />} />
                  <Route path="/VerificationCodePage" element={<VerificationCodePage />} />
                  <Route path="/PricingCard" element={<PricingCard />} />
                  <Route path="/Samplepage" element={<Samplepage />} />
                  <Route path="/AnimationPlayground" element={<AnimationPlayground />} />
                  <Route path="/GridDisplay" element={<GridDisplay />} />
                  <Route path="/ColorPalette" element={<ColorPalette />} />
                  <Route path="/ShadowDisplay" element={<ShadowDisplay />} />
                  <Route path="/TypographyShowcase" element={<TypographyShowcase />} />
                </Routes>
              </div>
            </Box>
          </Box>
        </Router>
      </SidebarContextProvider>
    </ThemeContextProvider>
  );
};

const UserRoutes = () => (
  <Routes>
    <Route path="/" element={<Profilepage />} />
    <Route path="followers" element={<Followers />} />
    <Route path="friends" element={<Friends />} />
    <Route path="gallery" element={<Gallery />} />
    <Route path="friend-requests" element={<FriendRequestCard />} />
  </Routes>
);

const ProfileRoutes = () => (
  <Routes>
    <Route path="/" element={<Navigation />} />
    <Route path="ProfileStyle" element={<ProfileStyle />} />
    <Route path="Personaldetails" element={<Personaldetails />} />
    <Route path="AccountSettings" element={<AccountSettings />} />
    <Route path="ChangePassword" element={<ChangePassword />} />
    <Route path="SettingsPage" element={<SettingsPage />} />
  </Routes>
);

const OrderRoutes = () => (
  <Routes>
    <Route path="/" element={<Navidation_orders />} />
    <Route path="OrderDetails" element={<OrderDetails />} />
    <Route path="OrderInvoice" element={<OrderInvoice />} />
    <Route path="OrderStatus" element={<OrderStatus />} />
  </Routes>
);

export default App;
