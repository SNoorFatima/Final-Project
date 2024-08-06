import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Button, Collapse, ListItem, Typography } from '@mui/material';
import { IconChevronDown, IconChevronRight } from '@tabler/icons-react';
import { useNavigate } from 'react-router-dom';

const SidebarItem = (props) => {
  const { item, depth = 0 } = props;
  const { title, icon, items, path, active, info, newTab, subtitle, action } = item;
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClick = () => {
    if (newTab) {
      window.open(path, '_blank');
    } else {
      navigate(path);
    }
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
            color: active ? 'secondary.main' : '#364152',
            justifyContent: 'flex-start',
            pl: `${paddingLeft}px`,
            pr: 3,
            textAlign: 'left',
            textTransform: 'none',
            fontSize: '0.875rem',
            width: '100%',
            '&:hover': {
              backgroundColor: 'rgba(255,255,255, 0.08)',
            },
            '& .MuiButton-startIcon': {
              color: active ? 'secondary.main' : '#364152',
            },
            '& .MuiButton-endIcon': {
              color: '#364152',
            },
          }}
        >
          <Box sx={{ flexGrow: 1 }}>
            {title}
            {subtitle && (
              <Typography variant="body2" sx={{ ml: 2, color: 'text.secondary' }}>
                {subtitle}
              </Typography>
            )}
          </Box>
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
      <Button
        startIcon={icon}
        endIcon={info}
        disableRipple
        onClick={handleClick}
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
          fontSize: '0.875rem',
          width: '100%',
          '&:hover': {
            backgroundColor: 'rgba(255,255,255, 0.08)',
          },
          '& .MuiButton-startIcon': {
            color: active ? 'secondary.main' : '#364152',
          },
        }}
      >
        <Box sx={{ flexGrow: 1 }}>
          {title}
          {subtitle && (
            <Typography variant="body2" sx={{ ml: 2, color: 'text.secondary' }}>
              {subtitle}
            </Typography>
          )}
        </Box>
        {action}
      </Button>
    </ListItem>
  );
};

SidebarItem.propTypes = {
  item: PropTypes.object.isRequired,
  depth: PropTypes.number,
};

export default SidebarItem;
