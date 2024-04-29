import s from './TodoList.module.css';
import { useState } from 'react';
import data from '../../data/todos.json';
import TodoItem from './TodoItem';

const TodoList = () => {
  const [todos, setTodos] = useState(data);

  //delete data

  const handleDelete = id => {
    const newTodos = todos.filter(item => item.id !== id);
    console.log(newTodos);
    setTodos(prev => prev + prev.filter(el => el !== newTodos));
  };

  return (
    <>
      <div className="flex">
        <input className={s.input} />
        <button className="btn border">Add</button>
      </div>
      <ul className={s.list}>
        {todos.map(item => {
          return (
            <TodoItem key={item.id} {...item} handleDelete={handleDelete} />
          );
        })}
      </ul>
    </>
  );
};

export default TodoList;
