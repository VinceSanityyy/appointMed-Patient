import React from 'react'
import { IonPage, IonContent, IonCard, IonCardHeader, IonCardContent, IonLabel, IonItem, IonInput, IonRow, IonCol, IonButton, IonHeader, IonToolbar, IonButtons, IonBackButton, IonTitle, useIonViewWillEnter } from '@ionic/react';
export const AddAppointment:React.FC = () =>{

    useIonViewWillEnter(()=>{
        console.log(JSON.parse(localStorage.getItem("details")))
    })
   
    return(
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons  slot="start">
                        <IonBackButton defaultHref="/tab1" />
                    </IonButtons>
                    <IonTitle>Add Appointment</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>

            </IonContent>
        </IonPage>
    )
}

export default AddAppointment;