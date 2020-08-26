import React from 'react';
import {
  IonList,
  IonItem,
  IonLabel,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonButton,
  IonFab,
  IonFabButton,
  IonIcon,
  IonRefresher,
  IonRefresherContent
} from '@ionic/react';
import ExploreContainer from '../../components/ExploreContainer';
// import './Tab1.css';
import { add, chevronDownCircleOutline } from 'ionicons/icons';
import { RefresherEventDetail } from '@ionic/core';


import * as firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/storage'

const Appointments: React.FC = () => {
const [doctors, setDoctor] = React.useState([])
  function clickAdd() {
    console.log('Hello')
  }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Appointments</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
    
      {/* <IonRefresher slot="fixed" onIonRefresh={doRefresh}>
      <IonRefresherContent>
        </IonRefresherContent>
      </IonRefresher> */}

      <IonList>
          <IonItem>
            <IonLabel>Pokémon Yellow</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>Mega Man X</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>The Legend of Zelda</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>Pac-Man</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>Super Mario World</IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Appointments;
