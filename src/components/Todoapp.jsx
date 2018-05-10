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
                {id: 0, text: "Make dinner tonight", done: "undone"},
                {id: 1, text: "fold the laundry" , done: "undone"},
                {id: 2, text: "Make React app",  done: "undone"}
            ],
            nextId: 3,
            showEdit: false
        };

        this.addTodo = this.addTodo.bind(this);
        this.removeTodo = this.removeTodo.bind(this);
        this.markTodoDone = this.markTodoDone.bind(this);
    }

    addTodo(todoText) {
        let todos = this.state.todos.slice();
        todos.push({id: this.state.nextId, text: todoText, done: "undone"});
        let nextId = this.state.nextId;
        this.setState({
            todos: todos,
            nextId: ++nextId
        })
    }

    removeTodo(id) {
        this.setState({
            todos: this.state.todos.filter((todo, index) => todo.id !== id)
        })
    }
    markTodoDone(itemIndex) {
        let todosDone = [...this.state.todos];
        this.setState({
            todosDone: todosDone
        });
       if(todosDone[itemIndex].done === "undone"){
           todosDone[itemIndex].done = "done"
       }else {
           todosDone[itemIndex].done = "undone"
       }
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
                                                      removeTodo={this.removeTodo}
                                                      markTodoDone={this.markTodoDone} />

                                })
                            }
                        </ul>
                    </div>

                </div>
                <div>

                </div>
                <Footer/>
            </div>
        );
    }
}

export default Todoapp;