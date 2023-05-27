import TodoItem from "./TodoItem"

import styles from "../styles/list.module.css"

function TodoList( { list , handler } ) {
    return (
        <ol className={styles['todoList']}>
            {
            //list.map((item) => ( <li key={item.id}>{item.name}</li> )) 
            list.map((item) => ( <TodoItem key={item.id} data={item}  onEdit={handler} />))
            }
        </ol>
  );
}

export { TodoList};
