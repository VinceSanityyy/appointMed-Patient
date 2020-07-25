import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonBackButton, IonButton, IonFab, IonFabButton, IonIcon } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import { add } from 'ionicons/icons';

const Tab1: React.FC = () => {

  function clickAdd(){
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
      <IonFab vertical="bottom" horizontal="end" slot="fixed">
          <IonFabButton routerLink ="/addAppointMent">
            <IonIcon icon={add} />
          </IonFabButton>
        </IonFab>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
