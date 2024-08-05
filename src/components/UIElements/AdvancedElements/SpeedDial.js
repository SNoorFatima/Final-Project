import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import Switch from '@mui/material/Switch';
import Link from '@mui/material/Link';
import Backdrop from '@mui/material/Backdrop';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';
import EditIcon from '@mui/icons-material/Edit';
import { Paper, Grid, Divider } from '@mui/material';
import Stack from '@mui/material/Stack';
import muilogo from "../../Utilities/Assets/logoMUI.png";

const StyledSpeedDial = styled(SpeedDial)(({ theme }) => ({
  position: 'absolute',
  '&.MuiSpeedDial-directionUp, &.MuiSpeedDial-directionLeft': {
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  '&.MuiSpeedDial-directionDown, &.MuiSpeedDial-directionRight': {
    top: theme.spacing(2),
    left: theme.spacing(2),
  },
}));

const actions = [
  { icon: <FileCopyIcon />, name: 'Copy' },
  { icon: <SaveIcon />, name: 'Save' },
  { icon: <PrintIcon />, name: 'Print' },
  { icon: <ShareIcon />, name: 'Share' },
];

export default function SpeedDialPlayground() {
  const [direction, setDirection] = React.useState('up');
  const [hidden, setHidden] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  const handleDirectionChange = (event) => {
    setDirection(event.target.value);
  };

  const handleHiddenChange = (event) => {
    setHidden(event.target.checked);
  };

  const handleToggle = () => {
    setOpen(!open);
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Paper sx={{ flexWrap: 'wrap', gap: 2, padding: 2 }}>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography variant="h5">SpeedDial</Typography>
        <a href="https://mui.com/material-ui/react-speed-dial/" target="_blank" rel="noopener noreferrer">
          <img src={muilogo} alt="MUI Logo" style={{ height: 40 }} />
        </a>
      </Stack>
      <Divider sx={{mb:2}}/>
      <Grid container spacing={2}>
        {/* Basic SpeedDial */}
        <Grid item xs={12} sm={6}>
          <Card sx={{ position: 'relative' }}>
            <CardContent>
              <Typography variant="h6">Basic</Typography>
              <FormControlLabel
                control={
                  <Switch checked={hidden} onChange={handleHiddenChange} color="primary" />
                }
                label="Hidden"
              />
              <FormControl component="fieldset" sx={{ mt: 1, display: 'flex' }}>
                <FormLabel component="legend">Direction</FormLabel>
                <RadioGroup
                  aria-label="direction"
                  name="direction"
                  value={direction}
                  onChange={handleDirectionChange}
                  row
                >
                  <FormControlLabel value="up" control={<Radio />} label="Up" />
                  <FormControlLabel value="right" control={<Radio />} label="Right" />
                  <FormControlLabel value="down" control={<Radio />} label="Down" />
                  <FormControlLabel value="left" control={<Radio />} label="Left" />
                </RadioGroup>
              </FormControl>
              <Box sx={{ position: 'relative', mt: 3, height: 320 }}>
                <StyledSpeedDial
                  ariaLabel="SpeedDial basic"
                  hidden={hidden}
                  icon={<SpeedDialIcon />}
                  direction={direction}
                >
                  {actions.map((action) => (
                    <SpeedDialAction
                      key={action.name}
                      icon={action.icon}
                      tooltipTitle={action.name}
                    />
                  ))}
                </StyledSpeedDial>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Custom Close Icon SpeedDial */}
        <Grid item xs={12} sm={6}>
          <Card sx={{ position: 'relative' }}>
            <CardContent>
              <Typography variant="h6">Custom Close Icon</Typography>
              <Link component="button" onClick={handleToggle}>
                Toggle Speed Dial
              </Link>
              <Box sx={{ position: 'relative', mt: 3, height: 320 }}>
                <SpeedDial
                  ariaLabel="SpeedDial custom icon"
                  icon={<SpeedDialIcon openIcon={<EditIcon />} />}
                  open={open}
                  onOpen={handleToggle}
                  onClose={handleToggle}
                  sx={{ position: 'absolute', bottom: 16, right: 16 }}
                >
                  {actions.map((action) => (
                    <SpeedDialAction
                      key={action.name}
                      icon={action.icon}
                      tooltipTitle={action.name}
                    />
                  ))}
                </SpeedDial>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Persistent Icon SpeedDial */}
        <Grid item xs={12} sm={6}>
          <Card sx={{ position: 'relative' }}>
            <CardContent>
              <Typography variant="h6">Persistent Icon</Typography>
              <Link component="button" onClick={handleToggle}>
                Toggle Speed Dial
              </Link>
              <Box sx={{ position: 'relative', mt: 3, height: 320 }}>
                <SpeedDial
                  ariaLabel="SpeedDial persistent icon"
                  icon={<SpeedDialIcon />}
                  open={open}
                  onOpen={handleToggle}
                  onClose={handleToggle}
                  sx={{ position: 'absolute', bottom: 16, right: 16 }}
                >
                  {actions.map((action) => (
                    <SpeedDialAction
                      key={action.name}
                      icon={action.icon}
                      tooltipTitle={action.name}
                    />
                  ))}
                </SpeedDial>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        
      </Grid>
    </Paper>
  );
}
