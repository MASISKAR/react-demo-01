import React  from 'react';

export default function Task(props){
const {text} = props;
    return (
        <div>
        <span>{text} </span>
    <button onClick={props.onDelete}>X</button>
    </div>
    );
}