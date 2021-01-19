import React from 'react';
import './TodoItem.css';
import editSolid from "./edit-solid.svg";

//Check Buttons

export default function TodoItem(props) {
    const [isReadOnly, updateIsReadOnly] = React.useState(true);
    const [todolist, setTodolist] = React.useState(props.todolist);
    const [time, setTime] = React.useState(props.time);
    const toggleReadyOnly = () => {
        updateIsReadOnly( oldValue => !oldValue );
    }

    const handleTodolist = (e) => {
        setTodolist(e.currentTarget.value);
        props.handleUpdate(props.index, e.currentTarget.value, time);
    }

    const handleTime = (e) => {
        setTime(e.currentTarget.value);
        props.handleUpdate(props.index, todolist, e.currentTarget.value);
    }

    let todolistContent = null;
    let timeContent = null;
    if (isReadOnly) {
        todolistContent = todolist;
        timeContent = `(${time})`;
    } else {
        todolistContent = <input type="text" value={todolist} onChange={handleTodolist} />;
        timeContent = <input type="text" value={time} onChange={handleTime} />;
    }

    return (
        <div className="todo-item">
            {todolistContent} {timeContent}
            <img src={editSolid} alt="Edit todolist" className="edit-todolist" onClick={toggleReadyOnly} />
        </div>
    )
}
