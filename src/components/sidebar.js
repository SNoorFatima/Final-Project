import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Collapse,
  Typography,
  Divider,
  Chip,
  Avatar,
  Box,
} from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { useSidebar } from "../SidebarContext"; // Assuming you have a context for sidebar state

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
} from "@tabler/icons-react";

const sidebarData = [
  {
    section: "Dashboard",
    items: [
      { title: "Default",path:"", icon: <IconDashboard />  },
      { title: "Analytics", icon: <IconDeviceAnalytics /> },
    ],
  },
  {
    section: "Widget",
    items: [
      { title: "Statistics", icon: <IconChartArcs /> },
      { title: "Data", icon: <IconClipboardList /> },
      { title: "Chart", icon: <IconChartInfographic /> },
    ],
  },
  {
    section: "Application",
    items: [
      {
        title: "Users",
        icon: <IconUserCheck />,
        items: [
          { title: "Social Profile" },
          {
            title: "Account Profile",
            items: ["Profile 01", "Profile 02", "Profile 03"],
          },
          { title: "Cards", items: ["Style 01", "Style 02", "Style 03"] },
          { title: "List", items: ["Style 01", "Style 02"] },
        ],
      },
      {
        title: "Customers",
        icon: <IconBasket />,
        items: [
          "Customer list",
          "Order list",
          "Create Invoice",
          "Order details",
          "Product",
          "Product Review",
        ],
      },
      { title: "Chats", icon: <IconMessages /> },
      // { title: "Kanban", icon: <IconLayoutKanban /> },
      { title: "Mail", icon: <IconMail /> },
      // { title: "Calender", icon: <IconCalendar /> },
      { title: "Contact", icon: <IconNfc />, items: ["Cards", "List"] },
      {
        title: "Ecommerce",
        icon: <IconBasket />,
        items: ["Products", "Product Details", "Product List", "Checkout"],
      },
    ],
  },
  {
    section: "Forms",
    items: [
      {
        title: "Components",
        icon: <IconPictureInPicture />,
        items: [
          "Autocomplete",
          "Buttons",
          "Cards",
          "Checkbox",
          "Date/Time",
          "Radio",
          "Slider",
          "Switch",
          "Textfield",
        ],
      },
      {
        title: "Plugins",
        icon: <IconForms />,
        items: [
          "Autocomplete",
          "Mask",
          "Clipboard",
          "Recaptcha",
          "Wysiwug Editor",
          "Modal",
          "Tooltip",
          "Dropzone"
        ],
      },
      {
        title: "Layout",
        icon: <IconBorderAll />,
        items: [
          "Layouts",
          "Multi coulmn forms",
          "Action Bar",
          "Sticky Action Bar"
        ],
      },
      {
        title: "Table",
        icon: <IconTable />,
        items: [
          "Basic Table",
          "Dense Table",
          "Enhanced Table",
          "Data Table",
          "Custom Table",
          "Fixed Header",
          "Collapsed Table"
        ],
      },
      {
        title: "DataGrid",
        icon: <IconTable />,
        items: [
          "Basic",
          "Inline Editing",
          "Coulmn groups",
          "Save & Restore",
          "Quick Filter",
          "Coulmn Visibility",
          "Column Virtualization",
          "Coulmn Menu"
        ],
      },
      {
        title: "Charts",
        icon: <IconTable />,
        items: ["Apexchart", "Organization Chart"],
      },
      {
        title: "Maps",
        icon: <IconMapPin/>,
      },
    {
      title: "Form Validation",
      icon: <IconClipboardCheck/>
    },
    {
      title:"Forms Wizard",
      icon: <IconStairsUp/>
    }
    ],
  },
  {
    section: "UI Element",
    items: [
      {
        title: "Basic",
        icon: <IconBrush />,
        items: [
          "Accordion",
          "Avater",
          "Badges",
          "Breadcrumb",
          "Cards",
          "Chip",
          "List",
          "Tabs"
        ],
      },
      {
        title: "Advance",
        icon: <IconTools />,
        items: [
          "Alert",
          "Dialog",
          "Pagination",
          "Progress",
          "Rating",
          "Snackbar",
          "Skeleton",
          "Timeline",
          "Toggle Button",
          "Treeview"
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
        items: ["Authentication1", "Authentication2", "Authentication3"],
      },
      { title: "Pricing", icon: <IconReceipt2 /> },
      { title: "Maintenance", icon: <IconBug /> },
      { title: "Landing", icon: <IconBellRinging /> },
      { title: "Contact US", icon: <IconPhoneCall /> },
      { title: "FAQs", icon: <IconQuestionMark /> },
      { title: "Privacy Policy", icon: <IconShieldLock /> },
    ],
  },
  {
    items:[
      { title: "Sample Pages", icon: <IconBrandChrome /> },
    ]
  },
  {
    section: "Utilities",
    items: [
      { title: "Typography", icon: <IconTypography /> },
      { title: "Color", icon: <IconPalette /> },
      { title: "Shadow", icon: <IconShadow /> },
      {
        title: "Icons",
        icon: <IconWindmill />,
        items: ["Tabler Icons", "Material Icons"],
      },
      { title: "Animation", icon: <IconBrandFramer /> },
      { title: "Grid", icon: <IconLayoutGridAdd /> },
    ],
  },
  {
    section: "Others",
    items: [
      { title: "Menu Levels", icon: <IconMenu /> },
      { title: "Sub Caption Levels", icon: <IconBoxMultiple />, subtitle: "Caption Collapse" },
      { title: "Disabled Menu", icon: <IconCircleOff /> },
      { 
        title: "Oval Chip", 
        icon: <IconCircle />, 
        action: <Chip color="primary" sx={{ height: '32px', width: '32px' }} label="9" /> 
      },
      { 
        title: "Avatar", 
        icon: <IconBrandGravatar />, 
        action: <Chip avatar={<Avatar>c</Avatar>} label="Coded" sx={{ ml: '60px' }} /> 
      },
      { title: "Outlined", icon: <IconShape /> },
      <Divider />,
      { title: "Documentation", icon: <IconHelp /> },
      { title: "Roadmap", icon: <IconSitemap /> },
    ],
  },
  // {
  //   section: "Storage",
  //   items: [
  //     <StyledStorageSection>
  //       <Typography variant="body2" component="div" gutterBottom>
  //         Get Extra Space
  //       </Typography>
  //       <Typography variant="body2" component="div">
  //         28/23 GB
  //       </Typography>
  //       <LinearProgress variant="determinate" value={80} sx={{ height: 6 }} />
  //       <Button variant="contained" size="small" fullWidth sx={{ marginTop: 1 }}>
  //         Upgrade
  //       </Button>
  //       <Typography variant="caption" sx={{ paddingLeft: 2 }}>
  //         v3.9.0
  //       </Typography>
  //     </StyledStorageSection>
  //   ],
  // }
  
];

const Sidebar = () => {
  const { isOpen } = useSidebar(); 
  const [open, setOpen] = useState({});

  const handleClick = (item) => {
    setOpen((prevOpen) => ({ ...prevOpen, [item]: !prevOpen[item] }));
  };

  const renderListItem = (item, depth = 0) => {
    const { title, icon, items } = item;

    return (
      <React.Fragment key={title}>
        <ListItem
          onClick={() => handleClick(title)}
          sx={{ padding:'10px 16px 10px 24px',mb:'4px' }}
        >
          <ListItemIcon sx={{ width: '20px',height:'20px' }}>{icon}</ListItemIcon>
          <ListItemText primaryTypographyProps={{ fontSize: '14px' }} primary={title} />
          {Array.isArray(items) &&
            items.length > 0 &&
            (open[title] ? <ExpandLess /> : <ExpandMore />)}
        </ListItem>
        {Array.isArray(items) && items.length > 0 && (
          <Collapse in={open[title]} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {items.map((subItem) =>
                typeof subItem === "string" ? (
                  <ListItem key={subItem}  sx={{ pl: (depth + 1) * 4 }}>
                    <ListItemText primary={subItem} />
                  </ListItem>
                ) : (
                  renderListItem(subItem, depth + 1)
                )
              )}
            </List>
          </Collapse>
        )}
      </React.Fragment>
    );
  };

  return (
    <Drawer
      variant="persistent"
      anchor="left"
      open={isOpen}
      sx={{
        width: 240,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: 270,
          boxSizing: "border-box",
          top: "96px",
          paddingLeft: "1rem",
          paddingRight: "1rem",
          position: "fixed",
          zindex:"0",
          // Apply custom scrollbar styles here
          scrollbarWidth: "thin", // For Firefox
          "&::-webkit-scrollbar": {
            width: "5px",
            height: "100px",
          },
          "&::-webkit-scrollbar-thumb": {

            borderRadius: "5px",
          },
          "&::-webkit-scrollbar-thumb-y": {
            backgroundColor: '#697586',
            borderRadius: '6px',
            width: '5px',
          },
          "&::-webkit-scrollbar-track": {

          },
        },

      }}
    >
      <List>
        {sidebarData.map((section) => (
          <React.Fragment key={section.section}>
            <Typography variant="subtitle1" sx={{ padding: "6px", margin: "10px 0px 4.9px" }}>
              {section.section}
            </Typography>
            {section.items.map((item) => renderListItem(item))}
            <Divider />
          </React.Fragment>
        ))}
        <Box sx={{backgroundColor:"#d2eafc"}}>
          <ul>
          <Avatar sx={{ bgcolor: "white" }} variant="square">
  N
</Avatar>
          </ul>
        </Box>
      </List>
    </Drawer>
  );
};

export default Sidebar;
