import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { Card, CardContent, Typography, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const KanbanCard = ({ task, index, onDelete }) => {
  return (
    <Draggable draggableId={task.id.toString()} index={index}>
      {(provided) => (
        <Card
          variant="outlined"
          sx={{ 
            marginBottom: 1, 
            width: '250px', 
            height: '150px',
            backgroundColor: '#fff',
            borderRadius: 2,
            boxShadow: '0 2px 5px rgba(0, 0, 0, 0.15)',
          }} // Adjusted width, height, and styles
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <CardContent>
            <Typography variant="h6" noWrap>{task.title}</Typography>
            <Typography variant="body2" noWrap>{task.description}</Typography>
            <IconButton
              aria-label="delete"
              onClick={() => onDelete(task.id)}
              size="small"
              sx={{ float: 'right', marginTop: -5 }}
            >
              <DeleteIcon fontSize="small" />
            </IconButton>
          </CardContent>
        </Card>
      )}
    </Draggable>
  );
};

export default KanbanCard;
