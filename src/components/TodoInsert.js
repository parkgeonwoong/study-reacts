import { useState, useCallback } from 'react';
import { MdAddTask } from 'react-icons/md';
import './TodoInsert.scss';

const TodoInsert = () => {
  const [value, setValue] = useState('');

  const onChange = useCallback((e) => {
    setValue(e.target.value);
    console.log(e.target.value);
  }, []);

  return (
    <form className="TodoInsert">
      <input placeholder="Add Task" value={value} onChange={onChange}></input>
      <button type="submit">
        <MdAddTask />
      </button>
    </form>
  );
};

export default TodoInsert;
