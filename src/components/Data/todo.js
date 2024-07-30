import React, { useState } from 'react';
import { List, ListItem, Checkbox, Typography, IconButton, Paper } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

const initialTasks = [
  { text: 'Check your Email', completed: true },
  { text: 'Make YouTube Video', completed: true },
  { text: 'Create Banner', completed: true },
  { text: 'Upload Project', completed: false },
  { text: 'Update Task', completed: false },
  { text: 'Task Issue', completed: false },
];

const ToDoList = () => {
  const [tasks, setTasks] = useState(initialTasks);

  const handleToggle = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  return (
    <Paper style={{ padding: '20px', maxWidth: '400px', margin: 'auto' }}>
      <Typography variant="h6" gutterBottom>
        To Do List
      </Typography>
      <List>
        {tasks.map((task, index) => (
          <ListItem key={index} style={{ display: 'flex', alignItems: 'center' }}>
            <Checkbox
              checked={task.completed}
              onChange={() => handleToggle(index)}
              color="primary"
            />
            <Typography
              variant="body1"
              style={{
                textDecoration: task.completed ? 'line-through' : 'none',
                color: task.completed ? 'gray' : 'black',
              }}
            >
              {task.text}
            </Typography>
          </ListItem>
        ))}
      </List>
      <IconButton
        color="primary"
        aria-label="add task"
        style={{ position: 'absolute', bottom: '20px', right: '20px' }}
      >
        <AddIcon />
      </IconButton>
    </Paper>
  );
};

export default ToDoList;
