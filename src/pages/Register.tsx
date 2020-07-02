import React from 'react'
import { IonPage, IonHeader, IonContent, IonToolbar, IonTitle, IonBackButton, IonButtons } from '@ionic/react';

export const Register: React.FC = () =>{
    return(
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="/" />
                    </IonButtons>
                    <IonTitle>Register</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
        
            </IonContent>
        </IonPage>
    )
}



export default Register;