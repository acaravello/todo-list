import React, {Component} from "react";
import "./TodoList.css";
import NewTodoForm from "./NewTodoForm";
import Todo from "./Todo";

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: []
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.deleteTodo = this.deleteTodo.bind(this);
        this.modifyFromChild = this.modifyFromChild.bind(this);
        this.toggleItem = this.toggleItem.bind(this);
    }

    handleSubmit(todo) {
        const newTodo = {value: todo, done: false}
        this.setState(prevState => ({
            todos: [...prevState.todos, newTodo]
        }));
    }

    deleteTodo(index) {
        let elements = this.state.todos;
        elements.splice(index,1);
        this.setState({todos: elements})
    }

    modifyFromChild(value,index) {
        let elements = this.state.todos;
        elements[index].value = value;
        this.setState({todos: elements});
    }

    toggleItem(index) {
        let elements = this.state.todos;
        elements[index].done = !elements[index].done;
        this.setState({todos: elements});
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("Updating..");
        console.log(prevState);
        console.log(this.state.todos);
    }

    render() {
        return(
            <div className="TodoList">
                <h1>Todo List! <span>A simple React Todo List App.</span></h1>
 
                <div className="AllTodos">
                {this.state.todos.map((todo,index) => {
                    return <Todo key={index} value={todo.value} done={todo.done}
                    deleteItem={() => this.deleteTodo(index)}
                    modifyTodo={(value) => this.modifyFromChild(value,index)} togglingItem={()=>{this.toggleItem(index)}}/>
                })}
                </div>
                <NewTodoForm  submit={this.handleSubmit}/>
            </div>
        )
    }
}

export default TodoList;