const Form = ({ onAdd }) => {
  const handleSubmit = e => {
    e.preventDefault(), e.target.reset();
    onAdd({
      text: e.target.elements.text.value,
      id: Date.now(),
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="text" />
      <button type="submit">Add task</button>
    </form>
  );
};

export default Form;
