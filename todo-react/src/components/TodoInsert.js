import { useState, useCallback } from 'react';
import { MdAddTask } from 'react-icons/md';
import './TodoInsert.scss';

const TodoInsert = ({ onInsert }) => {
  const [value, setValue] = useState('');

  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  const onSubmit = useCallback(
    (e) => {
      onInsert(value);
      setValue('');
      e.preventDefault();
    },
    [onInsert, value],
  );

  return (
    <form className="TodoInsert" onSubmit={onSubmit}>
      <input placeholder="Add Task" value={value} onChange={onChange}></input>
      <button type="submit">
        <MdAddTask />
      </button>
    </form>
  );
};

export default TodoInsert;
