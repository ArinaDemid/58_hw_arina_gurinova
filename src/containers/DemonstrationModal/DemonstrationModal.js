import React, {Component, Fragment} from 'react';
import Modal from '../../components/UI/Modal/Modal';
import ButtonShow from '../../components/UI/Button/Button';

class DemonstrationModal extends Component {
  state = {
    showModal: false,
  };

  showModal = () => {
    this.setState({showModal: true});
  };

  closedModal = () => {
    this.setState({showModal: false});
    alert('You closed!');
  };

  continueModal = () => {
    alert('You continued!');
  };

  render() {

    return (
      <Fragment>
        <ButtonShow 
          clicked={this.showModal} 
          color='success' 
          name='Show Modal'
        />
        <Modal 
          showState={this.state.showModal}
          closed={this.closedModal}
          title="Modal title"
          buttonsTypes={[
            {type: 'primary', label: 'Continue', clicked: this.continueModal},
            {type: 'danger', label: 'Close', clicked: this.closedModal}
          ]}
        >
          <p>This is modal content</p>
        </Modal>
      </Fragment>
    )
  }
};

export default DemonstrationModal;
