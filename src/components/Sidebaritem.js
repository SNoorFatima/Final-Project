// Sidebaritem.js
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Button, Collapse, ListItem } from '@mui/material';
import { IconChevronDown, IconChevronRight } from '@tabler/icons-react';
import { Link } from 'react-router-dom';

const SidebarItem = (props) => {
  const { item, depth = 0 } = props;
  const { title, icon, items, path, active, info } = item;
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  let paddingLeft = 24;
  if (depth > 0) {
    paddingLeft = 32 + 8 * depth;
  }

  // Branch
  if (items) {
    return (
      <ListItem disableGutters sx={{ display: 'block', mb: 0.5, py: 0, px: 2 }}>
        <Button
          endIcon={!open ? <IconChevronRight fontSize="small" /> : <IconChevronDown fontSize="small" />}
          disableRipple
          onClick={handleToggle}
          startIcon={icon}
          sx={{
            color: active ? 'secondary.main' : 'neutral.300',
            justifyContent: 'flex-start',
            pl: `${paddingLeft}px`,
            pr: 3,
            textAlign: 'left',
            textTransform: 'none',
            fontSize: '0.875rem', // Consistent font size
            width: '100%',
            '&:hover': {
              backgroundColor: 'rgba(255,255,255, 0.08)',
            },
            '& .MuiButton-startIcon': {
              color: active ? 'secondary.main' : 'neutral.400',
            },
            '& .MuiButton-endIcon': {
              color: 'neutral.400',
            },
          }}
        >
          <Box sx={{ flexGrow: 1 }}>{title}</Box>
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

  // Leaf
  return (
    <ListItem disableGutters sx={{ display: 'flex', mb: 0.5, py: 0, px: 2 }}>
      <Link to={path}>
        <Button
          startIcon={icon}
          endIcon={info}
          disableRipple
          sx={{
            backgroundColor: active ? 'rgba(255,255,255, 0.08)' : 'transparent',
            borderRadius: 1,
            color: active ? 'secondary.main' : 'neutral.300',
            fontWeight: active ? 'fontWeightBold' : 'normal',
            justifyContent: 'flex-start',
            pl: `${paddingLeft}px`,
            pr: 3,
            textAlign: 'left',
            textTransform: 'none',
            fontSize: '0.875rem', // Consistent font size
            width: '100%',
            '&:hover': {
              backgroundColor: 'rgba(255,255,255, 0.08)',
            },
            '& .MuiButton-startIcon': {
              color: active ? 'secondary.main' : 'neutral.400',
            },
          }}
        >
          <Box sx={{ flexGrow: 1 }}>{title}</Box>
        </Button>
      </Link>
    </ListItem>
  );
};

SidebarItem.propTypes = {
  item: PropTypes.object.isRequired,
  depth: PropTypes.number,
};

export default SidebarItem;
