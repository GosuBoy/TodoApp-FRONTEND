import TodoItem from "./TodoItem";
import styles from "../styles/list.module.css";

function TodoList({ list, handler, onDelete }) {
  const handleDelete = (itemId) => {
    
    onDelete(itemId);
  };

  return (
    <ol className={styles['todoList']}>
      {list.map((item) => (
        <TodoItem key={item.id} data={item} onEdit={handler} onDelete={handleDelete} />
      ))}
    </ol>
  );
}

export { TodoList };
