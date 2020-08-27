import React, { useEffect } from 'react';
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
  IonRefresherContent,
  IonText,
  useIonViewWillEnter
} from '@ionic/react';
import ExploreContainer from '../../components/ExploreContainer';
// import './Tab1.css';
import { add, chevronDownCircleOutline } from 'ionicons/icons';
import { RefresherEventDetail } from '@ionic/core';

import moment from 'moment'
import * as firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/storage'

const Appointments: React.FC = () => {
const [appointments, setAppointment] = React.useState([])

  // useEffect( ()=>{
  //   console.log('enter')
  //   // firebase.database().ref('appointments').equalTo(localStorage.getItem('email')).on('value',(snapshot)=>{
  //   //   console.log(snapshot.val())
  //   // })
  // },[])

  useIonViewWillEnter(()=>{
    console.log('enter')
    firebase.database().ref('appointments').orderByChild('patient_email').equalTo(localStorage.getItem('email')).on('value',(snapshot)=>{
      console.log(snapshot.val())
      let key;
      let newArr = []
      snapshot.forEach((childSnap)=>{
        key = childSnap.key 
        const snapVal = snapshot.val()
        newArr.push(snapVal[key])
      })
      setAppointment(newArr)
      // console.log(appointments)
    })
  })

  function test(){
    console.log(appointments)
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
        {appointments.map((elem,index)=>{
          return(
            <IonItem key={index}>
              <IonLabel className="font-weight: bold;"><h2>{elem['doctor']}</h2>
              <IonText ><h3>{moment(elem['date']).format('dddd, MMMM-DD-YYYY')}</h3></IonText>
              </IonLabel>
          <IonText><h6>{elem['status']}</h6></IonText>
              
          </IonItem>
          )
        })}    
      </IonList>


       
      </IonContent>
      <IonButton onClick={test}>Test</IonButton>
    </IonPage>
  );
};

export default Appointments;
