import React from 'react';
import '../Alert/CloseBtn.css';

const CloseBtn = props => (
  <button className='BtnClose' onClick={props.dismiss}><i className="far fa-times-circle"></i></button>
);

export default CloseBtn;