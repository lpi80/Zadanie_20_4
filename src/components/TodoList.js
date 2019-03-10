const TodoList = props  => {
    const data = props.data.map(todo => {
        return <li><b>text:</b> {todo.text} <b>id:</b> <i>{todo.id}</i></li>;
    });
    return data
}

export default TodoList;