import { useEffect, useState } from "react";

const getLocalStorage = () => {
  let list = localStorage.getItem("list");
  if (list) {
    return (list = JSON.parse(localStorage.getItem("list")));
  } else {
    return [];
  }
};

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState(getLocalStorage());

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
  // console.log(todos)
  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(todos));
  }, [todos]);

  return (
    <div>
      <h1>My ToDo </h1>
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
      <ul>
        {todos.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
