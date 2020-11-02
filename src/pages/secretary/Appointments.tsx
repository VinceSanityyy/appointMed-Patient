import react from 'react'
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, useIonViewWillEnter, IonButton, IonList, IonItem, IonLabel, IonText, IonRefresher, IonRefresherContent } from '@ionic/react';
import React from 'react';
import * as firebase from 'firebase'
import moment from 'moment';
import { RefresherEventDetail } from '@ionic/core';
import { save } from 'ionicons/icons';
export const Appointments: React.FC =() => {

    const [appointments, setAppointment] = React.useState([])

    useIonViewWillEnter(()=>{
        console.log('sec enter')
        firebase.database().ref('appointments').orderByChild('doctor').equalTo(localStorage.getItem('doctor_in_charge')).on('value',(snapshot=>{
            let key;
            let newArr = []
            console.log(snapshot.val())
            snapshot.forEach((childSnap)=>{
                key = childSnap.key 
                const snapVal = snapshot.val()
                newArr.push(snapVal[key])
            })
            setAppointment(newArr)
            // console.log(appointments)
            localStorage.setItem("appointmentDetailsSecretary",null)
            console.log('Details Clear')
        }))
    })
    
    const test = (()=>{
        console.log(appointments)
    })

    function doRefresh(event: CustomEvent<RefresherEventDetail>){
        console.log(appointments)
        event.detail.complete();
        // console.log()
    }

    const saveDetails = ((e,elem)=>{
        localStorage.setItem('appointmentDetailsSecretary', JSON.stringify(elem))
    })

    return(
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>
                        Appointments
                    </IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
            <IonRefresher slot="fixed" onIonRefresh={doRefresh}>
            <IonRefresherContent>
                </IonRefresherContent>
            </IonRefresher>
            <IonList>
                {appointments.map((elem,index)=>{
                return(
                    <IonItem onClick={(e)=> saveDetails(e,elem)} routerLink="/viewAppointmentSecretary" key={index} >
                        <IonLabel className="font-weight: bold;"><h2>{elem['patient']}</h2>
                        <IonText ><h3>{moment(elem['date']).format('dddd, MMMM DD,YYYY')}</h3></IonText>
                    </IonLabel>
                <IonText><h6>{elem['status']}</h6></IonText>
                    
                </IonItem>
                )
                })}    
            </IonList>
                {/* <IonButton onClick={test}>test</IonButton> */}
            </IonContent>
        </IonPage>
    )
}

export default Appointments;