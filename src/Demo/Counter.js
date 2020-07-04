import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count: 0
    }

    decrement = () => {
        let { count } = this.state;

        this.setState({ count: count - 1 });

    }

    increment = () => {
        let { count } = this.state;
        console.log('old count', count);
        /* 
            this.setState({count: count+1}, ()=>{
                console.log('new count', this.state.count);
            }); */

        this.setState(
            (state) => ({
                count: state.count + 1
            }),
            () => {
                console.log('new count', this.state.count);
            });

    }

    render() {
        console.log('count from render', this.state.count);
        return (
            <div>
                <button onClick={this.decrement}>-</button>
                <span>{this.state.count}</span>
                <button onClick={this.increment}>+</button>

            </div>
        )
    }
}

export default Counter;