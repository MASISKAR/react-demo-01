import React, { Component } from 'react';
import classes from './style.module.css';


class NotFound extends Component {


    render() {
        return (
            <div>
            <h1 className= {classes.heading}>Error 404</h1>
            <h2 >The page not found!</h2>
            </div>
         
        );
    }
}

export default NotFound;