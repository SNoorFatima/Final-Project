import React, { useState } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { DragDropContext } from 'react-beautiful-dnd';
import KanbanColumn from './Kanbancolumn';
import AddTaskDialog from './AddTaskDialog';
 
const KanbanBoard = () => {
  const [columns, setColumns] = useState({
    new: { title: 'New', tasks: [] },
    active: { title: 'Active', tasks: [] },
    resolved: { title: 'Resolved', tasks: [] },
    closed: { title: 'Closed', tasks: [] },
  });
  const [openDialog, setOpenDialog] = useState(false);
  const [currentColumn, setCurrentColumn] = useState('');

  const handleAddTask = (title, description) => {
    const newTask = { id: Date.now(), title, description };
    setColumns((prevColumns) => ({
      ...prevColumns,
      [currentColumn]: {
        ...prevColumns[currentColumn],
        tasks: [...prevColumns[currentColumn].tasks, newTask],
      },
    }));
  };

  const handleDeleteTask = (id) => {
    setColumns((prevColumns) => {
      const newColumns = { ...prevColumns };
      for (const column in newColumns) {
        newColumns[column].tasks = newColumns[column].tasks.filter((task) => task.id !== id);
      }
      return newColumns;
    });
  };

  const handleDragEnd = (result) => {
    const { destination, source } = result;
    if (!destination) return;

    const sourceColumn = columns[source.droppableId];
    const destColumn = columns[destination.droppableId];
    const sourceTasks = [...sourceColumn.tasks];
    const [removed] = sourceTasks.splice(source.index, 1);

    if (source.droppableId === destination.droppableId) {
      sourceTasks.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: { ...sourceColumn, tasks: sourceTasks },
      });
    } else {
      const destTasks = [...destColumn.tasks];
      destTasks.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: { ...sourceColumn, tasks: sourceTasks },
        [destination.droppableId]: { ...destColumn, tasks: destTasks },
      });
    }
  };

  return (
    <Box sx={{ padding: 3, backgroundColor: '#f0f2f5' }}>
      <Typography variant="h4" gutterBottom>Kanban Board</Typography>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Grid container spacing={2}>
          {Object.keys(columns).map((columnId) => (
            <Grid item key={columnId}>
              <KanbanColumn
                title={columns[columnId].title}
                tasks={columns[columnId].tasks}
                columnId={columnId}
                onAddTask={(colId) => {
                  setCurrentColumn(colId);
                  setOpenDialog(true);
                }}
                onDeleteTask={handleDeleteTask}
              />
            </Grid>
          ))}
        </Grid>
      </DragDropContext>
      <AddTaskDialog
        open={openDialog}
        handleClose={() => setOpenDialog(false)}
        handleAddTask={handleAddTask}
      />
    </Box>
  );
};

export default KanbanBoard;
