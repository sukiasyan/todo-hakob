import React , {Component} from 'react';
import './component.css';

class TodoItem extends Component {
    constructor(){
        super();
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            value: ''
        }
    }
    componentDidMount(){
        this.setState({value: this.props.todo.text})
    }
    removeTodo(id){
        this.props.removeTodo(id);
    }
    markTodoDone1(id){
        this.props.markTodoDone(id);
    }

    handleChange(e) {
        this.setState({value: e.target.value});
    }
    render() {
        return (
            <div className={`todoWrapper ${this.props.todo.done}`}>
                <button className="removeTodo" onClick={(e)=>this.removeTodo(this.props.id)}>remove</button>

                <input type="text" className="edit-input" value={this.state.value} onChange={this.handleChange}/>

                <span className={`glyphicon glyphicon-ok icon ${this.props.todo.done}`}
                      aria-hidden="true"
                      onClick={(e)=>this.markTodoDone1(this.props.id)}>
                </span>
            </div>
        );
    }
}

export default TodoItem;