import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonSearchbar, IonButton, useIonViewDidEnter, useIonViewWillEnter } from '@ionic/react';
// import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';
import { GoogleMap, withScriptjs, withGoogleMap } from 'react-google-maps' 

const Tab2: React.FC = () => {
  const [searchText, setSearchText] = useState('');

  function setSearch(){
    console.log(searchText)
  }

  useIonViewWillEnter(()=>{
    console.log('Enter')
  })

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Doctors</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonSearchbar value={searchText} onIonChange={e => setSearchText(e.detail.value!)}  ></IonSearchbar>

      </IonContent>

      <IonButton expand="block" onClick={setSearch} color="primary">Primary</IonButton>
    </IonPage>
  );
};

export default Tab2;
