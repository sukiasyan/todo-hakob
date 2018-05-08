import React , {Component} from 'react';


class Todoinput extends Component {
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.addTodo = this.addTodo.bind(this);

        this.state = {
            value: ''
        }
    }
    handleChange(e) {
        this.setState({value: e.target.value});
    }
    addTodo(todo) {
        //make sure entered text is not empty
        if(todo.length>0) {
            this.props.addTodo(todo);
            this.setState({value: ''});
        }
    }
    render() {
        return (
            <div>
                <input type="text" value={this.state.value} onChange={this.handleChange}/>
                <button className="btn btn-primary" onClick={()=> this.addTodo(this.state.value)}>Submit</button>
            </div>
        );
    }
}

export default Todoinput;