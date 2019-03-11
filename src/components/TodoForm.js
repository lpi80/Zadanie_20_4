import React from 'react';
import style from './TodoForm.css';

const TodoForm = props => {
    return (
        <div className={style.TodoForm}>
            <button onClick={() => props.click()}>{props.name}</button>
        </div>
    )
}

export default TodoForm;