import React , {Component} from 'react';
import './component.css';

class TodoItem extends Component {
    removeTodo(id){
        this.props.removeTodo(id);
    }
    markTodoDone1(id){
        this.props.markTodoDone(id);
    }

    render() {
        return (
            <div className={`todoWrapper ${this.props.todo.done}`}>
                <button className="removeTodo" onClick={(e)=>this.removeTodo(this.props.id)}>remove</button>
                {this.props.todo.text}
                <span className={`glyphicon glyphicon-ok icon ${this.props.todo.done}`}
                      aria-hidden="true"
                      onClick={(e)=>this.markTodoDone1(this.props.id)}>
                </span>
            </div>
        );
    }
}

export default TodoItem;