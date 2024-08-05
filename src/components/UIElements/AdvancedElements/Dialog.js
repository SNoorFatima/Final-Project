import React, { useState } from "react";
import {
  AppBar,
  Button,
  ButtonBase,
  Card,
  CardHeader,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Paper,
  Slide,
  Stack,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import { Close, Info, Warning, Check, ErrorOutline } from "@mui/icons-material";
import Draggable from "react-draggable";
import muilogo from "../../Utilities/Assets/logoMUI.png";

// Transition for Dialog Animation
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

// Paper Component for Draggable Dialogs
const PaperComponent = (props) => {
  return (
    <Draggable handle="#draggable-dialog-title" cancel={'[class*="MuiDialogContent-root"]'}>
      <Paper {...props} />
    </Draggable>
  );
};

// Simple Dialog
const SimpleDialog = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Card>
      <CardHeader title="Simple Dialog" titleTypographyProps={{ fontSize: "14px" }} />
      <Divider />
      <Paper sx={{ border: "1px solid rgb(227, 232, 239)", p: 2 }}>
        <Button variant="outlined" onClick={handleClickOpen}>
          Open Simple Dialog
        </Button>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Simple Dialog</DialogTitle>
          <DialogContent>
            <DialogContentText>This is a simple dialog.</DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Close</Button>
          </DialogActions>
        </Dialog>
      </Paper>
    </Card>
  );
};

// Sweet Alert
const SweetAlert = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Card>
      <CardHeader title="Sweet Alert" titleTypographyProps={{ fontSize: "14px" }} />
      <Divider />
      <Paper sx={{ border: "1px solid rgb(227, 232, 239)", p: 2 }}>
        <Button variant="outlined" onClick={handleClickOpen}>
          Open Sweet Alert
        </Button>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>
            <Stack direction="row" alignItems="center" spacing={1}>
              <Check fontSize="inherit" />
              <Typography variant="h6">Use Google's location service?</Typography>
            </Stack>
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Disagree</Button>
            <Button variant="contained" onClick={handleClose}>
              Agree
            </Button>
          </DialogActions>
        </Dialog>
      </Paper>
    </Card>
  );
};

// Dialog Animation
const DialogAnimation = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Card>
      <CardHeader title="Dialog Animation" titleTypographyProps={{ fontSize: "14px" }} />
      <Divider />
      <Paper sx={{ border: "1px solid rgb(227, 232, 239)", p: 2 }}>
        <Button variant="outlined" onClick={handleClickOpen}>
          Open Dialog with Animation
        </Button>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>
            <Stack direction="row" alignItems="center" spacing={1}>
              <Check fontSize="inherit" />
              <Typography variant="h6">Use Google's location service?</Typography>
            </Stack>
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} sx={{ color: "rgb(198, 40, 40)" }}>
              Disagree
            </Button>
            <Button variant="contained" onClick={handleClose}>
              Agree
            </Button>
          </DialogActions>
        </Dialog>
      </Paper>
    </Card>
  );
};

// Form Dialog
const FormDialog = () => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "" });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission
    console.log(formData);
    handleClose();
  };

  return (
    <Card>
      <CardHeader title="Form Dialog" titleTypographyProps={{ fontSize: "14px" }} />
      <Divider />
      <Paper sx={{ border: "1px solid rgb(227, 232, 239)", p: 2 }}>
        <Button variant="outlined" onClick={handleClickOpen}>
          Open Form Dialog
        </Button>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Subscribe</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.
            </DialogContentText>
            <form onSubmit={handleSubmit}>
              <TextField
                margin="dense"
                name="email"
                label="Email Address"
                type="email"
                fullWidth
                value={formData.email}
                onChange={handleChange}
              />
              <DialogActions>
                <Button onClick={handleClose} sx={{ color: "rgb(198, 40, 40)" }}>
                  Cancel
                </Button>
                <Button type="submit" variant="contained">
                  Send
                </Button>
              </DialogActions>
            </form>
          </DialogContent>
        </Dialog>
      </Paper>
    </Card>
  );
};

