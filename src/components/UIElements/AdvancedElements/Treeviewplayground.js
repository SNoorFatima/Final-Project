import React, { useState } from 'react';
import { SimpleTreeView, TreeItem } from '@mui/x-tree-view';
import { Grid, Card, CardContent, CardHeader, Paper, Divider, Typography, Checkbox, FormControlLabel } from '@mui/material';
import { ExpandMore, ChevronRight } from '@mui/icons-material';
import { Box, Stack } from '@mui/system';
import muilogo from '../../Utilities/Assets/logoMUI.png';

const TreeViewPlayground = () => {
  const [selected, setSelected] = useState([]);
  const [expanded, setExpanded] = useState([]);
  const [checked, setChecked] = useState(['2', '3']);

  const handleSelect = (event, nodeIds) => {
    setSelected(nodeIds);
  };

  const handleToggle = (event, nodeIds) => {
    setExpanded(nodeIds);
  };

  const handleCheck = (event, nodeId) => {
    const currentIndex = checked.indexOf(nodeId);
    const newChecked = [...checked];
    
    if (currentIndex === -1) {
      newChecked.push(nodeId);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <Paper sx={{ padding: 3 }}>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography variant="h5">Treeview</Typography>
        <a href="https://mui.com/material-ui/react-tree-view/" target="_blank" rel="noopener noreferrer">
          <img src={muilogo} alt="MUI Logo" style={{ height: 40 }} />
        </a>
      </Stack>
      <Divider sx={{ mb: 2 }} />

      <Grid container spacing={3}>
        {/* Basic */}
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardHeader title="Basic" titleTypographyProps={{ fontSize: '14px' }} />
            <Divider />
            <CardContent>
              <SimpleTreeView
                defaultCollapseIcon={<ExpandMore />}
                defaultExpandIcon={<ChevronRight />}
              >
                <TreeItem nodeId="1" label="Applications">
                  <TreeItem nodeId="2" label="Calendar" />
                  <TreeItem nodeId="3" label="Chrome" />
                  <TreeItem nodeId="4" label="Webstorm" />
                </TreeItem>
                <TreeItem nodeId="5" label="Documents">
                  <TreeItem nodeId="6" label="CSS" />
                  <TreeItem nodeId="7" label="Material-UI">
                    <TreeItem nodeId="8" label="src" />
                  </TreeItem>
                </TreeItem>
              </SimpleTreeView>
            </CardContent>
          </Card>
        </Grid>

        {/* Multi Selection */}
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardHeader title="Multi Selection" titleTypographyProps={{ fontSize: '14px' }} />
            <Divider />
            <CardContent>
              <SimpleTreeView
                multiSelect
                defaultCollapseIcon={<ExpandMore />}
                defaultExpandIcon={<ChevronRight />}
                selected={selected}
                onNodeSelect={handleSelect}
              >
                <TreeItem nodeId="9" label="Applications">
                  <TreeItem nodeId="10" label="Calendar" />
                  <TreeItem nodeId="11" label="Chrome" />
                  <TreeItem nodeId="12" label="Webstorm" />
                </TreeItem>
                <TreeItem nodeId="13" label="Documents">
                  <TreeItem nodeId="14" label="CSS" />
                  <TreeItem nodeId="15" label="Material-UI">
                    <TreeItem nodeId="16" label="src" />
                  </TreeItem>
                </TreeItem>
              </SimpleTreeView>
            </CardContent>
          </Card>
        </Grid>

        {/* Controlled */}
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardHeader title="Controlled" titleTypographyProps={{ fontSize: '14px' }} />
            <Divider />
            <CardContent>
              <Box mb={2}>
                <FormControlLabel
                  control={<Checkbox checked={expanded.length === 8} onChange={(e) => setExpanded(e.target.checked ? ['1', '2', '3', '4', '5', '6', '7', '8'] : [])} />}
                  label="Collapse All"
                />
                <FormControlLabel
                  control={<Checkbox checked={selected.length === 8} onChange={(e) => setSelected(e.target.checked ? ['1', '2', '3', '4', '5', '6', '7', '8'] : [])} />}
                  label="Unselect All"
                />
              </Box>
              <SimpleTreeView
                defaultCollapseIcon={<ExpandMore />}
                defaultExpandIcon={<ChevronRight />}
                expanded={expanded}
                selected={selected}
                onNodeToggle={handleToggle}
                onNodeSelect={handleSelect}
              >
                <TreeItem nodeId="17" label="Applications">
                  <TreeItem nodeId="18" label="Calendar" />
                  <TreeItem nodeId="19" label="Chrome" />
                  <TreeItem nodeId="20" label="Webstorm" />
                </TreeItem>
                <TreeItem nodeId="21" label="Documents">
                  <TreeItem nodeId="22" label="CSS" />
                  <TreeItem nodeId="23" label="Material-UI">
                    <TreeItem nodeId="24" label="src" />
                  </TreeItem>
                </TreeItem>
              </SimpleTreeView>
            </CardContent>
          </Card>
        </Grid>

        {/* Recursive */}
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardHeader title="Recursive" titleTypographyProps={{ fontSize: '14px' }} />
            <Divider />
            <CardContent>
              <SimpleTreeView
                defaultCollapseIcon={<ExpandMore />}
                defaultExpandIcon={<ChevronRight />}
              >
                <TreeItem nodeId="25" label="Parent">
                  <TreeItem nodeId="26" label="Child - 1">
                    <TreeItem nodeId="27" label="Child - 3" />
                    <TreeItem nodeId="28" label="Child - 4" />
                  </TreeItem>
                </TreeItem>
              </SimpleTreeView>
            </CardContent>
          </Card>
        </Grid>

        {/* Customized */}
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardHeader title="Customized" titleTypographyProps={{ fontSize: '14px' }} />
            <Divider />
            <CardContent>
              <SimpleTreeView
                defaultCollapseIcon={<ExpandMore />}
                defaultExpandIcon={<ChevronRight />}
              >
                <TreeItem nodeId="29" label="Main">
                  <TreeItem nodeId="30" label="Hello" />
                  <TreeItem nodeId="31" label="Subtree with children">
                    <TreeItem nodeId="32" label="World" />
                    <TreeItem nodeId="33" label="Something something" />
                  </TreeItem>
                </TreeItem>
              </SimpleTreeView>
            </CardContent>
          </Card>
        </Grid>

        {/* Gmail Clone */}
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardHeader title="Gmail Clone" titleTypographyProps={{ fontSize: '14px' }} />
            <Divider />
            <CardContent>
              <SimpleTreeView
                defaultCollapseIcon={<ExpandMore />}
                defaultExpandIcon={<ChevronRight />}
              >
                <TreeItem nodeId="34" label="All Mail" />
                <TreeItem nodeId="35" label="Trash" />
                <TreeItem nodeId="36" label="Categories">
                  <TreeItem nodeId="37" label="Social" />
                </TreeItem>
              </SimpleTreeView>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default TreeViewPlayground;
