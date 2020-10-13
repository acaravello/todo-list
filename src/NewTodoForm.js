import React, {Component} from "react";
import "./NewTodoForm.css";

class NewTodoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todo: ""
        }
        this.submitForm = this.submitForm.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    submitForm(ev) {
        ev.preventDefault();
        this.props.submit(this.state.todo);
        this.setState({todo: ""});
    }

    handleChange(ev) {
        this.setState({[ev.target.name]: ev.target.value});
    }

    

    render() {
        return(
            <div className="NewTodoForm">
                <form onSubmit={this.submitForm}>
                    <div className="LabelContainer">
                    <label htmlFor="todoItem">New Todo</label>
                    </div>
                    <div className="InputContainer">
                        <input type="text" id="todoItem" name="todo" value={this.state.todo} onChange={this.handleChange}/>
                        <button className="Button">Add Todo</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default NewTodoForm;