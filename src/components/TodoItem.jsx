import item from '../styles/item.module.css';

function TodoItem({ data, onEdit, onDelete }) {
  const handleDelete = () => {
    
    onDelete(data.id);
  };

  return (
    <li className={`${item['todoItem']} ${data.completed ? item['Completed'] : ''}`} id={data.id}>
      <div
        className={`${item['todoItem__Checkbox']} ${data.completed ? item['todoItem__Checkbox__Completed'] : ''}`}
        onClick={onEdit}
      ></div>
      {data.name}
      <button className={item['todoItem__DeleteButton']} onClick={handleDelete}>
        X
      </button>
    </li>
  );
}

export default TodoItem;
