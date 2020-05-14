import React, { Component } from 'react';
import { idGen } from '../utils';
import Task from './Task';

class ToDo extends Component {
    state = {
        inputText: '',
        tasks: []
    }

    inputChangeHandler = (event) => {
        const value = event.target.value;
        this.setState({
            inputText: value,
        });
    }

    buttonClickHandler = () => {
        const inputText = this.state.inputText;

        if (!inputText) return;

        const tasks = [...this.state.tasks];
        tasks.push({
            id: idGen(),
            text: inputText
        });
        this.setState({ tasks, inputText: '' });

        // this.setState({ tasks: [...this.state.tasks, inputText], inputText: '' });
    }



    render() {
/*         const tasks = this.state.tasks
            .map(task => <Task key={task.id} text={task.text} />); */
            const tasks = this.state.tasks
            .map(task => <p key={task.id} >{task.text}</p>);

        return (
            <>
                <div>
                    <input
                        value={this.state.inputText}
                        type="text"
                        onChange={this.inputChangeHandler}
                    />

                    <button onClick={this.buttonClickHandler}>Add</button>
                </div>
                <div>
                    {tasks}
                </div>
            </>

        );
    }
}

export default ToDo;