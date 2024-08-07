import React, { useState } from 'react';
import { Box, Breadcrumbs, Grid, Paper, Typography } from '@mui/material';
import { DragDropContext } from 'react-beautiful-dnd';
import KanbanColumn from './Kanbancolumn';
import AddTaskDialog from './AddTaskDialog';
import { Link } from 'react-router-dom';
import { Home } from '@mui/icons-material';
 
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
    <Grid container spacing={2}>
    <Grid item xs={12}>
 <>
   <Paper >
     <Grid container p={2} display="flex" justifyContent={'space-between'}>
       <Grid item>
       <Typography variant="h6" sx={{ marginRight: '1rem' }}>Kanban</Typography>
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
        
         <Typography color="rgb(105, 117, 134)">Kanban</Typography>
       </Breadcrumbs>
       </Grid>
     </Grid>
   </Paper>
 </>
 </Grid>
 <Grid item>
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
    </Grid>
    </Grid>
  );
};

export default KanbanBoard;
