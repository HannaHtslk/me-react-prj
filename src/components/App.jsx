import { useState } from 'react';
import Form from './Form/Form';
import Filter from './Filter/Filter';
import TaskList from './TaskList/TaskList';
import initialTasks from '../data/tasks.json';

const App = () => {
  const [tasks, setTasks] = useState(initialTasks);
  const [filter, setFilter] = useState('');

  const addTask = newTask => {
    setTasks(prev => {
      return [...prev, newTask];
    });
  };

  const deleteTask = taskId => {
    setTasks(prev => {
      return prev.filter(task => task.id !== taskId);
    });
  };
  const visibleTasks = tasks.filter(task =>
    task.text.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <>
      <Form onAdd={addTask} />
      <Filter value={filter} onFilter={setFilter} />
      <TaskList onDelete={deleteTask} tasks={visibleTasks} />
    </>
  );
};

export default App;
