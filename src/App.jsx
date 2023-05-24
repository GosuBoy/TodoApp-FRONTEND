import { useState } from 'react'

import './App.css'

import TodoSearch from './components/TodoSearch'
import TodoAdd from './components/TodoAdd';
import TodoList from './components/TodoList';
import { generateUUID } from './utilities/id_generator';

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

  const [ items , setItems ] = useState([...MockupData]) ;

  const [ filteredItems , setFilteredItems ] = useState([]) ;

  function searchItem ( itemName ) {
    
    const searchRegex = new RegExp(`${itemName}`, "i"); 

    const found = items.filter( item => 

      searchRegex.test(item.name) 
      //return searchRegex.test(item.name) && item.name
    )

    console.log(found) ;
    setFilteredItems([...found]) ; 
    console.log(filteredItems)

  }

  function addItem ( item ) {

    const newItem = {
      name: item,
      id: generateUUID() , 
      completed: false, 
    }

    setItems([
      ...items,
      newItem
    ])

    console.log(newItem); 

  }

  return (
    <>
      <TodoSearch handler={searchItem} />
      <TodoAdd handler={addItem} />
      <TodoList list={ filteredItems.length ? filteredItems : items } />
    </>
  )
}

export default App
