import './TodoListItem.scss';
import {
  MdOutlineCropDin,
  MdCheckBox,
  MdOutlineRemoveCircleOutline,
} from 'react-icons/md';
import cn from 'classnames';

const TodoListItem = ({ todo }) => {
  const { text, checked } = todo;

  return (
    <div className="TodoListItem">
      <div className={cn('checkbox', { checked })}>
        {checked ? <MdCheckBox /> : <MdOutlineCropDin />}
        <div className="text">{text}</div>
      </div>
      <div className="remove">
        <MdOutlineRemoveCircleOutline />
      </div>
    </div>
  );
};

export default TodoListItem;
