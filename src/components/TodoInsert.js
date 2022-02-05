import { MdAddTask } from 'react-icons/md';
import './TodoInsert.scss';

const TodoInsert = () => {
  return (
    <form className="TodoInsert">
      <input placeholder="Add Task"></input>
      <button type="submit">
        <MdAddTask />
      </button>
    </form>
  );
};

export default TodoInsert;
