// ComposeMail.js
import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField } from '@mui/material';

const ComposeMail = ({ open, handleClose }) => {
  const [formData, setFormData] = useState({ to: '', subject: '', body: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSend = () => {
    console.log(formData);
    handleClose();
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Compose Mail</DialogTitle>
      <DialogContent>
        <TextField
          margin="dense"
          name="to"
          label="To"
          type="email"
          fullWidth
          variant="standard"
          value={formData.to}
          onChange={handleChange}
        />
        <TextField
          margin="dense"
          name="subject"
          label="Subject"
          fullWidth
          variant="standard"
          value={formData.subject}
          onChange={handleChange}
        />
        <TextField
          margin="dense"
          name="body"
          label="Body"
          fullWidth
          multiline
          rows={4}
          variant="standard"
          value={formData.body}
          onChange={handleChange}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleSend}>Send</Button>
      </DialogActions>
    </Dialog>
  );
};

export default ComposeMail;
