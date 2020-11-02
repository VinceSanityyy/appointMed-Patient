import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { ellipse, square, triangle } from 'ionicons/icons';
import Login from './pages/Login';
import Register from './pages/Register';
import AddAppointment from './pages/patient/AddAppointment';
import ViewAppointment from './pages/patient/ViewAppointment'
import ViewAppointmentSecretary from './pages/secretary/ViewAppointmentSecretary'
import Appointments from './pages/patient/Appointments'
import Chat from './pages/secretary/Chat'
import Conversation from './pages/secretary/Conversation'
import PatientConversation from './pages/patient/PatientConversation'
/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import Home from './components/Home'
import HomeSecretary from './components/HomeSecretary';

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route path="/" component={Login} exact />
        <Route path="/home" component={Home}/>
        <Route path="/secretary" component={HomeSecretary}/>
        <Route path="/register" component={Register} exact />
        <Route path="/addAppointMent" component={AddAppointment} exact />
        {/* <Route path="/secretary/chat" component={Chat} exact /> */}
        <Route path="/viewAppointment" component={ViewAppointment} exact />
        <Route path="/viewAppointmentSecretary" component={ViewAppointmentSecretary} exact />
        <Route path="/conversation" component={Conversation} exact />
        <Route path="/patientConversation" component={PatientConversation} exact/>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
