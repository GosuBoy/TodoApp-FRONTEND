import item from '../styles/item.module.css';
import ItemCheckbox from './ItemCheckbox';

import optionsIcon from '../assets/Options.svg'
import OptionsTooltip from './OptionsTooltip';
import { useState } from 'react';
import EditModeInput from './EditModeInput';

function TodoItem({ data , edit , remove , check }) {

    const [ tooltipVisibility , setTooltipVisibility ] = useState(false) ; 

    const [ editMode , setEditMode ] = useState(false) ; 

    function enableEdit () {
        setEditMode(true)  
    }

    function submitEdition ( newValue ) {
        setEditMode(false)
        //console.log( newValue )
        edit( newValue , data.id )
    }

    return (
        <li className={`${item['todoItem']} ${data.completed ? item['Completed'] : ''}`} id={data.id}>
            <ItemCheckbox
                checked={data.completed}
                handleCheck={check}
            />
            {
                editMode ? (
                    <EditModeInput 
                        editionHandler={submitEdition}
                        initialValue={data.name} 
                    />
                ) : (
                    <>
                        {data.name}
                        <button 
                            className={item['todoItem__DeleteButton']}
                            onClick={()=>setTooltipVisibility(true)}
                        >
                        <img src={optionsIcon} ></img>
                        </button>
                        <OptionsTooltip 
                            enableEdit={enableEdit}
                            remove={remove}
                            show={tooltipVisibility} 
                            id={data.id}
                        />
                    </>
                )   
            }
        </li>
    );
}

export default TodoItem;

/*
editMode ? ( <input></input> ) : ( */