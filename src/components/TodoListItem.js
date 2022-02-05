import './TodoListItem.scss';
import {
  MdOutlineCropDin,
  MdCheckBox,
  MdOutlineRemoveCircleOutline,
} from 'react-icons/md';

const TodoListItem = () => {
  return (
    <div className="TodoListItem">
      <div className="checkbox">
        <MdOutlineCropDin />
        <div className="text">Task</div>
      </div>
      <div className="remove">
        <MdOutlineRemoveCircleOutline />
      </div>
    </div>
  );
};

export default TodoListItem;
