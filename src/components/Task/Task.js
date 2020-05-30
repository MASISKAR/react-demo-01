import React from 'react';
import classes from './style.css';
import { Card, Button, InputGroup, FormControl } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt, faEdit, faSave, faWindowClose } from '@fortawesome/free-solid-svg-icons';


export default class Task extends React.PureComponent {
  constructor(props) {
    super(props);
    console.log('Task constructor');
    this.state = {
      isEdit: false,
      editText: props.text
    }
  }


  componentDidMount() {
    console.log('Task mounted');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('Task updated');
    // console.log('prevProps', prevProps);
    // console.log('this.props', this.props);
  }

  /*       shouldComponentUpdate(prevProps, prevState){
        return prevProps.text !== this.props.text;
        
       } */

  componentWillUnmount() {
    console.log('Task unmounted');
  }

  handleEdit = () => {
    this.setState({
      isEdit: true
    });
    this.props.onEdit();
  }

  cancelEdit = () => {
    this.setState({
      isEdit: false,
      editText: this.props.text
    });
    this.props.onEdit();
  }

  handleInputChange = (event) => {
    this.setState({
      editText: event.target.value
    });
  }

  saveEdit = () => {
    this.props.onSaveEdit(this.state.editText);
    this.setState({
      isEdit: false
    });

  }

  render() {
    console.log('Task render');
    const { text } = this.props;
    const { isEdit } = this.state;

    return (
      <Card>
        <Card.Header>
          <input
            type="checkbox"
            checked={this.props.isSelected}
            onChange={this.props.onCheck}
          />
        </Card.Header>
        <Card.Body>
          <Card.Title>{text.slice(0, 10)}</Card.Title>
          <Card.Text>
            {text}
          </Card.Text>
          {
            isEdit ?
              <>
                <InputGroup size="sm" className="mb-3">
                  <FormControl
                   aria-label="Small" 
                   aria-describedby="inputGroup-sizing-sm" 
                   value={this.state.editText} 
                   onChange={this.handleInputChange}
                   />
                  <InputGroup.Append>
                    <InputGroup.Text id="inputGroup-sizing-sm">
                      <FontAwesomeIcon icon={faSave} onClick={this.saveEdit} />
                      <FontAwesomeIcon icon={faWindowClose} onClick={this.props.cancelEdit} />

                    </InputGroup.Text>
                  </InputGroup.Append>
                </InputGroup>
              
                </> :
              <>
                <FontAwesomeIcon icon={faEdit} onClick={this.handleEdit} />
                <FontAwesomeIcon icon={faTrashAlt} onClick={this.props.onDelete} />
                <p>
                <Button 
                variant="primary" 
                onClick = {this.props.onOpenModal}
                >
                View</Button>
                </p>
              </>
          }


        </Card.Body>
      </Card>
    );
  }
}