import React, {Component, Fragment} from 'react';
import Alert from '../../components/UI/Alert/Alert';
import ButtonShow from '../../components/UI/Button/Button';

class DemonstrationAlert2 extends Component {
  state = {
    showAlert: false,
  };
  
  showAlert = () => {
    this.setState({showAlert: true});
    this.timer();
  };
  
  closedAlert = () => {
    this.setState({showAlert: false});
  };
  
  timer = () => {
    setTimeout(() => {
      this.closedAlert()
    }, 5000);
  };
  
  render() {
    
    return (
      <Fragment>
        <ButtonShow 
          clicked={this.showAlert} 
          color='warning' 
          name='Show Alert'
        />
        <Alert 
          type='success'
          showState={this.state.showAlert}
        >
          <p> Alert with out close button. The alert will close itself after 5 seconds.</p>
        </Alert>
      </Fragment>
    )
  }
};
  
export default DemonstrationAlert2;