import { useState } from "react";

import add from "../styles/add.module.css"
import addLogo from "../assets/AddButton.svg"

function TodoAdd( { handler } ) {

    const [ input , setInput ] = useState ('') ; 

    function updateInput( event ) {
        setInput(event.target.value) ; 
    }

    return (
        <div className={add['addBar']}>
            <div className={add['addBar__Wrapper']}>
                <input  
                    className={add['addBar__Input']}
                    onChange={updateInput} 
                    value={input}/>
                <button
                    className={add['addBar__Button']}
                    onClick={()=> handler(input)}
                > 
                    <img src={addLogo}></img>
                </button>
            </div>
        </div>
    )
}

export default TodoAdd