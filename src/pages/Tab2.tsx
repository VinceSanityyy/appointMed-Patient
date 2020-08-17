import React, { useState, useEffect } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonSearchbar, IonButton, useIonViewDidEnter, useIonViewWillEnter, IonList, IonItem, IonLabel, IonRefresher, IonRefresherContent, IonText, useIonViewDidLeave } from '@ionic/react';
// import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';
import { GoogleMap, withScriptjs, withGoogleMap } from 'react-google-maps' 
import * as firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/storage'
import { RefresherEventDetail } from '@ionic/core';
import { O2A } from 'object-to-array-convert';
const Tab2: React.FC = () => {
  const [searchText, setSearchText] = useState('');
  const [doctors, setDoctor] = React.useState([]);
  const [docArr,setDoc] = React.useState([])

  function setSearch(){
    console.log(searchText)
  }

  
  useEffect( () => {
    console.log('Enter')
    firebase.database().ref('users').orderByChild('type').equalTo('doctor').on('value',(snapshot)=>{
      let key;
      let newArr = []
      snapshot.forEach( (childSnap) => {
        key = childSnap.key
        const snapVal = snapshot.val();
        newArr.push(snapVal[key])
      })
      setDoctor(newArr)
    })
  }, [])

  function search(){
    firebase.database().ref('users').orderByChild('name').startAt(searchText).endAt(searchText).on('value',(snapshot)=>{
      let key;
      let newArr = []
      console.log(snapshot.val())
      snapshot.forEach( (childSnap) => {
        key = childSnap.key
        const snapVal = snapshot.val();
        newArr.push(snapVal[key])
      })
      setDoctor(newArr)
    })
  }

  function onClear(){
    console.log('clear')
    firebase.database().ref('users').orderByChild('type').equalTo('doctor').on('value',(snapshot)=>{
      console.log(snapshot.val())
      let key;
      let newArr = []
      snapshot.forEach( (childSnap) => {
        key = childSnap.key
        const snapVal = snapshot.val();
        newArr.push(snapVal[key])
      })
      console.log(snapshot.val())
      setDoctor(newArr)
    })
  }

  function doRefresh( event: CustomEvent<RefresherEventDetail>){
    console.log('Refreshed')
    event.detail.complete()
  }

  function getDoctors(){
    console.log(doctors)
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Doctors</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonSearchbar onIonClear={onClear} value={searchText} onIonChange={e => setSearchText(e.detail.value!)}  ></IonSearchbar>
         <IonRefresher slot="fixed" onIonRefresh={doRefresh}>
      <IonRefresherContent>
        </IonRefresherContent>
      </IonRefresher>
      <IonList>
          {doctors.map((elem, index) => {
            // index has to come from the second parameter from map
             console.log(doctors)
            return (
              <IonItem key={index}>
                <IonLabel>
                  <IonText className="font-weight: bold;">
                    <h3>{elem["name"]}</h3>
                  </IonText>
                  <h4>{elem["speciality"]}</h4>
                  <h4>{elem["email"]}</h4>
                </IonLabel>
                <br></br>
              </IonItem>
            );
          })}
        </IonList>
      </IonContent>

      <IonButton expand="block" onClick={search} color="primary">Primary</IonButton>
    </IonPage>
  );
};

export default Tab2;
