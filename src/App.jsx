import { useState } from 'react'

import './App.css'
import TodoSearch from './components/TodoSearch'
import TodoAdd from './components/TodoAdd';
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
    name: 'Hacer la cena',
    id: 'd1e28697-fc0b-4db2-8077-daf6d8abedb3',
    completed: false
  }
]

function App() {

  const [ items , setItems ] = useState([...MockupData]) ; 

  function searchItem ( itemName ) {
    
    const searchRegex = new RegExp(`${itemName}`, "i"); 

    const found = items.find( item => {
      return searchRegex.test(item.name) && item.name
    })

    console.log(found) ;

  }

  function addItem ( item ) {


    console.log({
      name: item,
      id: generateUUID() , 
      completed: false, 
    }); 

  }

  return (
    <>
      <TodoSearch handler={searchItem} />
      <TodoAdd handler={addItem} />
    </>
  )
}

export default App
