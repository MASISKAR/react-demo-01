import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';

class NewTask extends Component {
state = {
    inputText: ''
}

inputChangeHandler = (event)=>{
    this.setState({inputText: event.target.value});
}

buttonClickHandler = ()=>{
    const {inputText} = this.state;
    if (!inputText) return;
this.props.onTaskAdd(inputText);
this.setState({inputText: ''});

}

    render() {
        const {disabled} = this.props;
        return (
            <>
                <input
                    disabled = {disabled}
                    value={this.state.inputText}
                    type="text"
                    onChange={this.inputChangeHandler}
                />
                <button
                disabled = {disabled}
                 onClick={this.buttonClickHandler}
                 >
                 
                 Add</button>
                 <Button variant="primary">Primary</Button>
            </>
        );
    }
}

export default NewTask;