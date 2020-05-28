import React from 'react';

export default function Div(props){

    return(
        <div >
        {props.text}
        <div className = {props.className}>
        {props.children}
        </div>
        
        </div>
    );
}