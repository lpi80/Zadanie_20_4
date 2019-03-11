import React from 'react';
import uuid from 'uuid';
import style from './App.css';
import Title from '../components/Title';
import TodoList from '../components/TodoList';
import TodoForm from '../components/TodoForm'
import { hot } from 'react-hot-loader';

class App extends React.Component {
    constructor(){
        super();
        this.state = {
            data: [{
                id: 5,
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
        this.removeTodo = this.removeTodo.bind(this);
    }

    
    addTodo(val){
        const todo = {
            id: uuid.v4(),
            text: val,
        };
        const data = [...this.state.data, todo];
        this.setState({data});
    }

    removeTodo(id) {
        const remainder = this.state.data.filter(todo => todo.id !== id);
        this.setState({data: remainder});
    }

    addClick() {
        const newName = prompt("Wpisz zadanie do wykonania");
        this.addTodo(newName);
    }

    render() {
        return (
            <div className={style.TodoApp}>
                <TodoForm click={this.addClick} name="Add"/>
                <Title name="Lista zadan do wykonania"/>
                <TodoList data={this.state.data} remove={this.removeTodo}/>
                
            </div>
        );
    }
}

export default hot(module)(App);