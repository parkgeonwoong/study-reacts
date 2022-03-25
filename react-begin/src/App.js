import { useEffect, useState } from "react";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const onChange = (event) => setTodo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    // console.log(todo);
    if (todo === "") {
      return;
    }
    setTodos((currentArray) => [todo, ...currentArray]);
    // setTodos(() => todos.concat(todo));
    setTodo("");
  };
  console.log(todos);

  return (
    <div>
      <h1>My ToDo ({todos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={todo}
          type="text"
          placeholder="Todo"
        />
        <button>Add To Do</button>
      </form>
      <hr />
      {todos.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </div>
  );
}

export default App;
