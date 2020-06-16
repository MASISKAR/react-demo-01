import React, { Component } from 'react';
import classes from './style.module.css';
import { Button, Container, Row, Col, Form } from 'react-bootstrap';
import {nameValidator, emailValidator} from '../../../helpers/validator';

class Contact extends Component {
state = {
    name: '',
    email: '',
    message: ''
}


    submitHandler = ()=>{
        console.log('submit');
    }

    inputChangeHandler = (type)=> (event)=>{
        this.setState({
            [type]: event.target.value
        });
    }

    render() {
const {name, email, message} = this.state;
const isNameValid = nameValidator(name);
const isEmailValid = emailValidator(email);


        return (
            <Container>
                <Row className="justify-content-md-center">
                    <Col sm='6'>
                        <Form>
                            <Form.Group controlId="exampleForm.ControlSelect1">
                                <Form.Label>Your name *</Form.Label>
                                <Form.Control 
                                value = {name}
                                className = {!isNameValid ? classes.invalid : ''}
                                type='text'
                                onChange = {this.inputChangeHandler('name')}
                                 />
                            </Form.Group>

                            <Form.Group controlId="exampleForm.ControlInput1">
                                <Form.Label>Email address *</Form.Label>
                                <Form.Control 
                                type="email"
                                value = {email}
                                className = {!isEmailValid ? classes.invalid : ''}
                                 placeholder="name@example.com"
                                 onChange = {this.inputChangeHandler('email')}
                                  />
                            </Form.Group>

                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Your message</Form.Label>
                                <Form.Control 
                                as="textarea" 
                                rows="3" 
                                value = {message}
                                onChange = {this.inputChangeHandler('message')}
                                />
                            </Form.Group>
                            <Button
                            variant="outline-primary"
                            onClick={this.submitHandler}
                            disabled = {!(isNameValid && isEmailValid)}
                          >
                            Submit
                            </Button>
                        </Form>

                    </Col>
                </Row>

            </Container>

        );
    }
}

export default Contact;