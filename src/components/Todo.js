import React from 'react';

const Todo = props  => {
        return <li onClick={()=>props.remove(props.id)}>{props.text}</li>;
}
export default Todo;