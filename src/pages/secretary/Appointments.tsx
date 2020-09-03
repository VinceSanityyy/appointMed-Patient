import react from 'react'
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, useIonViewWillEnter, IonButton } from '@ionic/react';
import React from 'react';
import * as firebase from 'firebase'

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
        }))
    })
    
    const test = (()=>{
        console.log(appointments)
    })

    return(
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>
                        Test
                    </IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <h1>Hello</h1>
                <IonButton onClick={test}>test</IonButton>
            </IonContent>
        </IonPage>
    )
}

export default Appointments;