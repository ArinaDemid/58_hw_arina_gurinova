import React from "react";
import '../Button/Button.css';
import {Button} from 'reactstrap';

const ButtonShow = props => (
  <Button
    onClick={props.clicked}
    color={props.color}
    className='Button'
  >
    {props.name}
  </Button>
);

export default ButtonShow;