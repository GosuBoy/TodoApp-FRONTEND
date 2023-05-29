import TodoItem from "./TodoItem";
import styles from "../styles/list.module.css";

function TodoList({ list, editHandler, removeHandler , checkHandler}) {

  return (
    <ul className={styles['todoList']}>
      {list.map((item) => (
        <TodoItem 
          key={item.id} 
          data={item}
          edit={editHandler}
          remove={removeHandler}
          check={checkHandler}
        />
      ))}
    </ul>
  );
}

export default TodoList ;
