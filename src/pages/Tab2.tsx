import React, { useState, useEffect } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonSearchbar, IonButton, useIonViewDidEnter, useIonViewWillEnter, IonList, IonItem, IonLabel, IonRefresher, IonRefresherContent, IonText, useIonViewDidLeave, IonAvatar } from '@ionic/react';
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
  const [details, setDetails] = React.useState([])

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

  useIonViewWillEnter(()=>{
    localStorage.setItem("details",null)
    console.log('Details Clear')
  })

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
      console.log(searchText)
    })
  }

  function doRefresh( event: CustomEvent<RefresherEventDetail>){
    console.log('Refreshed')
    event.detail.complete()
  }

  function test(e,elem){
    console.log(elem)
    localStorage.setItem("details", JSON.stringify(elem)) 
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
            //  console.log(doctors)
            return (
              // <IonItem routerLink={`/addAppointment/${elem["uid"]}`} key={index}>
              <IonItem onClick={(e)=> test(e,elem)} routerLink="/addAppointment" key={index}>
                <IonAvatar slot="start">
                  <img src={elem['imageUrl']} ></img>
                </IonAvatar>
                <IonLabel >
                  <IonText className="font-weight: bold;">
                    <h2>{elem["name"]}</h2>
                  </IonText>
                  <h3>{elem["speciality"]}</h3>
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
