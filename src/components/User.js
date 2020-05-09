import React from 'react';
import Name from './Name';

function User(props) {
// const {name}=props;
    return (
        <div>
        Hello, I am 
        <Name name={props['name']} />
         <span className='user-surname'> {props.surname}</span>
        </div>
    );
}

export default User;