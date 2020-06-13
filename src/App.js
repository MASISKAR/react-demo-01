import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
// import Request from './Demo/Request';
import NavMenu from './components/NavMenu/NavMenu';
import ToDo from './components/containers/ToDo/ToDo';
import About from './components/containers/About/About';
import Contact from './components/containers/Contact/Contact';
import SingleTask from './components/containers/SingleTask/SingleTask';
import NotFound from './components/containers/NotFound/NotFound';

import {Route, Switch, Redirect} from 'react-router-dom';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      counter: 0
    };
}

/* componentDidMount(){
  // console.log('App mounted');
} */


handleClick = ()=>{
  this.setState({
    counter: this.state.counter+1
  });
}

  render(){
// console.log('App render starts', this.props);

  return (
    <div className={'App'}>
    <NavMenu/>   

    <Switch>
    <Route path='/' exact component={ToDo}/>
    <Route path='/about' exact component={About}/>
    <Route path='/contact' exact component={Contact}/>
    <Route path='/task/:id' exact component={SingleTask}/>
    <Route path='/404' exact component={NotFound}/>
    <Redirect to='/404' />
    </Switch>

    </div>
  );

  }

}

export default App;


