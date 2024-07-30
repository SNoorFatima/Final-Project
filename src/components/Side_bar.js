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
  Box,
  styled,
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
} from "@tabler/icons-react";

const sidebarData = [
  {
    section: "Dashboard",
    items: [
      { title: "Default", icon: <IconDashboard /> },
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
          { title: "Account Profile", items: ["Profile 01", "Profile 02", "Profile 03"] },
          { title: "Cards", items: ["Style 01", "Style 02", "Style 03"] },
          { title: "List", items: ["Style 01", "Style 02"] },
        ],
      },
      { title: "Customers", icon: <IconBasket />, items: ["Customer list", "Order list", "Create Invoice", "Order details", "Product", "Product Review"] },
      { title: "Chats", icon: <IconMessages /> },
      { title: "Kanban", icon: <IconLayoutKanban /> },
      { title: "Mail", icon: <IconMail /> },
      { title: "Calender", icon: <IconCalendar /> },
      { title: "Contact", icon: <IconNfc />, items: ["Cards", "List"] },
      { title: "Ecommerce", icon: <IconBasket />, items: ["Products", "Product Details", "Product List", "Checkout"] },
    ],
  },
  {
    section: "Forms",
    items: [
      { title: "Components", icon: <IconPictureInPicture />, items: ["Autocomplete", "Buttons", "Cards", "Checkbox", "Date/Time", "Radio", "Slider", "Switch", "Textfield"] },
      { title: "Plugins", icon: <IconForms />, items: ["Autocomplete", "Buttons", "Cards", "Checkbox", "Date/Time", "Radio", "Slider", "Switch", "Textfield"] },
      { title: "Layout", icon: <IconBorderAll />, items: ["Autocomplete", "Buttons", "Cards", "Checkbox", "Date/Time", "Radio", "Slider", "Switch", "Textfield"] },
      { title: "Table", icon: <IconTable />, items: ["Autocomplete", "Buttons", "Cards", "Checkbox", "Date/Time", "Radio", "Slider", "Switch", "Textfield"] },
      { title: "DataGrid", icon: <IconTable />, items: ["Autocomplete", "Buttons", "Cards", "Checkbox", "Date/Time", "Radio", "Slider", "Switch", "Textfield"] },
      { title: "Charts", icon: <IconTable />, items: ["Apexchart", "Organization Chart"] },
    ],
  },
  {
    section: "UI Element",
    items: [
      { title: "Basic", icon: <IconBrush />, items: ["Autocomplete", "Buttons", "Cards", "Checkbox", "Date/Time", "Radio", "Slider", "Switch", "Textfield"] },
      { title: "Advance", icon: <IconTools />, items: ["Autocomplete", "Buttons", "Cards", "Checkbox", "Date/Time", "Radio", "Slider", "Switch", "Textfield"] },
    ],
  },
  {
    section: "Pages",
    items: [
      {
        title: "Authentication",
        icon: <IconKey />,
        items: [
          "Authentication1",
          "Authentication2",
          "Authentication3",
        ],
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
    section: "Utilities",
    items: [
      { title: "Typography", icon: <IconTypography /> },
      { title: "Color", icon: <IconPalette /> },
      { title: "Shadow", icon: <IconShadow /> },
      { title: "Icons", icon: <IconWindmill />, items: ["Tabler Icons", "Material Icons"] },
      { title: "Animation", icon: <IconBrandFramer /> },
      { title: "Grid", icon: <IconLayoutGridAdd /> },
    ],
  },
  {
    section: "Others",
    items: [
      // Add more items as needed
    ],
  },
];

const Sidebar = () => {
  const { isOpen } = useSidebar(); // Assuming you have a context for sidebar state
  const [open, setOpen] = useState({});

  const handleClick = (item) => {
    setOpen((prevOpen) => ({ ...prevOpen, [item]: !prevOpen[item] }));
  };

  const renderListItem = (item, depth = 0) => {
    const { title, icon, items } = item;

    return (
      <React.Fragment key={title}>
        <ListItem button onClick={() => handleClick(title)} sx={{ pl: depth * 4 }}>
          <ListItemIcon>{icon}</ListItemIcon>
          <ListItemText primary={title} />
          {Array.isArray(items) && items.length > 0 && (open[title] ? <ExpandLess /> : <ExpandMore />)}
        </ListItem>
        {Array.isArray(items) && items.length > 0 && (
          <Collapse in={open[title]} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {items.map((subItem) => (
                typeof subItem === "string" ? (
                  <ListItem key={subItem} button sx={{ pl: (depth + 1) * 4 }}>
                    <ListItemText primary={subItem} />
                  </ListItem>
                ) : (
                  renderListItem(subItem, depth + 1)
                )
              ))}
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
        [`& .MuiDrawer-paper`]: {
          width: 270,
          boxSizing: "border-box",
          top: "97px",
          paddingLeft: "1rem",
          paddingRight: "1rem",
        }, // top aligned with navbar height
      }}
    >
      <List>
        {sidebarData.map((section) => (
          <React.Fragment key={section.section}>
            <Typography variant="subtitle1" sx={{ paddingLeft: 2, paddingTop: 1 }}>
              {section.section}
            </Typography>
            {section.items.map((item) => renderListItem(item))}
            <Divider />
          </React.Fragment>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
