import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Box, Card, CardContent, Typography, Paper, Stack, Grid, ToggleButton, ToggleButtonGroup } from '@mui/material';
import muilogo from "../../Utilities/Assets/logoMUI.png";
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';

export default function TogglePlayground() {
  const [formats, setFormats] = React.useState(() => ['bold', 'italic']);
  const [alignment, setAlignment] = React.useState('left');
  const [exclusiveSelection, setExclusiveSelection] = React.useState('bold');
  const [verticalAlignment, setVerticalAlignment] = React.useState('left');
  const [customValue, setCustomValue] = React.useState('web');

  const handleFormat = (event, newFormats) => {
    setFormats(newFormats);
  };

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  const handleExclusiveSelection = (event, newSelection) => {
    if (newSelection !== null) {
      setExclusiveSelection(newSelection);
    }
  };

  const handleVerticalAlignment = (event, newAlignment) => {
    setVerticalAlignment(newAlignment);
  };

  const handleCustomValue = (event, newValue) => {
    setCustomValue(newValue);
  };

  return (
    <Paper sx={{ flexWrap: 'wrap', gap: 2, padding: 2 }}>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography variant="h5">Toggle Buttons</Typography>
        <a href="https://mui.com/material-ui/react-toggle-button/" target="_blank" rel="noopener noreferrer">
          <img src={muilogo} alt="MUI Logo" style={{ height: 40 }} />
        </a>
      </Stack>
      
      <Grid container spacing={2}>
        {/* Exclusive Selection */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6">Exclusive Selection</Typography>
              <ToggleButtonGroup
                value={exclusiveSelection}
                exclusive
                onChange={handleExclusiveSelection}
                aria-label="text formatting"
              >
                <ToggleButton value="bold" aria-label="bold">
                  <FormatBoldIcon />
                </ToggleButton>
                <ToggleButton value="italic" aria-label="italic">
                  <FormatItalicIcon />
                </ToggleButton>
                <ToggleButton value="underlined" aria-label="underlined">
                  <FormatUnderlinedIcon />
                </ToggleButton>
              </ToggleButtonGroup>
            </CardContent>
          </Card>
        </Grid>

        {/* Multiple Selection */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6">Multiple Selection</Typography>
              <ToggleButtonGroup
                value={formats}
                onChange={handleFormat}
                aria-label="text formatting"
              >
                <ToggleButton value="bold" aria-label="bold">
                  <FormatBoldIcon />
                </ToggleButton>
                <ToggleButton value="italic" aria-label="italic">
                  <FormatItalicIcon />
                </ToggleButton>
                <ToggleButton value="underlined" aria-label="underlined">
                  <FormatUnderlinedIcon />
                </ToggleButton>
              </ToggleButtonGroup>
            </CardContent>
          </Card>
        </Grid>

        {/* Standalone */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6">Standalone</Typography>
              <ToggleButton
                value="check"
                selected={alignment === 'center'}
                onChange={() => {
                  setAlignment(alignment === 'center' ? '' : 'center');
                }}
                aria-label="centered"
              >
                <FormatAlignCenterIcon />
              </ToggleButton>
            </CardContent>
          </Card>
        </Grid>

        {/* Sizes */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6">Sizes</Typography>
              <Box>
                <ToggleButtonGroup
                  size="small"
                  value={alignment}
                  exclusive
                  onChange={handleAlignment}
                  aria-label="text alignment"
                >
                  <ToggleButton value="left" aria-label="left aligned">
                    <FormatAlignLeftIcon />
                  </ToggleButton>
                  <ToggleButton value="center" aria-label="centered">
                    <FormatAlignCenterIcon />
                  </ToggleButton>
                  <ToggleButton value="right" aria-label="right aligned">
                    <FormatAlignRightIcon />
                  </ToggleButton>
                  <ToggleButton value="justify" aria-label="justified">
                    <FormatAlignJustifyIcon />
                  </ToggleButton>
                </ToggleButtonGroup>
              </Box>
              <Box sx={{ mt: 2 }}>
                <ToggleButtonGroup
                  size="medium"
                  value={alignment}
                  exclusive
                  onChange={handleAlignment}
                  aria-label="text alignment"
                >
                  <ToggleButton value="left" aria-label="left aligned">
                    <FormatAlignLeftIcon />
                  </ToggleButton>
                  <ToggleButton value="center" aria-label="centered">
                    <FormatAlignCenterIcon />
                  </ToggleButton>
                  <ToggleButton value="right" aria-label="right aligned">
                    <FormatAlignRightIcon />
                  </ToggleButton>
                  <ToggleButton value="justify" aria-label="justified">
                    <FormatAlignJustifyIcon />
                  </ToggleButton>
                </ToggleButtonGroup>
              </Box>
              <Box sx={{ mt: 2 }}>
                <ToggleButtonGroup
                  size="large"
                  value={alignment}
                  exclusive
                  onChange={handleAlignment}
                  aria-label="text alignment"
                >
                  <ToggleButton value="left" aria-label="left aligned">
                    <FormatAlignLeftIcon />
                  </ToggleButton>
                  <ToggleButton value="center" aria-label="centered">
                    <FormatAlignCenterIcon />
                  </ToggleButton>
                  <ToggleButton value="right" aria-label="right aligned">
                    <FormatAlignRightIcon />
                  </ToggleButton>
                  <ToggleButton value="justify" aria-label="justified">
                    <FormatAlignJustifyIcon />
                  </ToggleButton>
                </ToggleButtonGroup>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Enforce Value Set */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6">Enforce Value Set</Typography>
              <ToggleButtonGroup
                value={customValue}
                exclusive
                onChange={handleCustomValue}
                aria-label="text alignment"
              >
                <ToggleButton value="left" aria-label="left aligned">
                  Web
                </ToggleButton>
                <ToggleButton value="center" aria-label="centered">
                  Android
                </ToggleButton>
                <ToggleButton value="right" aria-label="right aligned">
                  iOS
                </ToggleButton>
              </ToggleButtonGroup>
            </CardContent>
          </Card>
        </Grid>

        {/* Vertical */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6">Vertical</Typography>
              <ToggleButtonGroup
                orientation="vertical"
                value={verticalAlignment}
                exclusive
                onChange={handleVerticalAlignment}
                aria-label="text alignment"
              >
                <ToggleButton value="left" aria-label="left aligned">
                  <FormatAlignLeftIcon />
                </ToggleButton>
                <ToggleButton value="center" aria-label="centered">
                  <FormatAlignCenterIcon />
                </ToggleButton>
                <ToggleButton value="right" aria-label="right aligned">
                  <FormatAlignRightIcon />
                </ToggleButton>
                <ToggleButton value="justify" aria-label="justified">
                  <FormatAlignJustifyIcon />
                </ToggleButton>
              </ToggleButtonGroup>
            </CardContent>
          </Card>
        </Grid>

        {/* Customized */}
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h6">Customized</Typography>
              <ToggleButtonGroup
                value={alignment}
                exclusive
                onChange={handleAlignment}
                aria-label="text alignment"
                sx={{
                  '& .MuiToggleButtonGroup-grouped': {
                    margin: '1px',
                    border: 0,
                    '&.Mui-disabled': {
                      border: 0,
                    },
                    '&:not(:first-of-type)': {
                      borderRadius: 0,
                    },
                    '&:first-of-type': {
                      borderRadius: 0,
                    },
                  },
                }}
              >
                <ToggleButton value="left" aria-label="left aligned">
                  <FormatAlignLeftIcon />
                </ToggleButton>
                <ToggleButton value="center" aria-label="centered">
                  <FormatAlignCenterIcon />
                </ToggleButton>
                <ToggleButton value="right" aria-label="right aligned">
                  <FormatAlignRightIcon />
                </ToggleButton>
                <ToggleButton value="justify" aria-label="justified">
                  <FormatAlignJustifyIcon />
                </ToggleButton>
              </ToggleButtonGroup>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Paper>
  );
}
