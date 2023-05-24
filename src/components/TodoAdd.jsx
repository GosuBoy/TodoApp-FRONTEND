import { useState } from "react";

function TodoAdd( { handler } ) {

    const [ input , setInput ] = useState ('') ; 

    function updateInput( event ) {
        setInput(event.target.value) ; 
    }

    return (
        <div>
            <input  
                onChange={updateInput} 
                value={input}/>
            <button
                onClick={()=> handler(input)}
            > 
                Add Icon 
            </button>
        </div>
    )
}

export default TodoAdd