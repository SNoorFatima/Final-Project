import React from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  Paper,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Stack } from '@mui/system';
import muilogo from '../../Utilities/Assets/logoMUI.png';

const BasicAccordion = () => (
  <Card>
    <CardHeader title="Basic Accordion" titleTypographyProps={{ fontSize: '14px' }} />
    <Divider />
    <CardContent>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Accordion #1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Content for Accordion #1</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Accordion #2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Content for Accordion #2</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Accordion #3</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Content for Accordion #3</Typography>
        </AccordionDetails>
      </Accordion>
    </CardContent>
  </Card>
);

const DisabledAccordion = () => (
  <Card>
    <CardHeader title="Disabled Accordion" titleTypographyProps={{ fontSize: '14px' }} />
    <Divider />
    <CardContent>
      <Accordion disabled>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Accordion #1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Content for Accordion #1</Typography>
        </AccordionDetails>
      </Accordion>
    </CardContent>
  </Card>
);

const DefaultExpandedAccordion = () => (
  <Card>
    <CardHeader title="Default Expanded Accordion" titleTypographyProps={{ fontSize: '14px' }} />
    <Divider />
    <CardContent>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Accordion #1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Content for Accordion #1</Typography>
        </AccordionDetails>
      </Accordion>
    </CardContent>
  </Card>
);

const ControlledAccordion = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (_event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Card>
      <CardHeader title="Controlled Accordion" titleTypographyProps={{ fontSize: '14px' }} />
      <Divider />
      <CardContent>
        <Accordion
          expanded={expanded === 'panel1'}
          onChange={handleChange('panel1')}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Accordion #1</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>Content for Accordion #1</Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === 'panel2'}
          onChange={handleChange('panel2')}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Accordion #2</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>Content for Accordion #2</Typography>
          </AccordionDetails>
        </Accordion>
      </CardContent>
    </Card>
  );
};

const MultipleExpandedAccordion = () => (
  <Card>
    <CardHeader title="Multiple Expanded Accordion" titleTypographyProps={{ fontSize: '14px' }} />
    <Divider />
    <CardContent>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Accordion #1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Content for Accordion #1</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Accordion #2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Content for Accordion #2</Typography>
        </AccordionDetails>
      </Accordion>
    </CardContent>
  </Card>
);

const AccordionsPlayground = () => {
  return (
    <Paper sx={{p:3}}>
       <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography variant="h5">Accordion</Typography>
        <a href="https://mui.com/material-ui/react-accordion/" target="_blank" rel="noopener noreferrer">
          <img src={muilogo} alt="MUI Logo" style={{ height: 40 }} />
        </a>
      </Stack>
      <Divider sx={{ mb: 2 }} />

    <Grid container spacing={3}>
      <Grid item xs={12} sm={6}>
        <BasicAccordion />
      </Grid>
      <Grid item xs={12} sm={6}>
        <DisabledAccordion />
      </Grid>
      <Grid item xs={12} sm={6}>
        <DefaultExpandedAccordion />
      </Grid>
      <Grid item xs={12} sm={6}>
        <ControlledAccordion />
      </Grid>
      <Grid item xs={12} sm={6}>
        <MultipleExpandedAccordion />
      </Grid>
    </Grid>
    </Paper>
  );
};

export default AccordionsPlayground;
