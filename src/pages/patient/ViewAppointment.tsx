import react from 'react'
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonBackButton, IonButtons, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonLabel, useIonViewWillEnter } from '@ionic/react'
import React from 'react'
import moment from 'moment'

const ViewAppointment: React.FC = () =>{
    const [appointmentDetails, setDetails] = React.useState([])

    useIonViewWillEnter(()=>{
        console.log(JSON.parse(localStorage.getItem('appointmentDetails')))
        setDetails(JSON.parse(localStorage.getItem('appointmentDetails')))
    })
    return(
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons>
                        <IonBackButton defaultHref="/tab1" />   
                    </IonButtons>
                    <IonTitle>
                        Content
                    </IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonCard>
                    <IonCardHeader>
                        <IonCardTitle>
                            {appointmentDetails['doctor']}
                        </IonCardTitle>
                            <IonCardContent>
                                <IonLabel>Date of Appointment</IonLabel>
                                <h4>{moment(appointmentDetails['date']).format('dddd, MMMM DD, YYYY')}</h4>
                            </IonCardContent>
                    </IonCardHeader>
                   
                </IonCard>
                <IonButton expand="block">hello</IonButton>
            </IonContent>
        </IonPage>
    )
}

export default ViewAppointment;