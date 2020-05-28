import React, { Component } from 'react';
import classes from './todo.module.css';
import { idGen } from '../../helpers/utils';
import Task from '../Task';
import NewTask from '../NewTask/NewTask';
import {
    Container,
    Row,
    Col,
    Button
} from 'react-bootstrap';


class ToDo extends Component {
    constructor(props) {
        super(props);
        console.log('ToDo constructor');
    }
    state = {
        tasks: [],
        taskIds: new Set(),
        isEditing: false
    }

    componentDidMount() {
        console.log('ToDo mounted');
    }


    addTask = (inputText) => {
        const tasks = [...this.state.tasks];
        tasks.push({
            id: idGen(),
            text: inputText
        });
        this.setState({ tasks });
    }

    removeButtonHandler = (taskId) => () => {
        const newTasks = this.state.tasks.filter(({ id }) => taskId !== id);
        const newTaskIds = new Set(this.state.taskIds);
        newTaskIds.delete(taskId);

        this.setState({
            tasks: newTasks,
            taskIds: newTaskIds
        });
    }

    handleCheck = (taskId) => () => {
        let taskIds = new Set(this.state.taskIds);

        if (taskIds.has(taskId)) {
            taskIds.delete(taskId);
        }
        else {
            taskIds.add(taskId);
        }
        this.setState({ taskIds });
    }


    removeBulkHandler = () => {
        let { tasks, taskIds } = this.state;

        taskIds.forEach(id => {
            tasks = tasks.filter(task => task.id !== id);
        });

        this.setState({
            tasks,
            taskIds: new Set()
        });

    }

    handleSaveEdit = (id) => (text) => {
        const tasks = JSON.parse(JSON.stringify(this.state.tasks));

        for (let task of tasks) {
            if (task.id === id) {
                task.text = text;
                break;
            }
        }
        this.setState({ tasks, isEditing: false });
    }

    handleEdit = () => {
        this.setState({
            isEditing: !this.state.isEditing,
        });
    }

    render() {
        console.log('ToDo render');

        /*         const tasks = this.state.tasks
                    .map(task => <Task key={task.id} text={task.text} />); */
        const tasks = this.state.tasks
            .map(({ id, text }) => {
                return (
                    <Col key={id} sm='6' md='4' lg='3' xl='2' >
                        <Task
                            text={text}
                            onDelete={this.removeButtonHandler(id)}
                            onCheck={this.handleCheck(id)}
                            onSaveEdit={this.handleSaveEdit(id)}
                            onEdit={this.handleEdit}
                        />
                    </Col>
                )
            }

            );

        return (
            <>
                {              /*   <Container fluid>
                    <Row>
                        <Col sm='6' md='4' lg='3' xl='2' className={classes.col}>
                        <div className = {classes.block} ></div>
                        </Col>
                        <Col sm={{span: 4, offset: 4}} md='4' lg='3' xl='2' className={classes.col}>
                        <div className = {classes.block} ></div>
                        </Col>
                        <Col sm='6' md='4' lg='3' xl='2' className={classes.col}>
                        <div className = {classes.block} ></div>
                        </Col>
                        <Col sm='6' md='4' lg='3' xl='2' className={classes.col}>
                        <div className = {classes.block} ></div>
                        </Col>
                        <Col sm='6' md='4' lg='3' xl='2' className={classes.col}>
                        <div className = {classes.block} ></div>
                        </Col>
                        <Col sm='6' md='4' lg='3' xl='2' className={classes.col}>
                        <div className = {classes.block} ></div>
                        </Col>
                    </Row>

                    <Row>
                    <Col className={classes.col}>7</Col>
                    <Col className={classes.col}>8</Col>
                    <Col className={classes.col}>9</Col>
                    <Col className={classes.col}>10</Col>
                    </Row>


                </Container>
 */}

                <Container>
                    <Row className={classes.inputRow}>
                        <Col>
                            <NewTask
                                onTaskAdd={this.addTask}
                                disabled={this.state.isEditing}
                            />
                        </Col>
                    </Row>


                    <Row>
                        {tasks}
                    </Row>

                    <Row>
                    <Button
                    className='mx-auto'
                    variant='danger'
                    onClick={this.removeBulkHandler}
                    disabled={!this.state.taskIds.size}
                >
                    Remove
                </Button>
                    </Row>
                </Container>
                </>
        );
    }
}

export default ToDo;