import "../styles/TodoItem.css";

function TodoItem(props) {
  return (
    <li className="TodoItem">
      <span
        className={`Icon Ico  n-check ${
          props.completed && "Icon-check--active"
        }`}
        onClick={props.onComplete}
      >
        V
      </span>
      <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>
        {props.name}
      </p>
      <span className="Icon Icon-delete" onClick={props.onDelete}>
        X
        </span>
    </li>
  );
}

export {TodoItem};
