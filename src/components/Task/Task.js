import React  from 'react';
import classes from './task.css';

export default class Task extends React.Component{
    constructor(props){
        super(props);
        console.log('Task constructor');
    }


    componentDidMount(){
        console.log('Task mounted');
      }

      componentDidUpdate(prevProps, prevState){
        console.log('Task updated');
        // console.log('prevProps', prevProps);
        // console.log('this.props', this.props);
      }

      shouldComponentUpdate(prevProps, prevState){
       return prevProps.text !== this.props.text;
       
      }

      componentWillUnmount(){
        console.log('Task unmounted');
      }

   render(){
    console.log('Task render');
    const {text} = this.props;
    
    const spanStyle = {
        fontSize: '20px',
        color: 'maroon'
    };
    
        return (
            <div className = {classes.taskBlock}>
            <input 
            type="checkbox"
            onChange = {this.props.onCheck}
            />
            <span 
            style = {spanStyle}
            >{text} </span>
        <button onClick={this.props.onDelete}>X</button>
        </div>
        );
   }
}