import React from 'react';
import { Modal, Button, InputGroup, FormControl, Form } from 'react-bootstrap';
import PropTypes from 'prop-types';

class AddEditModal extends React.Component {
constructor(props){
    super(props);
        this.initialState = {
            title: '',
            date: '',
            description: ''
        };
    
    this.state = this.initialState;
}

componentDidUpdate(prevProps, prevState){
    if(prevProps.open && !this.props.open){
        this.setState(this.initialState);
    }
    else if(!prevProps.open && this.props.open){
        this.setState(this.props.data);
    }
}

/*     onChangeHandler = (type) => (event)=>{
        console.log(type);
        this['set'+type]();
    };

    setInput = ()=>{
console.log('setInput');
    };

    setTextArea = ()=>{
        console.log('setTextArea');

    }; */

    onChangeHandler = (type) => (event)=>{
        this.setState({
            [type] : event.target.value
        });
    };

    
    addTask = ()=>{
        const {title, date, description} = this.state;
        const taskData = {
            title, 
            date, 
            description
        };
        this.props.onAddTask(taskData);
    }

    editTask = ()=>{
        const {title, date, description, id} = this.state;
        const {data} = this.props;
        const taskData = {};

        (title !== data.title) &&  (taskData.title = title);
        (date !== data.date) &&  (taskData.date = date);
        (description !== data.description) &&  (taskData.description = description);

        this.props.onEditTask(id, taskData);
    }

    render() {
const {title, date, description} = this.state;
console.log('this.state', this.state)
        return (
            <>

                <Modal
                    show={this.props.open}
                    onHide={this.props.onHide}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                           {this.props.type === 'add' ?  'Add new Task' : 'Edit task'}
              </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                        <InputGroup className="mb-3">
                            <FormControl
                                placeholder="Title"
                                aria-label="Title"
                                aria-describedby="basic-addon2"
                                value={title}
                                onChange={this.onChangeHandler('title')}
                            />
                        </InputGroup>
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Description</Form.Label>
                        <Form.Control 
                        as="textarea" 
                        rows="3" 
                        value={description}
                        onChange={this.onChangeHandler('description')}
                        />
                      </Form.Group>
                      <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Choose date</Form.Label>
                       <p>
                       <input 
                       type="date"
                       value={date.slice(0, 10)}
                       onChange={this.onChangeHandler('date')}
                       />
                       </p> 
                      </Form.Group>

                        
                    </Modal.Body>
                    <Modal.Footer>
                        {this.props.type === 'add' ?
                        <Button
                            variant="outline-primary"
                            onClick={this.addTask}
                            disabled = {!title}
                        >
                            Add
                        </Button> :
                        <Button
                        variant="outline-primary"
                        onClick={this.editTask}
                        disabled = {!title}
                    >
                        Save
                    </Button> 
                }
                        <Button 
                        variant="outline-warning"
                        onClick={this.props.onHide}
                        >
                        Cancel
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        );
    }

}

AddEditModal.propTypes = {
    type: PropTypes.string.isRequired,
    open: PropTypes.bool.isRequired,
    onHide: PropTypes.func.isRequired,
    onAddTask: PropTypes.func,
    onEditTask: PropTypes.func
};


export default AddEditModal;