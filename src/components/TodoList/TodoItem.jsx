import s from './TodoList.module.css';

const TodoItem = ({ id, completed, todo, handleDelete }) => {
  return (
    <li className={s.item}>
      <input type="checkbox" />
      <span>{todo}</span>
      <button
        onClick={() => handleDelete(id)}
        className="btn border"
        size="18px"
      >
        Delete
      </button>
    </li>
  );
};

export default TodoItem;
