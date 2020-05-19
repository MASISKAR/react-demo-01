import React  from 'react';
import classes from './task.css';

console.log('classes',classes)

export default function Task(props){
const {text} = props;

const spanStyle = {
    fontSize: '20px',
    color: 'maroon'
};

    return (
        <div className = {classes.taskBlock}>
        <input 
        type="checkbox"
        onChange = {props.onCheck}
        />
        <span 
        style = {spanStyle}
        >{text} </span>
    <button onClick={props.onDelete}>X</button>
    </div>
    );
}