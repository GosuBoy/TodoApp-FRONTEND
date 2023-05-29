import { useEffect, useState } from 'react'
import { generateUUID } from './utilities/id_generator';

import './App.css'

import TodoSearch from './components/TodoSearch'
import TodoAdd from './components/TodoAdd';
import TodoList from './components/TodoList';
import TodoHr from './components/TodoHr';
import TodoFooter from './components/TodoFooter';

// Data for Testing
/*
const MockupData = [ 
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
*/
function App() {

  //const [ allItems , setAllItems ] = useState([...MockupData]) ;
  const [ allItems , setAllItems ] = useState([]) ;
  const [items, setItems] = useState([]);
  
  async function getItems () {
    const data = await fetch('http://localhost:8080/tasks')  ; 
    const items = await data.json() ;
    
    setAllItems(items) ;
    setItems(items) ;
  }

  useEffect(()=>{
    getItems() 
  }, [])

  function searchItem ( itemName ) {

    const searchRegex = new RegExp(`${itemName}`, 'i');
    
    //const found = items.filter((item) => searchRegex.test(item.name));
    
    //console.log(found) ; 
    setItems(allItems.filter((item) => searchRegex.test(item.name)))
  }

  async function addItem(item) {
    // new item data 
    const newItem = {
      name: item,
      id: generateUUID(),
      completed: false,
    };
    // Local
    setItems((items)=>[...items, newItem]); 
    setAllItems((items)=>[...items, newItem]);
    // Remote (API)
    fetch('http://localhost:8080/tasks' , {
      method: 'POST' ,   
      headers: {
      'Content-Type': 'application/json'
      }, 
      body: JSON.stringify(newItem) 
    })  
  }
  
  async function removeItem(itemId) {
    
    // Local
    setItems(items => items.filter((item) => item.id !== itemId));
    setAllItems( prev => prev.filter((item) => item.id !== itemId)) ; 
    
    // Remote (API)

    fetch(`http://localhost:8080/tasks/${itemId}`, {  method: 'DELETE' }) 
    console.log(items , allItems ) 
  }

  async function editItem( newItemName , itemId ) {
    //console.log(`editing... ${ newItemName } ${itemId}`)
    
    // Local 

    setItems ( ( itemsList ) => itemsList.map( item => { 
        return item.id === itemId ? {...item, name: newItemName } : item 
      }) 
    )

    setAllItems( ( itemsList ) => itemsList.map( item => { 
        return item.id === itemId ? {...item, name: newItemName } : item 
      }) 
    )

    // Remote (API)

    fetch( `http://localhost:8080/tasks/${itemId}` ,{
      method: 'PUT' ,   
      headers: {
      'Content-Type': 'application/json'
      }, 
      body: JSON.stringify({
        name: newItemName 
      }) 
    })

  }
  
  async function checkItem(event) {
      
    const itemToUpdate = items.find( (item) => item.id === event.target.parentNode.id ) ;
    const newStatus = itemToUpdate.completed ? false : true ; 
    
    // Local 
    setItems ( ( itemsList ) => itemsList.map( item => { 
        return item.id === itemToUpdate.id ? {...item, completed: newStatus } : item 
      }) 
    )
    setAllItems (
      ( itemsList ) => itemsList.map( item => { 
        return item.id === itemToUpdate.id ? {...item, completed: newStatus } : item 
      }) 
    )


    // Remote (API)
    fetch( `http://localhost:8080/tasks/${itemToUpdate.id}` ,{
      method: 'PUT' ,   
      headers: {
      'Content-Type': 'application/json'
      }, 
      body: JSON.stringify({
        completed: newStatus 
      }) 
    })
    
  }

  return (
    <>
      <TodoSearch handler={searchItem} />
      <TodoAdd handler={addItem} />
      <TodoHr />
      <TodoList 
        list={items} 
        checkHandler={checkItem} 
        editHandler={editItem}
        removeHandler={removeItem}
      />
      <TodoFooter />
    </>
  );
}

export default App;
