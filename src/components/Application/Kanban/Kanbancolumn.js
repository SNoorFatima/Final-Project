import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import { Box, Typography, Button } from '@mui/material';
import KanbanCard from './Kanbancard';

const columnColors = {
  new: '#e3f2fd',
  active: '#fff3e0',
  resolved: '#e8f5e9',
  closed: '#f3e5f5',
};

const KanbanColumn = ({ title, tasks, columnId, onAddTask, onDeleteTask }) => {
  return (
    <Box sx={{ 
      width: '280px', 
      padding: 2, 
      backgroundColor: columnColors[columnId], 
      borderRadius: 2, 
      marginRight: 2, 
      boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)' 
    }}>
      <Typography variant="h6" gutterBottom>{title}</Typography>
      <Droppable droppableId={columnId}>
        {(provided) => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            {tasks.map((task, index) => (
              <KanbanCard key={task.id} task={task} index={index} onDelete={onDeleteTask} />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
      <Button variant="contained" onClick={() => onAddTask(columnId)} sx={{ marginTop: 1, backgroundColor: '#1976d2', color: '#fff' }}>Add Task</Button>
    </Box>
  );
};

export default KanbanColumn;
