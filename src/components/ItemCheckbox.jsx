import item from '../styles/item.module.css';

function ItemCheckbox ( { checked , handleCheck } ) {
    return (
        <div
        className={`${item['todoItem__Checkbox']} ${ checked ? item['todoItem__Checkbox__Completed'] : ''}`}
        onClick={handleCheck}
        ></div>
    )
}

export default ItemCheckbox