import React, { Component, Fragment } from 'react';
import Data from './Data';

class Input extends Component {
    state = {
        inputValue: '',
        dataValue: '',
        list: []
    };



    inputChangeHandler = (event) => {
        const nextState = {
            inputValue: event.target.value,
        }

        if (this.state.dataValue) {
            nextState.dataValue = '';
        }

        this.setState(nextState);
    }

    buttonClickHandler = () => {
        // this.setState({ dataValue: this.state.inputValue });
        // const list = [...this.state.list];
        // const list = [].concat(this.state.list);
/*         const list = this.state.list.slice();

        list.push({
            text: this.state.inputValue
        });
        this.setState({
            list: list,
            inputValue: ''
        }); */

        this.setState({
            list: [...this.state.list, {text: this.state.inputValue}],
            inputValue: ''
        });
    }

    // higher order function
    /*   function  buttonClickHandler(a){
        return function(b){
        }
      } */
    //conditional rendering



    render() {
        // const list = this.state.list.map((el, index)=> <p key={index}>{el.text}</p>);
        let showButton = false;
        if (this.state.inputValue) {
            showButton = true;
        }

        return (
            <Fragment>
                <input
                    type="text"
                    value = {this.state.inputValue}
                    onChange={this.inputChangeHandler}
                />
                {
/*                     showButton ? 
                    <button
                     onClick={this.buttonClickHandler}
                    >
                    Click me
                    </button> : null */
                }
                {
                    showButton && 
                    <button
                     onClick={this.buttonClickHandler}
                    >
                    Click me
                    </button> 
                }


                {/* <Data text={this.state.dataValue} /> */}
                {/*list*/}
                {
                    this.state.list.map((el, index) => <p key={index}>{el.text}</p>)
                }
            </Fragment>
        );
    }
}


export default Input;