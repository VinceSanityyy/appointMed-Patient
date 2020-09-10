import React from 'react';
import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, IonBadge, IonPage, IonRouterOutlet } from '@ionic/react';
import { calendar, create, logOut, personCircle, map, informationCircle, people, person, mail } from 'ionicons/icons';
import { Redirect, Route } from 'react-router';

// import Appointments from '../pages/patient/Appointments'
import Appointments from '../pages/secretary/Appointments'
import Chat from '../pages/secretary/Chat'
import * as firebase from 'firebase'
export const HomeSecretary: React.FC = () => {
  function signOut() {
    const alert = document.createElement('ion-alert');
    alert.cssClass = 'my-custom-class';
    alert.header = 'Warning';
    alert.message = 'Message <strong>Are you sure you want to sign out?</strong>!!!';
    alert.buttons = [
      {
        text: 'Cancel',
        role: 'cancel',
        cssClass: 'secondary',
        handler: (blah) => {
          console.log('Cancelled');
        }
      }, {
        text: 'Okay',
        handler: () => {
          const loading = document.createElement('ion-loading');
          loading.message = 'Please Wait..';
          document.body.appendChild(loading);
          loading.present();
          firebase.auth().signOut().then(function() {
            loading.dismiss();
            localStorage.clear()
            window.location.href = "/"
          }).catch(function(error) {
            loading.dismiss();
            console.log(error)
          });
        }
      }
    ];
    document.body.appendChild(alert);
    return alert.present();
  }

  
    return(
      <IonTabs>
      <IonRouterOutlet>
        <Route path="/secretary/appointments" component={Appointments} />
        <Route path="/secretary/chat" component={Chat} />
      </IonRouterOutlet>
      <IonTabBar color="dark" slot="bottom">
        <IonTabButton tab="schedule" href="/secretary/appointments">
          <IonIcon icon={calendar} />
          <IonLabel>Appointments</IonLabel>
        </IonTabButton>
        <IonTabButton tab="chat" href="/secretary/chat" >
          <IonIcon icon={mail} />
          <IonLabel>Chats</IonLabel>
        </IonTabButton>
        <IonTabButton onClick={signOut} >
          <IonIcon icon={logOut} />
          <IonLabel>Sign Out</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
    )
};

export default HomeSecretary;