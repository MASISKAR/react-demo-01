import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import Person from './components/Person';
// import greet, {idGen as idGenerator, Hello, getThis} from './tools';
// import * as newObj from './tools';
import User from './components/User';
import Animal from './components/Animal';
import Input from './components/Input';
// newObj.getThis();
// getThis();




function App() {
  // const {Hello} = newObj;
  // const components = [
  //   <p>text 1</p>,
  //   <p>text 2</p>,
  //   <p>text 3</p>,
  // ];
const surname = 'Gates';
console.log('App')
  return (
    <div className='App'>
{/*       <User name='Bill' surname = {surname}/>
      <User name='John' surname = 'Doe'/>
      <User name='Mark' surname = 'Clark'/>
      <Animal type='dog' age={0}/> */}
<Input/>
    </div>
  );
}

export default App;


