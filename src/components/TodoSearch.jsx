import { useState } from "react"

function TodoSearch ( { handler } ) {

    const [ searchTerm , setSearchTerm ] = useState ('') ; 

    function updateInput( event ) {
        setSearchTerm(event.target.value) ; 
    }

    return (
        <div>
            <input  
                onChange={updateInput} 
                value={searchTerm}/>
            <button
                onClick={()=> handler(searchTerm)}
            > 
                Search Icon 
            </button>
        </div>
    )
}

export default TodoSearch