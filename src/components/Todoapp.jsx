import React, {Component} from 'react';
import Footer from './Todofooter.jsx';
import Jumbotron from './Jumbotron.jsx';
import Todoheader from "./Todoheader.jsx";
import Todoinput from "./Todoinput.jsx";
import TodoItem from "./Todoitem.jsx";

class Todoapp extends Component {
    constructor(props) {
        super(props);
        // Initializing some dummy data
        this.state = {
            todos: [
                {id: 0, text: "Make dinner tonight", done: false},
                {id: 1, text: "fold the laundry" , done: false},
                {id: 2, text: "Make React app",  done: true}
            ],
            nextId: 3
        };

        this.addTodo = this.addTodo.bind(this);
        this.removeTodo = this.removeTodo.bind(this);
        this.markTodoDone = this.markTodoDone.bind(this);
    }

    addTodo(todoText) {
        let todos = this.state.todos.slice();
        todos.push({id: this.state.nextId, text: todoText, done: false});
        this.setState({
            todos: todos,
            nextId: ++this.state.nextId
        })
    }

    removeTodo(id) {
        this.setState({
            todos: this.state.todos.filter((todo, index) => todo.id !== id)
        })
    }
    markTodoDone(itemIndex) {
        let todosDone = this.state.todos;
        this.setState({
            done: true
        });
        console.log(itemIndex, todosDone[itemIndex].done);
    }
    render() {
        return (
            <div>
                <div className="container">
                    <Jumbotron title="Todo App" subtitle="Todo subtitle"/>
                    <h2>Todo App</h2>
                    <div className="todo-wrapper">
                        <Todoheader/>
                        <Todoinput todoText="" addTodo={this.addTodo}/>
                        <ul>
                            {
                                this.state.todos.map((todo) => {
                                    return  <TodoItem todo={todo} key={todo.id} id={todo.id}
                                                      removeTodo={this.removeTodo} markTodoDone={this.markTodoDone}/>

                                })
                            }
                        </ul>
                    </div>

                </div>
                <Footer/>
            </div>
        );
    }
}

export default Todoapp;