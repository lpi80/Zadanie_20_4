import React from 'react';
import uuid from 'uuid';
import style from './App.css';
//import Title from './Title';

const Title = props => {
    return <h1>{props.name}</h1>
}

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data: []
        };
        this.addClick = this.addClick.bind(this);
    }

    
    addTodo(val){
        const todo = {
            text: val,
            id: uuid.v4(),
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
                <ul>{this.data}</ul>
                Tutaj pojawią się komponenty naszej aplikacji.
            </div>
        );
    }
}

export default App;