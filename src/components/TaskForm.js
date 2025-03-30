import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/actions';
import { TextField, Button, Box } from '@mui/material';

function TaskForm() {
  const [taskName, setTaskName] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskName) {
      dispatch(addTask(taskName));
      setTaskName('');
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <TextField
        label="Task Name"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        fullWidth
        margin="normal"
      />
      <Button type="submit" variant="contained" color="primary">
        Add Task
      </Button>
    </Box>
  );
}

export default TaskForm;
