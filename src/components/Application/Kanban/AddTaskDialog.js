import React, { useState } from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, TextField, Button } from '@mui/material';

const AddTaskDialog = ({ open, handleClose, handleAddTask }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleAdd = () => {
    handleAddTask(title, description);
    setTitle('');
    setDescription('');
    handleClose();
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Add Task</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          label="Title"
          fullWidth
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextField
          margin="dense"
          label="Description"
          fullWidth
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleAdd} color="primary">Add</Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddTaskDialog;
