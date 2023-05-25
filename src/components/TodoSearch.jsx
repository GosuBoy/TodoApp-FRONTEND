import { useState } from "react"

import search from "../styles/search.module.css"
import searchLogo from "../assets/SearchButton.svg"

function TodoSearch ( { handler } ) {

    const [ searchTerm , setSearchTerm ] = useState ('') ; 

    function updateInput( event ) {
        setSearchTerm(event.target.value) ; 
    }

    return (
        <nav className={search["searchBar"]}>
            <div className={search["searchBar__Wrapper"]}>
                <input  className={search["searchBar__Input"]}
                    onChange={updateInput} 
                    value={searchTerm}/>
                <button
                    className={search["searchBar__Button"]}
                    onClick={()=> handler(searchTerm)}
                > 
                    <img src={searchLogo}></img>
                </button>
            </div>
        </nav>
    )
}

export default TodoSearch
