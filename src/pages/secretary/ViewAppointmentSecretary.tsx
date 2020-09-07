import react from 'react'
import { IonPage, IonToolbar, IonButtons, IonBackButton, IonContent, IonHeader, useIonViewWillEnter } from '@ionic/react'
import React from 'react'

export const ViewAppointmentSecretary: React.FC = (()=>{
    useIonViewWillEnter(()=>{
        console.log('asda')
    })

    
    return(
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons>
                        <IonBackButton>
                        <IonBackButton defaultHref="/secretary/appointments"/>   
                        </IonBackButton>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <h1>test</h1>
            </IonContent>
        </IonPage>
    )
})

export default ViewAppointmentSecretary