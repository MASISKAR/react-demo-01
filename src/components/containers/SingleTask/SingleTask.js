import React, { Component } from 'react';
import classes from './style.module.css';
import { withSnackbar } from 'notistack';
import {Button} from 'react-bootstrap';

class SingleTask extends Component {
state = {
    task: null
}

componentDidMount(){
    fetch(`http://localhost:3001/tasks/${this.props.match.params.id}`, {
            method: 'GET',
        })
            .then(res => res.json())
            .then((data)=>{
                if(data.error){
                    throw data.error;
                }
                this.setState({ task: data });
            })
            .catch(error => {
                this.props.enqueueSnackbar(error.toString(), { 
                    variant: 'error',
                });
            });
}

deleteTask = ()=>{
 const taskId = this.props.match.params.id;
 fetch(`http://localhost:3001/tasks/${taskId}`, {
            method: 'DELETE',
        })
        .then(res => res.json())
        .then(response => {
            if(response.error){
                throw response.error;
            }
           this.props.history.push('/');
        })
        .catch(error => {
            this.props.enqueueSnackbar(error.toString(), { 
                variant: 'error',
            });
        });;
};

    render() {
        console.log(this.props);
        const {task} = this.state;
        return (
            <>
            <h1 className= {classes.heading}>Single task page</h1>
            <Button 
            variant="danger" 
            onClick = {this.deleteTask}
            disabled = {!task}
            >
            Delete task
            </Button>
            </>
        );
    }
}

export default withSnackbar(SingleTask);