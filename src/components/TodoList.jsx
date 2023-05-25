import "../styles/TodoList.css"
import { TodoItem } from './TodoItem';
import { useState } from "react";

const MockupData = [ // ESTO ESTARIA EN LA DATABASE  
  {
    name: 'Hacer la cena',
    id: '44d6f2be-a4f0-4159-8672-bb14a12ce27b',
    completed: false
  },
  {
    name: 'Ir a la ceremonia',
    id: '22b3f2a7-112e-4e31-b546-e11c302a3180',
    completed: false
  },
  {
    name: 'Comprar pollo',
    id: 'd1e28697-fc0b-4db2-8077-daf6d8abedb3',
    completed: false
  }
]

function TodoList({ list }) {

  const [ items , setItems ] = useState([...MockupData]) ;


  const completeTodo = (name) => {
    const newItems = [...items];
    const itemsIndex = newItems.findIndex((item) => item.name === name);

    newItems[itemsIndex].completed = !newItems[itemsIndex].completed;
    // ? (newTodos[todoIndex].completed = false) //Alternative solution
    // : (newTodos[todoIndex].completed = true); //Alternative solution
    setItems(newItems);
  };
  const deleteTodo = (name) => {
    const newItems = [...items];
    const itemsIndex = newItems.findIndex((item) => item.name === name);

    newItems.splice(itemsIndex, 1);
    setItems(newItems);
  };
  return (
  <ul className="TodoList">
    {
            list.map((item) => ( <TodoItem
              key={item.id}
              name={item.name}
              id={item.id}
              completed={item.completed}
              onComplete={() => completeTodo(item.name)}
              onDelete={() => deleteTodo(item.name)}
            /> )) 
            }
    </ul>
  );
}

export { TodoList};
