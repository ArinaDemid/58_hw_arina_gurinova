import React from "react";
import '../Button/Button.css';
import {Button} from 'reactstrap';

const ButtonShow = props => (
  <Button
    onClick={props.clicked}
    color="success"
    className='Button'
  >
    Show Modal
  </Button>
);

export default ButtonShow;