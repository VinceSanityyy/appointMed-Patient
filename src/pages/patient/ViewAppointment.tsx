import react from 'react'
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonBackButton, IonButtons, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonLabel, useIonViewWillEnter } from '@ionic/react'
import React from 'react'
import moment from 'moment'
import * as firebase from 'firebase'
const ViewAppointment: React.FC = () =>{
    const [appointmentDetails, setDetails] = React.useState([])

    useIonViewWillEnter(()=>{
        console.log(JSON.parse(localStorage.getItem('appointmentDetails')))
        setDetails(JSON.parse(localStorage.getItem('appointmentDetails')))
    })

    function cancel(){
      
        const alert = document.createElement('ion-alert');
        alert.cssClass = 'my-custom-class';
        alert.header = 'Warning';
        alert.message = 'Message <strong>Cancel Appointment?</strong>!!!';
        alert.buttons = [
            {
              text: 'Cancel',
              role: 'cancel',
              cssClass: 'secondary',
              handler: (blah) => {
                console.log('Cancelled');
              }
            }, {
              text: 'Okay',
              handler: () => {
                const loading = document.createElement('ion-loading');
                loading.message = 'Please Wait..';
                document.body.appendChild(loading);
                loading.present();
                firebase.database().ref('appointments/' + appointmentDetails['key']).set({
                    doctor: appointmentDetails['doctor'],
                    doctor_email: appointmentDetails['doctor_email'],
                    patient: appointmentDetails['patient'],
                    date: appointmentDetails['date'],
                    time: appointmentDetails['time'],
                    status: 'cancelled',
                    patient_email: appointmentDetails['patient_email'],
                    queueNo: appointmentDetails['queueNo'],
                    key: appointmentDetails['key']
                })
                loading.dismiss()
                window.location.href = "/home/tab1"
              }
            }
          ];
          document.body.appendChild(alert);
          return alert.present();
    }
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
                                <IonLabel>Date</IonLabel>
                                <h4>{moment(appointmentDetails['date']).format('dddd, MMMM DD, YYYY')}</h4>
                            </IonCardContent>
                    </IonCardHeader>
                   
                </IonCard>
                <IonButton onClick={cancel} expand="block">Cancel Appointment</IonButton>
            </IonContent>
        </IonPage>
    )
}

export default ViewAppointment;