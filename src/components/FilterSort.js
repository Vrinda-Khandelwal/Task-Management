import React from 'react';
import { useDispatch } from 'react-redux';
import { filterTasks, sortTasks } from '../redux/actions';
import { Button, ButtonGroup } from '@mui/material';

function FilterSort() {
  const dispatch = useDispatch();

  const handleFilter = (status) => {
    dispatch(filterTasks(status));
  };

  const handleSort = (criteria) => {
    dispatch(sortTasks(criteria));
  };

  return (
    <ButtonGroup>
      <Button onClick={() => handleFilter('all')}>All</Button>
      <Button onClick={() => handleFilter('completed')}>Completed</Button>
      <Button onClick={() => handleFilter('incomplete')}>Incomplete</Button>
      <Button onClick={() => handleSort('priority')}>Sort by Priority</Button>
      <Button onClick={() => handleSort('date')}>Sort by Date</Button>
    </ButtonGroup>
  );
}

export default FilterSort;
