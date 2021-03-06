import react, { useState } from 'react'
import { IonPage, IonToolbar, IonButtons, IonBackButton, IonContent, IonHeader, useIonViewWillEnter, IonTitle, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonLabel, IonButton, IonModal } from '@ionic/react'
import React from 'react'
import moment from 'moment'
import * as firebase from 'firebase'
export const ViewAppointmentSecretary: React.FC = (()=>{
    const [appointmentDetailsSecretary, setDetails] = React.useState([])
    const [message, setMessage] = React.useState('')
    const [buttonStat, setStat] = React.useState(false)
    useIonViewWillEnter(()=>{
        console.log('enter')
        console.log(JSON.parse(localStorage.getItem('appointmentDetailsSecretary')))
        setDetails(JSON.parse(localStorage.getItem('appointmentDetailsSecretary')))
    })

    function presentAlertConfirm() {
        const alert = document.createElement('ion-alert');
        alert.cssClass = 'my-custom-class';
        alert.header = 'Confirm!';
        alert.message = 'Message <strong>text</strong>!!!';
        alert.buttons = [
          {
            text: 'Decline',
            handler: (blah) => {
              console.log('Confirm Cancel: blah');
              firebase.database().ref('appointments/' + appointmentDetailsSecretary['key']).set({
                doctor: appointmentDetailsSecretary['doctor'],
                doctor_email: appointmentDetailsSecretary['doctor_email'],
                patient: appointmentDetailsSecretary['patient'],
                date: appointmentDetailsSecretary['date'],
                time: appointmentDetailsSecretary['time'],
                status: 'Declined',
                patient_email: appointmentDetailsSecretary['patient_email'],
                queueNo: appointmentDetailsSecretary['queueNo'],
                key: appointmentDetailsSecretary['key'],
                uid: appointmentDetailsSecretary['uid']
                })
                presentAlert()
            }
          }, {
            text: 'Approve',
            handler: () => {
              console.log('Confirm Okay')
              firebase.database().ref('appointments/' + appointmentDetailsSecretary['key']).set({
                doctor: appointmentDetailsSecretary['doctor'],
                doctor_email: appointmentDetailsSecretary['doctor_email'],
                patient: appointmentDetailsSecretary['patient'],
                date: appointmentDetailsSecretary['date'],
                time: appointmentDetailsSecretary['time'],
                status: 'Approved',
                patient_email: appointmentDetailsSecretary['patient_email'],
                queueNo: appointmentDetailsSecretary['queueNo'],
                key: appointmentDetailsSecretary['key'],
                uid: appointmentDetailsSecretary['uid']
                })
                presentAlert()
            }
          },{
              text: 'Cancel',
              role: 'cancel',
              cssClass: 'secondary',
              handler: ()=>{
                  console.log('Cancelled')
              }
          }
        ];
      
        document.body.appendChild(alert);
        return alert.present();
    }

    function presentAlert() {
        const alert = document.createElement('ion-alert');
        alert.cssClass = 'my-custom-class';
        alert.header = 'Updated!';
        alert.buttons = ['OK'];
      
        document.body.appendChild(alert);
        return alert.present();
    }

    function presentAlertPrompt() {
        const alert = document.createElement('ion-alert');
        alert.cssClass = 'my-custom-class';
        alert.header = 'Message';
        alert.inputs = [
          {
            name: message,
            id: message,
            type: 'textarea',
            placeholder: 'Message Body...'
          },
        ];
        alert.buttons = [
          {
            text: 'Cancel',
            role: 'cancel',
            cssClass: 'secondary',
            handler: () => {
              console.log('Cancelled.')
            }
          }, {
            text: 'Ok',
            handler: (data) => {
              console.log('Confirm Ok')
              let id = makeid(10)
              var currdate = new Date;
              
              firebase.database().ref('chats').push({
                  reciever_name: appointmentDetailsSecretary['patient'],
                  sender_name: localStorage.getItem('name'),
                  sender: localStorage.getItem('uid'),
                  reciever: appointmentDetailsSecretary['uid'],
                  // lastMessageSent: data[0],
                  timestamp: new Date().toLocaleString().replace(',','')
              })
              console.log(data)
              firebase.database().ref('messages').push({
                // reciever_name: appointmentDetailsSecretary['patient'],
                // sender_name: localStorage.getItem('name'),
                // sender: localStorage.getItem('uid'),
                // reciever: appointmentDetailsSecretary['uid'],
                // lastMessageSent: data[0],
                // timestamp: new Date().toLocaleString().replace(',','')
                sec:localStorage.getItem('uid'),
                pat:appointmentDetailsSecretary['uid'],
                reciever_name: appointmentDetailsSecretary['patient'],
                sender_name: localStorage.getItem('name'),
                sender: localStorage.getItem('uid'),
                reciever: appointmentDetailsSecretary['uid'],
                lastMessageSent: data[0],
                timestamp: new Date().toLocaleString().replace(',','')
            })
            setStat(true)
            }
          }
        ];
      
        document.body.appendChild(alert);
        return alert.present();
      }
      function makeid(length) {
        var result           = '';
        var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for ( var i = 0; i < length; i++ ) {
           result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
     }
    return(
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons>
                        <IonBackButton>
                        <IonBackButton defaultHref="/secretary/appointments"/>   
                        </IonBackButton>
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
                            {appointmentDetailsSecretary['patient']}
                       </IonCardTitle>
                   </IonCardHeader>
                   <IonCardContent>
                        <IonLabel>Date</IonLabel>
                            <h4>{moment(appointmentDetailsSecretary['date']).format('dddd, MMMM DD, YYY')}</h4>
                        <IonLabel>Time</IonLabel>
                            <h4>{appointmentDetailsSecretary['time']}</h4>
                   </IonCardContent>
               </IonCard>
               <IonButton onClick={presentAlertConfirm} expand="block">Update</IonButton>
               <IonButton onClick={presentAlertPrompt} disabled={buttonStat} color="secondary" expand="block">Chat</IonButton>

              
            </IonContent>
        </IonPage>
    )
})

export default ViewAppointmentSecretary