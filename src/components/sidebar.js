import React from "react";
import {
  Drawer,
  List,
  Typography,
  Divider,
  Avatar,
  Box,
  Chip,
} from "@mui/material";
import { useSidebar } from "../SidebarContext"; // Assuming you have a context for sidebar state
import SidebarItem from "./Sidebaritem";
// Import your icons from Tabler or other sources
import {
  IconDashboard,
  IconDeviceAnalytics,
  IconChartArcs,
  IconChartInfographic,
  IconClipboardList,
  IconUserCheck,
  IconBasket,
  IconMail,
  IconMessages,
  IconNfc,
  IconTable,
  IconForms,
  IconPictureInPicture,
  IconBorderAll,
  IconMapPin,
  IconClipboardCheck,
  IconStairsUp,
  IconBrush,
  IconTools,
  IconBrandChrome,
  IconKey,
  IconReceipt2,
  IconBug,
  IconBellRinging,
  IconPhoneCall,
  IconQuestionMark,
  IconShieldLock,
  IconTypography,
  IconPalette,
  IconShadow,
  IconBrandFramer,
  IconLayoutGridAdd,
  IconWindmill,
  IconMap,
  IconMenu,
  IconBoxMultiple,
  IconCircleOff,
  IconCircle,
  IconBrandGravatar,
  IconShape,
  IconHelp,
  IconSitemap,
  IconLayoutKanban,
  IconCalendar,
} from "@tabler/icons-react";
import StorageCard from "./storagecard";

