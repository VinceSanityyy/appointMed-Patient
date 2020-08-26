import react from 'react'
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/react';
import React from 'react';


export const Appointments: React.FC =() => {
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
            </IonContent>
        </IonPage>
    )
}

export default Appointments;