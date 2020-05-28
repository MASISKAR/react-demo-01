import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import ToDo from './components/ToDoContainer/ToDo';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      counter: 0
    };
}

componentDidMount(){
  console.log('App mounted');
}


handleClick = ()=>{
  this.setState({
    counter: this.state.counter+1
  });
}

  render(){
console.log('App render starts');

  return (
    <div className={'App'}>
    <ToDo/>
{/* <button
onClick = {this.handleClick}
>
Click me and see the magic!</button> */}
    </div>
  );

  }

}

export default App;


