const TodoItem = ({ todo, onToggle, onRemove }) => {
  return (
    <div>
      <input type="checkbox" />
      <span>Test text</span>
      <button>remove</button>
    </div>
  );
};

const Todos = ({
  input,
  todos,
  onChangeInput,
  onInsert,
  onRemove,
  onToggle,
}) => {
  const onSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input />
        <button type="submit">submit</button>
      </form>
      <div>
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </div>
    </div>
  );
};

export default Todos;
