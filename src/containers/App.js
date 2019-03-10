import React from 'react';
import uuid from 'uuid';
import style from './App.css';
//import Title from './Title';
//import TodoList from '../components/TodoList';


const TodoList = props  => {
    const data = props.data.map(todo => {
        return <li><b>text:</b> {todo.text} <b>id:</b> <i>{todo.id}</i></li>;
    });
    return data
}


const Title = props => {
    return <h1>{props.name}</h1>
}

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data: [{
                id: 1,
                    text: 'clean room'
                }, {
                id: 2,
                    text: 'wash the dishes'
                }, {
                id: 3,
                    text: 'feed my cat'
                }]
        };
        this.addClick = this.addClick.bind(this);
    }

    
    addTodo(val){
        const todo = {
            id: uuid.v4(),
            text: val,
        };
        const data = [...this.state.data, todo];
        this.setState({data});
        console.dir(this.state.data);
    }

    removeTodo(id) {
        const remainder = this.state.data.filter(todo => todo.id !== id);
        this.setState({data: remainder});
    }

    addClick() {
        let newName = prompt("Enter the name of the card");
        this.addTodo(newName);
    }

    render() {
        this.data = this.state.data.map(todo => {
            return <li><b>text:</b> {todo.text} <b>id:</b> <i>{todo.id}</i></li>;
        });
  
        return (
            <div className={style.TodoApp}>
                <button onClick = {this.addClick}>Add</button>
                <Title name = "tescik"/>
                <TodoList data = {this.state.data}/>
                Tutaj pojawią się komponenty naszej aplikacji.
            </div>
        );
    }
}

export default App;