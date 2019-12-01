import React , {Fragment} from 'react';
import '../Alert/Alert.css';
import Backdrop from '../Backdrop/Backdrop';
import CloseBtn from '../Alert/CloseBtn';

const Alert = props => (
  <Fragment>
    <div className={['Alert', props.type].join(' ')} onClick={(props.clickDismissible) ? props.dismiss: null}
      style={{
        transform: props.showState ? 'translateY(0)': 'translateY(-100vh)',
        opacity: props.showState ? '1' : '0'
      }}
    >
      {(props.dismiss !== undefined && !props.clickDismissible) ? <CloseBtn dismiss={props.dismiss}/> : null}
      {props.children}
    </div>
    <Backdrop show={props.showState} clicked={props.dismiss}/>
  </Fragment>
);
    
export default Alert;