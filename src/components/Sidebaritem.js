import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Button, Collapse, ListItem, Chip } from '@mui/material';
import { IconChevronDown, IconChevronRight } from '@tabler/icons-react';
import { Link, useLocation } from 'react-router-dom';

const SidebarItem = ({ item, depth = 0 }) => {
  const { title, icon, items, path, info, action } = item;
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  // Calculate padding based on depth
  const paddingLeft = depth > 0 ? 32 + 8 * depth : 24;

  // Determine if the current item or any of its children is active
  const isActive = path === location.pathname;
  const checkIfAnyChildActive = (items) =>
    items?.some(
      (child) =>
        child.path === location.pathname || checkIfAnyChildActive(child.items)
    );
  const isParentActive = isActive || checkIfAnyChildActive(items);

  const buttonStyles = {
    justifyContent: 'flex-start',
    pl: `${paddingLeft}px`,
    pr: 3,
    textAlign: 'left',
    textTransform: 'none',
    fontSize: '0.875rem',
    width: '100%',
    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.08)',
    },
    '& .MuiButton-startIcon': {
      color: isParentActive ? 'secondary.main' : 'neutral.400',
    },
  };

  // Render submenu if items exist
  if (items) {
    return (
      <ListItem disableGutters sx={{ display: 'block', mb: 0.5, py: 0, px: 2 }}>
        <Button
          endIcon={
            open ? <IconChevronDown fontSize="small" /> : <IconChevronRight fontSize="small" />
          }
          disableRipple
          onClick={handleToggle}
          startIcon={icon}
          sx={{
            ...buttonStyles,
            color: isParentActive ? 'secondary.main' : 'neutral.300',
            backgroundColor: isParentActive ? '#d2eafc' : 'transparent',
            '& .MuiButton-endIcon': {
              color: 'neutral.400',
            },
          }}
        >
          <Box sx={{ flexGrow: 1 }}>{title}</Box>
          {action && <Box sx={{ ml: 1 }}>{action}</Box>} {/* Render action if provided */}
          {info}
        </Button>
        <Collapse in={open} sx={{ mt: 0.5 }}>
          {items.map((subItem, index) => (
            <SidebarItem key={index} item={subItem} depth={depth + 1} />
          ))}
        </Collapse>
      </ListItem>
    );
  }

  // Render leaf item
  return (
    <ListItem disableGutters sx={{ display: 'flex', mb: 0.5, py: 0, px: 2 }}>
      <Link to={path} style={{ textDecoration: 'none', width: '100%' }}>
        <Button
          startIcon={icon}
          endIcon={info}
          disableRipple
          sx={{
            ...buttonStyles,
            backgroundColor: isActive ? '#d2eafc' : 'transparent',
            borderRadius: 1,
            color: isActive ? 'secondary.main' : 'neutral.300',
            fontWeight: isActive ? 'fontWeightBold' : 'normal',
          }}
        >
          <Box sx={{ flexGrow: 1 }}>{title}</Box>
          {action && <Box sx={{ ml: 1 }}>{action}</Box>} {/* Render action if provided */}
        </Button>
      </Link>
    </ListItem>
  );
};

SidebarItem.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string.isRequired,
    icon: PropTypes.node.isRequired,
    items: PropTypes.arrayOf(PropTypes.object),
    path: PropTypes.string,
    info: PropTypes.node,
    action: PropTypes.node, // Add action prop
  }).isRequired,
  depth: PropTypes.number,
};

export default SidebarItem;
