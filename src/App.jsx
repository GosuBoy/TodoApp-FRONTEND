import { useState } from 'react'

import './App.css'

import TodoSearch from './components/TodoSearch'
import TodoAdd from './components/TodoAdd';
import { TodoList } from './components/TodoList';

import { generateUUID } from './utilities/id_generator';
import TodoHr from './components/TodoHr';
import TodoFooter from './components/TodoFooter';


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

function App() {

  const [items, setItems] = useState(MockupData);
  const [filteredItems, setFilteredItems] = useState([]);


  console.log(filteredItems )

  function searchItem ( itemName) {

    const searchRegex = new RegExp(`${itemName}`, 'i');

    const found = items.filter((item) =>
    
    searchRegex.test(item.name));
    setFilteredItems([...found]);
  }

  function addItem(item) {
    const newItem = {
      name: item,
      id: generateUUID(),
      completed: false,
    };

    setItems([...items, newItem]);
  }

  function deleteItem(itemId) {
    setItems(items.filter((item) => item.id !== itemId));
  }

  function editItem(event) {
    const itemIndex = items.findIndex((item) => item.id === event.target.parentNode.id);
    const status = items[itemIndex].completed;
    status ? (items[itemIndex].completed = false) : (items[itemIndex].completed = true);
    setItems([...items]);
  }

  return (
    <>
      <TodoSearch handler={searchItem} />
      <TodoAdd handler={addItem} />
      <TodoHr />
      <TodoList list={filteredItems.length ? filteredItems : items} handler={editItem} onDelete={deleteItem} />
      <TodoFooter />
    </>
  );
}

export default App;
