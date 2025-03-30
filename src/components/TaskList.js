import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTask, deleteTask } from '../redux/actions';
import { List, ListItem, ListItemText, Checkbox, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

function TaskList() {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const handleToggle = (id) => {
    dispatch(toggleTask(id));
  };

  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };

  return (
    <List>
      {tasks.map((task) => (
        <ListItem key={task.id}>
          <Checkbox
            checked={task.completed}
            onClick={() => handleToggle(task.id)}
          />
          <ListItemText primary={task.name} style={{ textDecoration: task.completed ? 'line-through' : 'none' }} />
          <IconButton edge="end" onClick={() => handleDelete(task.id)}>
            <DeleteIcon />
          </IconButton>
        </ListItem>
      ))}
    </List>
  );
}

export default TaskList;
