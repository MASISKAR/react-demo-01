import React from 'react';
import { Card, Button} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt, faEdit} from '@fortawesome/free-solid-svg-icons';
import EditTask from '../EditTask';

export default class Task extends React.PureComponent {
  constructor(props) {
    super(props);
    console.log('Task constructor');
    this.state = {
      isEdit: false
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
    });
    this.props.onEdit();
  }

  saveEdit = (editedText) => {
    this.props.onSaveEdit(editedText);
    this.setState({
      isEdit: false,
    });
  }

  render() {
    // console.log('Task render');
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
            <EditTask
            text = {this.props.text}
            onCancelEdit = {this.cancelEdit}
            onSaveEdit = {this.saveEdit}
            />           
            :
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