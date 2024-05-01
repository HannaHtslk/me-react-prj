const Task = ({ onDelete, data: { id, text } }) => {
  return (
    <div>
      <p>{text}</p>
      <button
        onClick={() => {
          onDelete(id);
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default Task;
