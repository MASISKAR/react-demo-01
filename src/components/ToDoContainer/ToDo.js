import React, { Component } from 'react';
import classes from './todo.module.css';
// import { idGen } from '../../helpers/utils';
import Task from '../Task/Task';
import NewTask from '../NewTask/NewTask';
import { withSnackbar } from 'notistack';

import {
    Container,
    Row,
    Col,
    Button
} from 'react-bootstrap';
import TaskModal from '../TaskModal/TaskModal';
import AddTaskModal from '../AddTaskModal';

class ToDo extends Component {
    constructor(ppp) {
        super(ppp);
        console.log('ToDo constructor');
    }

    state = {
        tasks: [],
        taskIds: new Set(),
        isEditing: false,
        taskIndex: null,
        showTaskModal: false
    }

    componentDidMount() {
        fetch('http://localhost:3001/tasks', {
            method: 'GET',
        })
            .then(res => res.json())
            .then(data => {
                if(data.error){
                    throw data.error;
                }
                this.setState({ tasks: data });
            })
            .catch(error => {
                this.props.enqueueSnackbar(error.toString(), { 
                    variant: 'error',
                });
            });
    }


    addTask = (taskData) => {
        fetch('http://localhost:3001/tasks', {
            method: 'POST',
            body: JSON.stringify(taskData),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(response => {
                if(response.error){
                    throw response.error;
                }
                this.props.enqueueSnackbar('Task added successfully', { 
                    variant: 'success',
                });

                this.setState({
                    tasks: [...this.state.tasks, response],
                    showTaskModal: false
                });
            })
            .catch(error => {
                this.props.enqueueSnackbar(error.toString(), { 
                    variant: 'error',
                });
            });
    }

    removeButtonHandler = (taskId) => () => {
        const newTasks = this.state.tasks.filter(({ id }) => taskId !== id);
        const newTaskIds = new Set(this.state.taskIds);
        newTaskIds.delete(taskId);

        this.setState({
            tasks: newTasks,
            taskIds: newTaskIds,
            taskIndex: null
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


    removeBulkHandler = (ev) => {
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

    selectAllHandler = () => {
        const taskIds = this.state.tasks.map(task => task.id);
        this.setState({ taskIds: new Set(taskIds) });
    };

    deSelectAllHandler = () => {
        this.setState({ taskIds: new Set() });
    };

    handleModalClose = () => {
        this.setState({
            taskIndex: null
        });
    }

    handleModalOpen = (taskIndex) => () => {
        this.setState({
            taskIndex: taskIndex
        });
    }

    toggleAddTaskModal = () => {
        this.setState({ showTaskModal: !this.state.showTaskModal });
    };

    render() {
        console.log(this.props);
        const { tasks, taskIds, isEditing, taskIndex } = this.state;

        const tasksArr = tasks.map((task, index) => {
            return (
                <Col key={task.id} sm='6' md='4' lg='3' xl='2' >
                    <Task
                        data={task}
                        onDelete={this.removeButtonHandler(task.id)}
                        onCheck={this.handleCheck(task.id)}
                        onSaveEdit={this.handleSaveEdit(task.id)}
                        onEdit={this.handleEdit}
                        isSelected={this.state.taskIds.has(task.id)}
                        onOpenModal={this.handleModalOpen(index)}
                    />
                </Col>
            )
        }

        );

        return (
            <>
                <Container>
                    <Row className={classes.inputRow}>
                        <Col>
                            <Button
                                className='mx-auto'
                                variant='primary'
                                onClick={this.toggleAddTaskModal}
                            >
                                Add task
                    </Button>
                            <NewTask
                                onTaskAdd={this.addTask}
                                disabled={isEditing}
                            />
                        </Col>
                    </Row>


                    <Row>
                        {tasksArr}
                    </Row>

                    <Row>
                        <Button
                            className='mx-auto'
                            variant='danger'
                            onClick={this.removeBulkHandler}
                            disabled={!taskIds.size}
                        >
                            Remove
                         </Button>
                        {
                            tasks.length !== taskIds.size &&
                            <Button
                                className='mx-auto'
                                variant='secondary'
                                onClick={this.selectAllHandler}
                            >
                                Select all
                         </Button>

                        }

                        {!!taskIds.size &&
                            <Button
                                className='mx-auto'
                                variant='secondary'
                                onClick={this.deSelectAllHandler}
                            >
                                Deselect all
                         </Button>
                        }



                    </Row>
                </Container>
                {taskIndex !== null &&
                    <TaskModal
                        show={taskIndex !== null}
                        onHide={this.handleModalClose}
                        taskData={tasks[taskIndex]}
                        onDelete={this.removeButtonHandler(tasks[taskIndex].id)}
                        onSaveEdit={this.handleSaveEdit(tasks[taskIndex].id)}
                        onEdit={this.handleEdit}
                    />
                }

                <AddTaskModal
                    open={this.state.showTaskModal}
                    onHide={this.toggleAddTaskModal}
                    onAddTask={this.addTask}
                />
     
            </>
        );
    }
}

export default withSnackbar(ToDo);