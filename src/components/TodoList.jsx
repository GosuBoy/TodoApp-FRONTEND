function TodoList( { list } ) {
    return (
        <ul id="todolist">
            {
            list.map((item) => ( <li key={item.id}>{item.name}</li> )) 
            }
        </ul>
    )
}

export default TodoList
