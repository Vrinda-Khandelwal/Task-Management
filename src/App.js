import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import { Container, Typography } from '@mui/material';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import FilterSort from './components/FilterSort';

function App() {
  return (
    <Provider store={store}>
      <Container maxWidth="md">
        <Typography variant="h4" gutterBottom>
          Task Management App
        </Typography>
        <TaskForm />
        <FilterSort />
        <TaskList />
      </Container>
    </Provider>
  );
}

export default App;