// Customized Dialog
const CustomizedDialog = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Card>
      <CardHeader title="Customized Dialog" titleTypographyProps={{ fontSize: "14px" }} />
      <Divider />
      <Paper sx={{ border: "1px solid rgb(227, 232, 239)", p: 2 }}>
        <Button variant="outlined" onClick={handleClickOpen}>
          Open Customized Dialog
        </Button>
        <Dialog
          open={open}
          onClose={handleClose}
          PaperComponent={PaperComponent}
          aria-labelledby="draggable-dialog-title"
        >
          <Stack direction={"row"} justifyContent={"space-between"}>
            <DialogTitle style={{ cursor: "move" }} id="draggable-dialog-title">
              Modal title
            </DialogTitle>
            <Button onClick={handleClose}>
              <Close />{" "}
            </Button>
          </Stack>
          <Divider />
          <DialogContent>
            <DialogContentText>
              Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
              dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
              ac consectetur ac, vestibulum at eros. Praesent commodo cursus
              magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus
              vel augue laoreet rutrum faucibus dolor auctor. Aenean lacinia
              bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
              scelerisque nisl consectetur et. Donec sed odio dui. Donec
              ullamcorper nulla non metus auctor fringilla.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Save Changes</Button>
          </DialogActions>
        </Dialog>
      </Paper>
    </Card>
  );
};

// Full Screen Dialog
const FullScreenDialog = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Card>
      <CardHeader title="Full Screen Dialog" titleTypographyProps={{ fontSize: "14px" }} />
      <Divider />
      <Paper sx={{ border: "1px solid rgb(227, 232, 239)", p: 2 }}>
        <Button variant="outlined" onClick={handleClickOpen}>
          Open full-screen dialog
        </Button>
        <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
          <AppBar sx={{ position: "relative" }}>
            <Toolbar>
              <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
                <Close />
              </IconButton>
              <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                Sound
              </Typography>
              <Button autoFocus color="inherit" onClick={handleClose}>
                save
              </Button>
            </Toolbar>
          </AppBar>
          <List>
            <ListItem button>
              <ListItemText primary="Phone ringtone" secondary="Titania" />
            </ListItem>
            <Divider />
            <ListItem button>
              <ListItemText primary="Default notification ringtone" secondary="Tethys" />
            </ListItem>
          </List>
        </Dialog>
      </Paper>
    </Card>
  );
};

// Responsive Full Screen Dialog
const ResponsiveFullScreenDialog = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Card>
      <CardHeader title="Responsive Full Screen Dialog" titleTypographyProps={{ fontSize: "14px" }} />
      <Divider />
      <Paper sx={{ border: "1px solid rgb(227, 232, 239)", p: 2 }}>
        <Button variant="outlined" onClick={handleClickOpen}>
          Open responsive full-screen dialog
        </Button>
        <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
          <AppBar sx={{ position: "relative" }}>
            <Toolbar>
              <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
                <Close />
              </IconButton>
              <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                Sound
              </Typography>
              <Button autoFocus color="inherit" onClick={handleClose}>
                save
              </Button>
            </Toolbar>
          </AppBar>
          <List>
            <ListItem button>
              <ListItemText primary="Phone ringtone" secondary="Titania" />
            </ListItem>
            <Divider />
            <ListItem button>
              <ListItemText primary="Default notification ringtone" secondary="Tethys" />
            </ListItem>
          </List>
        </Dialog>
      </Paper>
    </Card>
  );
};

const DialogsExample = () => {
  return (
    <Paper sx={{p:3}}>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography variant="h5">Dialog</Typography>
        <a href="https://mui.com/material-ui/react-dialog/" target="_blank" rel="noopener noreferrer">
          <img src={muilogo} alt="MUI Logo" style={{ height: 40 }} />
        </a>
      </Stack>
      <Divider sx={{mb:2}}/>
    <Grid container spacing={3}>
      <Grid item xs={12} md={6}>
        <SimpleDialog />
      </Grid>
      <Grid item xs={12} md={6}>
        <SweetAlert />
      </Grid>
      <Grid item xs={12} md={6}>
        <DialogAnimation />
      </Grid>
      <Grid item xs={12} md={6}>
        <FormDialog />
      </Grid>
      <Grid item xs={12} md={6}>
        <CustomizedDialog />
      </Grid>
      <Grid item xs={12} md={6}>
        <FullScreenDialog />
      </Grid>
      <Grid item xs={12} md={6}>
        <ResponsiveFullScreenDialog />
      </Grid>
    </Grid>
    </Paper>
  );
};

export default DialogsExample;
