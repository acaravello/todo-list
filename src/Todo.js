import React, {Component} from "react";
import "./Todo.css";

class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: this.props.value,
            editing:false
        }

        this.modifyItem = this.modifyItem.bind(this);
        this.saveChange = this.saveChange.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    modifyItem() {
        this.setState({editing: true})
    }

    saveChange() {
        this.props.modifyTodo(this.state.value);
        this.setState({editing: false});
    }

    handleChange(ev) {
        this.setState({[ev.target.name]: ev.target.value})
    }

    componentWillUnmount() {
        console.log("In component Will Unmount");
    }

    render() {
        return(
            <div className="Todo">
                {this.state.editing ? 
                <div className="TodoEditForm">
                    <input type="text" name="value" value={this.state.value} onChange={this.handleChange} />
                    <button onClick={this.saveChange}>Save</button>
                </div> :
                <div className="ReadOnlyContainer ">
                     <div className={`ReadOnly Todo-task ${this.props.done? "TodoDone completed": "" }`}
                    onClick={this.props.togglingItem}>{this.props.value}</div>
                    <div className="Todo-buttons">
                        <button onClick={this.modifyItem} className="ModifyIcon"> <i className='fas fa-pen' /></button>
                        <button onClick={this.props.deleteItem} className="DeleteIcon"><i className='fas fa-trash' /></button>
                     </div>
                     
                </div>
            }
               
                
               
            </div>
        )
    }
}

export default Todo;