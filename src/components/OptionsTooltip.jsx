import style from '../styles/optionsTooltip.module.css'

import editIcon from '../assets/Edit.svg'
import removeIcon from '../assets/Remove.svg'

function OptionsTooltip ( { enableEdit , remove , show , id } ) {

    return (
        <div className={`${style.optionsTooltip} ${ show && style.show } `}>
            <button
                onClick={()=>enableEdit()}
            >
                <img src={editIcon}></img>
            </button>
            <button
                onClick={()=>remove(id)}
            >
                <img src={removeIcon}></img>
            </button>
        </div>
    )
}

export default OptionsTooltip