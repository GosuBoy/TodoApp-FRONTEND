function TodoList( { list } ) {
    return (
        <ol id="todolist">
            {
            list.map((item) => ( <li key={item.id}>{item.name}</li> )) 
            }
        </ol>
    )
}

export default TodoList