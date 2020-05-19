import React  from 'react';
import './task.css';

export default function Task(props){
const {text} = props;

const spanStyle = {
    fontSize: '20px',
    color: 'maroon'
};

    return (
        <div className = 'task-block'>
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