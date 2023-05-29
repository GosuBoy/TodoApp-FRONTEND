import { useState } from "react"

function EditModeInput( { editionHandler , initialValue }) {
    
    const [ input , setInput ] = useState (initialValue) ; 

    function updateInput (e) {
        setInput(e.target.value)
    }

    return (
        <>
            <input
                onChange={updateInput}
                value={input}
            >
            </input>
            <button 
                onClick={()=>editionHandler(input)}
            >
                done
            </button>
        </>
    )
}

export default EditModeInput