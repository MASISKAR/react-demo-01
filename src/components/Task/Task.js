import React from 'react';
import { Card, Button} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt, faEdit} from '@fortawesome/free-solid-svg-icons';
import EditTask from '../EditTask';
import {formatDate} from '../../helpers/utils';
import classes from './style.module.css';

export default class Task extends React.PureComponent {
  constructor(props) {
    super(props);
    // console.log('Task constructor');
    this.state = {
      isEdit: false
    }
  }


  componentDidMount() {
    // console.log('Task mounted');
  }

/*   componentDidUpdate(prevProps, prevState) {
    // console.log('Task updated');
    // console.log('prevProps', prevProps);
    // console.log('this.props', this.props);
  } */

  /*       shouldComponentUpdate(prevProps, prevState){
        return prevProps.text !== this.props.text;
        
       } */

 /*  componentWillUnmount() {
    console.log('Task unmounted');
  } */

  render() {
    // console.log('Task render');
    const { data } = this.props;
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
          <Card.Title>{data.title}</Card.Title>
          <Card.Text >
            {data.description}
          </Card.Text>
          <Card.Text className={classes.date}>
          Creation date {formatDate(data.created_at)}
        </Card.Text>
        <Card.Text className={classes.date}>
        Completion date {formatDate(data.date)}
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
                <FontAwesomeIcon icon={faEdit} onClick={()=>this.props.onEdit(data.id)} />
                <FontAwesomeIcon icon={faTrashAlt} onClick={this.props.onDelete} />
                <p>
                <Button 
                variant="primary" 
                onClick = {this.props.onOpenModal}
                >
                View
                </Button>
                </p>
              </>
          }


        </Card.Body>
      </Card>
    );
  }
}