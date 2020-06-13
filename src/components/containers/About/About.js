import React, { Component } from 'react';
import classes from './style.module.css';


class About extends Component {


    render() {
        // console.log(this.props);
        return (
            <h1 className= {classes.heading}>About us page</h1>
        );
    }
}

export default About;