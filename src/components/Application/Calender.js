import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import {
  Paper,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  IconButton,
  FormControlLabel,
  Checkbox,
  Typography,
  Box,
  RadioGroup,
  Radio,
  Breadcrumbs,
  Grid,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';
import { Home } from '@mui/icons-material';

const localizer = momentLocalizer(moment);

const EventCalendar = () => {
  const [events, setEvents] = useState([
    {
      title: 'Conference',
      start: new Date(2024, 6, 23, 10, 0),
      end: new Date(2024, 6, 23, 14, 0),
      allDay: false,
      color: 'orange',
      textColor: 'black',
    },
    {
      title: 'Birthday Party',
      start: new Date(2024, 6, 26, 19, 0),
      end: new Date(2024, 6, 26, 23, 30),
      allDay: false,
      color: 'purple',
      textColor: 'white',
    },
    // Add more initial events here
  ]);

  const [open, setOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [newEvent, setNewEvent] = useState({
    title: '',
    description: '',
    start: new Date(),
    end: new Date(),
    allDay: false,
    color: 'default',
    textColor: 'default',
  });

  const handleSelectSlot = ({ start, end }) => {
    setSelectedEvent(null);
    setNewEvent({
      title: '',
      description: '',
      start,
      end,
      allDay: false,
      color: 'default',
      textColor: 'default',
    });
    setOpen(true);
  };

  const handleAddEvent = () => {
    setEvents([...events, newEvent]);
    setOpen(false);
  };

  const handleSelectEvent = (event) => {
    setSelectedEvent(event);
    setNewEvent(event);
    setOpen(true);
  };

  const handleEditEvent = () => {
    setEvents(events.map((event) => (event === selectedEvent ? newEvent : event)));
    setOpen(false);
  };

  const handleDeleteEvent = () => {
    setEvents(events.filter((event) => event !== selectedEvent));
    setOpen(false);
  };

  const eventPropGetter = (event) => {
    const backgroundColor = event.color !== 'default' ? event.color : '#3174ad'; // Default color if none is selected
    const color = event.textColor !== 'default' ? event.textColor : '#fff'; // Default text color

    return {
      style: {
        backgroundColor,
        color,
      },
    };
  };

  return (
    <Grid container spacing={2}>
    <Grid item xs={12}>
 <>
   <Paper >
     <Grid container p={2} display="flex" justifyContent={'space-between'}>
       <Grid item>
       <Typography variant="h6" sx={{ marginRight: '1rem' }}>Calender</Typography>
       </Grid>
       <Grid item>
       <Breadcrumbs separator="›">
         <Link underline="hover" color="inherit" href="/">
           <Home sx={{
             marginRight: '0px',
             marginTop: '-2px',
             width: '1rem',
             height: '1rem',
             color: 'rgb(103, 58, 183)'
           }} />
         </Link>
        
         <Typography color="rgb(105, 117, 134)">Calender</Typography>
       </Breadcrumbs>
       </Grid>
     </Grid>
   </Paper>
 </>
 </Grid>
 <Grid item xs={12}>
    <Paper sx={{ padding: 3 }} className="calendar-container">
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 2 }}>
        <Button
          variant="contained"
          color="primary"
          startIcon={<AddIcon />}
          onClick={() => setOpen(true)}
        >
          Add New Event
        </Button>
        <Typography variant="h4">Event Calendar</Typography>
      </Box>
      <Calendar
        localizer={localizer}
        events={events}
        selectable
        onSelectSlot={handleSelectSlot}
        onSelectEvent={handleSelectEvent}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 700 }}
        views={['month']}
        defaultView="month"
        eventPropGetter={eventPropGetter}
      />
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>{selectedEvent ? 'Edit Event' : 'Add New Event'}</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Event Title"
            type="text"
            fullWidth
            value={newEvent.title}
            onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
          />
          <TextField
            margin="dense"
            label="Description"
            type="text"
            fullWidth
            value={newEvent.description}
            onChange={(e) => setNewEvent({ ...newEvent, description: e.target.value })}
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={newEvent.allDay}
                onChange={(e) => setNewEvent({ ...newEvent, allDay: e.target.checked })}
                name="allDay"
              />
            }
            label="All day"
          />
          <TextField
            margin="dense"
            label="Start Date"
            type="datetime-local"
            fullWidth
            value={moment(newEvent.start).format('YYYY-MM-DDTHH:mm')}
            onChange={(e) =>
              setNewEvent({ ...newEvent, start: new Date(e.target.value) })
            }
          />
          <TextField
            margin="dense"
            label="End Date"
            type="datetime-local"
            fullWidth
            value={moment(newEvent.end).format('YYYY-MM-DDTHH:mm')}
            onChange={(e) =>
              setNewEvent({ ...newEvent, end: new Date(e.target.value) })
            }
          />
          <Typography variant="h6" sx={{ marginTop: 2 }}>Background Color</Typography>
          <RadioGroup
            row
            value={newEvent.color}
            onChange={(e) => setNewEvent({ ...newEvent, color: e.target.value })}
          >
            <FormControlLabel value="default" control={<Radio />} label="Default" />
            <FormControlLabel value="red" control={<Radio />} label="Red" />
            <FormControlLabel value="blue" control={<Radio />} label="Blue" />
            <FormControlLabel value="green" control={<Radio />} label="Green" />
            <FormControlLabel value="orange" control={<Radio />} label="Orange" />
            <FormControlLabel value="purple" control={<Radio />} label="Purple" />
          </RadioGroup>
          <Typography variant="h6" sx={{ marginTop: 2 }}>Text Color</Typography>
          <RadioGroup
            row
            value={newEvent.textColor}
            onChange={(e) => setNewEvent({ ...newEvent, textColor: e.target.value })}
          >
            <FormControlLabel value="default" control={<Radio />} label="Default" />
            <FormControlLabel value="black" control={<Radio />} label="Black" />
            <FormControlLabel value="white" control={<Radio />} label="White" />
            <FormControlLabel value="red" control={<Radio />} label="Red" />
            <FormControlLabel value="blue" control={<Radio />} label="Blue" />
            <FormControlLabel value="green" control={<Radio />} label="Green" />
            <FormControlLabel value="orange" control={<Radio />} label="Orange" />
            <FormControlLabel value="purple" control={<Radio />} label="Purple" />
          </RadioGroup>
        </DialogContent>
        <DialogActions>
          {selectedEvent && (
            <IconButton onClick={handleDeleteEvent} color="secondary">
              <DeleteIcon />
            </IconButton>
          )}
          <Button onClick={() => setOpen(false)} color="secondary">
            Cancel
          </Button>
          <Button onClick={selectedEvent ? handleEditEvent : handleAddEvent} color="primary">
            {selectedEvent ? 'Edit' : 'Add'}
          </Button>
        </DialogActions>
      </Dialog>
    </Paper>
    </Grid>
    </Grid>
  );
};

export default EventCalendar;
