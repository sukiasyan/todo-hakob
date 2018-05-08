import React , {Component} from 'react';
import './component.css';


class TodoItem extends Component {
    constructor(props){
        super(props);
    }
    removeTodo(id){
        this.props.removeTodo(id);
    }
    markTodoDone(id){
        this.props.markTodoDone(id);
    }
    render() {
        return (
            <div className="todoWrapper">
                <button className="removeTodo" onClick={(e)=>this.removeTodo(this.props.id)}>remove</button>
                {this.props.todo.text}
                <span className="glyphicon glyphicon-ok icon undone" aria-hidden="true"
                      onClick={(e)=>this.markTodoDone(this.props.id)}></span>
            </div>
        );
    }
}

export default TodoItem;