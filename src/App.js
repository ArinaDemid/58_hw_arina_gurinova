import React, {Fragment} from 'react';
import DemonstrationModal from "./containers/DemonstrationModal/DemonstrationModal";
import DemonstrationAlert from "./containers/DemonstrationAlert/DemonstrationAlert";
import DemonstrationAlert2 from "./containers/DemonstrationAlert2/DemonstrationAlert2";
import DemonstrationAlertAdditional from "./containers/DemonstrationAlertAdditional/DemonstrationAlertAdditional";
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => (
  <Fragment>
    <DemonstrationModal />
    <DemonstrationAlert />
    <DemonstrationAlert2 />
    <DemonstrationAlertAdditional />
  </Fragment>
);

export default App;
