import item from '../styles/item.module.css'

function TodoItem ( { data , onEdit } ) {
  return (
    <li className={`${item['todoItem']} ${data.completed?item['Completed']:''}`} id={data.id} >
      <div 
        className={`${item['todoItem__Checkbox']} ${data.completed?item['todoItem__Checkbox__Completed']:''}`}
        onClick={onEdit}
      >
      </div>
      { data.name }
    </li>
  )
}

export default TodoItem

