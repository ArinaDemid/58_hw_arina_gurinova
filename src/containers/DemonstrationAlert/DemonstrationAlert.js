import React, {Component, Fragment} from 'react';
import Alert from '../../components/UI/Alert/Alert';
import ButtonShow from '../../components/UI/Button/Button';

class DemonstrationAlert extends Component {
  state = {
    showAlert: false,
  };
  
  showAlert = () => {
    this.setState({showAlert: true});
  };
  
  closedAlert = () => {
    this.setState({showAlert: false});
  };
  
  render() {

    return (
      <Fragment>
        <ButtonShow 
        clicked={this.showAlert} 
        color='info' 
        name='Show Alert'
        />
        <Alert 
          type='primary'
          dismiss={this.closedAlert}
          showState={this.state.showAlert}
        >
          <p>Alert with close button.</p>
        </Alert>
      </Fragment>
    )
  }
};
  
export default DemonstrationAlert;
  