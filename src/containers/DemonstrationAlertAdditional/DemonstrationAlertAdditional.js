import React, {Component, Fragment} from 'react';
import Alert from '../../components/UI/Alert/Alert';
import ButtonShow from '../../components/UI/Button/Button';

class DemonstrationAlertAdditional extends Component {
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
          color='primary' 
          name='Show Additional Alert'
        />
        <Alert clickDismissible
          type='danger'
          showState={this.state.showAlert}
          dismiss={this.closedAlert}
        >
          <p> Alert with props clickDismissible. The alert closes if you click on the alert div</p>
        </Alert>
      </Fragment>
    )
  }
};
  
export default DemonstrationAlertAdditional;