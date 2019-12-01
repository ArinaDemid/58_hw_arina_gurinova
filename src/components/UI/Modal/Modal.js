import React , {Fragment} from 'react';
import '../Modal/Modal.css';
import Backdrop from '../Backdrop/Backdrop';

const Modal = props => (
  <Fragment>
  <div className="Modal" 
    style={{
      transform: props.showState ? 'translateY(0)': 'translateY(-100vh)',
      opacity: props.showState ? '1' : '0'
    }}
  >
    <p>{props.title}<button className='BtnClosed' onClick={props.closed}><i className="far fa-times-circle"></i></button></p>
    
    {props.children}
    {
      props.buttonsTypes.map(item => {
        return (
        <button 
          key={item.type} 
          className={item.type} 
          color={item.type} 
          onClick={item.clicked}
        >
          {item.label}
        </button>
        )
      })
    }
  </div>
    <Backdrop show={props.showState} clicked={props.closed}/>
  </Fragment>
  
);

export default Modal;