const sidebarData = [
  {
    section: "Dashboard",
    items: [
      { title: "Default", path: "/dashboard", icon: <IconDashboard /> },
      { title: "Analytics", path: "/Analytics", icon: <IconDeviceAnalytics /> },
    ],
  },
  {
    section: "Widget",
    items: [
      { title: "Statistics", path: "/Statistics", icon: <IconChartArcs /> },
      { title: "Data", path: "/Data", icon: <IconClipboardList /> },
      { title: "Chart", path: "/Chart", icon: <IconChartInfographic /> },
    ],
  },
  {
    section: "Application",
    items: [
      {
        title: "Users",
        icon: <IconUserCheck />,
        items: [
          { title: "Social Profile", path: "/user" },
          { title: "Account Profile", path: "/navigation" },
          { title: "Cards", path: "/Cards" },
          { title: "List", path: "/Lists" },
        ],
      },
      {
        title: "Customers",
        icon: <IconBasket />,
        items: [
          { title: "Customer List", path: "/CustomersList" },
          { title: "Order List", path: "/OrdersList" },
          { title: "Create Invoice", path: "/Invoice" },
          { title: "Order Details", path: "/ordernavigation" },
          { title: "Product", path: "/ProductList" },
          { title: "Product Review", path: "/ProductReview" },
        ],
      },
      { title: "Chats", path: "/ChatBox", icon: <IconMessages /> },
      { title: "Kanban", path: "/KanbanBoard", icon: <IconLayoutKanban /> },
      { title: "Mail", path: "/MailSystem", icon: <IconMail /> },
      { title: "Calendar", path: "/EventCalendar", icon: <IconCalendar /> },
    ],
  },
  {
    section: "UI Element",
    items: [
      {
        title: "Basic",
        icon: <IconBrush />,
        items: [
          { title: "Accordion", path: "/AccordionsPlayground" },
          { title: "Avatar", path: "/AvatarPlayground" },
          { title: "Badges", path: "/BadgePlayground" },
          { title: "Breadcrumb", path: "/BreadcrumbsPlayground" },
          { title: "Cards", path: "" },
          { title: "Chip", path: "/ChipPlayground" },
          { title: "List", path: "/ListPlayground" },
          { title: "Tabs", path: "/TabsPlayground" },
        ],
      },
      {
        title: "Advance",
        icon: <IconTools />,
        items: [
          { title: "Alert", path: "/AlertsPlayground" },
          { title: "Dialog", path: "/DialogsExample" },
          { title: "Pagination", path: "/PaginationPlayground" },
          { title: "Progress", path: "/ProgressPlayground" },
          { title: "Rating", path: "/RatingPlayground" },
          { title: "Snackbar", path: "/SnackbarPlayground" },
          { title: "Skeleton", path: "/SkeletonPlayground" },
          { title: "Timeline", path: "/TimelinePlayground" },
          { title: "Toggle Button", path: "/TogglePlayground" },
          { title: "Treeview", path: "/TreeViewPlayground" },
        ],
      },
    ],
  },
  {
    section: "Pages",
    items: [
      {
        title: "Authentication",
        icon: <IconKey />,
        items: [
          { title: "Login", path: "/LoginPage" },
          { title: "Register", path: "/SignupPage" },
          { title: "Forget Password", path: "/ForgotPasswordPage" },
          { title: "Check Mail", path: "/CheckMail" },
          { title: "Reset Password", path: "/ResetPasswordPage" },
          { title: "Code Verification", path: "/VerificationCodePage" },
        ],
      },
      { title: "Pricing", icon: <IconReceipt2 />, path: "/PricingCard" },
      {
        title: "Maintenance",
        icon: <IconBug />,
        path: "https://berrydashboard.io/pages/error",
        newTab: true,
      },
      {
        title: "Landing",
        icon: <IconBellRinging />,
        path: "https://berrydashboard.io/pages/landing",
        newTab: true,
      },
      {
        title: "Contact US",
        icon: <IconPhoneCall />,
        path: "https://berrydashboard.io/pages/contact-us",
        newTab: true,
      },
      {
        title: "FAQs",
        icon: <IconQuestionMark />,
        path: "https://berrydashboard.io/pages/faqs",
        newTab: true,
      },
      {
        title: "Privacy Policy",
        icon: <IconShieldLock />,
        path: "https://berrydashboard.io/pages/privacy-policy",
        newTab: true,
      },
    ],
  },
  {
    section: "Utilities",
    items: [
      {
        title: "Typography",
        icon: <IconTypography />,
        path: "/TypographyShowcase",
      },
      { title: "Color", icon: <IconPalette />, path: "/ColorPalette" },
      { title: "Shadow", icon: <IconShadow />, path: "/ShadowDisplay" },
      {
        title: "Icons",
        icon: <IconWindmill />,
        items: [
          {
            title: "Tabler Icons",
            path: "https://tabler.io/icons",
            newTab: true,
          },
          {
            title: "Material Icons",
            path: "https://mui.com/material-ui/material-icons/#main-content",
            newTab: true,
          },
        ],
      },
      {
        title: "Animation",
        icon: <IconBrandFramer />,
        path: "/AnimationPlayground",
      },
      { title: "Grid", icon: <IconLayoutGridAdd />, path: "/GridDisplay" },
    ],
  },
  {
    section: "Others",
    items: [
      {
        title: "Menu Levels",
        icon: <IconMenu />,
        items: [
          {
            title: "Level 1",
            items: [
              { title: "Level 2" },
              { title: "Level 2.1" },
            ],
          },
          {
            title: "Level 2",
          }

        ],
      },
      {
        title: "Sub Caption Levels",
        icon: <IconBoxMultiple />,
        subtitle: "Caption Collapse",
      },
      { title: "Disabled Menu", icon: <IconCircleOff /> },
      {
        title: "Oval Chip",
        icon: <IconCircle />,
        action: (
          <Chip
            color="primary"
            sx={{ height: "32px", width: "32px" }}
            label="9"
          />
        ),
      },
      {
        title: "Avatar",
        icon: <IconBrandGravatar />,
        action: (
          <Chip avatar={<Avatar sx={{backgroundColor:"rgb(30, 136, 229)",color:"rgb(255,255,255)"}}>c</Avatar>} label="Coded" sx={{ ml: "40px",backgroundColor:"rgb(33, 150, 243)",color:"rgb(255,255,255)" }} />
        ),
      },
      { title: "Outlined", icon: <IconShape /> ,action: (
        <Chip label="Outlined" sx={{ ml: "30px",border:"1px solid rgba(33, 150, 243, 0.7)",backgroundColor:"transparent",    color: "rgb(33, 150, 243)" }} />
      ) },
      <Divider />,
      { title: "Documentation", icon: <IconHelp />,path:"https://codedthemes.gitbook.io/berry",newTab:true },
      { title: "Roadmap", icon: <IconSitemap />,path:"https://codedthemes.gitbook.io/berry/support/roadmap",newTab:true },
    ],
  },
];

const Sidebar = () => {
  const { isOpen } = useSidebar();

  return (
    <Drawer
      variant="persistent"
      anchor="left"
      open={isOpen}
      sx={{
        width: 270,
        flexShrink: 0,
        height: "100vh",
        "& .MuiDrawer-paper": {
          width: 270,
          boxSizing: "border-box",
          top: "96px",
          paddingLeft: "1rem",
          paddingRight: "1rem",
          position: "fixed",
          zindex: "0",
          scrollbarWidth: "thin", // For Firefox
          "&::-webkit-scrollbar": {
            width: "5px",
            height: "100px",
          },
          "&::-webkit-scrollbar-thumb": {
            borderRadius: "5px",
          },
          "&::-webkit-scrollbar-thumb-y": {
            backgroundColor: "#697586",
            borderRadius: "6px",
            width: "5px",
          },
          "&::-webkit-scrollbar-track": {},
        },
      }}
    >
      <List>
        {sidebarData.map((section) => (
          <React.Fragment key={section.section}>
            <Typography
              variant="subtitle1"
              sx={{ padding: "6px", margin: "10px 0px 4.9px" }}
            >
              {section.section}
            </Typography>
            {section.items.map((item, index) => (
              <SidebarItem key={index} item={item} />
            ))}
            <Divider />
          </React.Fragment>
        ))}
        <StorageCard/>
        

      </List>
    </Drawer>
  );
};

export default Sidebar;
