import React from 'react';
import style from './TodoList.css';
import Todo from './Todo'

const TodoList = props  => {
    const data = props.data.map(todo => {
        return <Todo remove={props.remove} id={todo.id} text={todo.text}/>
    });
    return <ul className={style.TodoList}>{data}</ul>
}

export default TodoList;