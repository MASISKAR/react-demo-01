// import React, {Component} from 'react';
import React from 'react';

// console.log(React);

class Animal extends React.Component{
constructor(props){
    super(props);
    this.state = {
        age: props.age,
        inputText: ''
    };
}


handleClick=( num)=>{
    console.log('num', num)
    this.setState({age: this.state.age+1});
};

handleInputChange = (event)=>{
    this.setState({inputText: event.target.value});
};

render(){
console.log('render')
    return (
        <div
        // onClick = {this.handleClick.bind(this)}
        // onClick = {this.handleClick}
        // onClick = {(event)=>this.handleClick(event, 2)}
        >
{/*         Hello, I am Doggy, and I am a {this.props.type}
        <p>I am {this.state.age} years old</p>
        <input type="text" 
        onChange={this.handleInputChange}
        />
        <p>{this.state.inputText}</p> */}
        </div>
    );
}

}

export default Animal;