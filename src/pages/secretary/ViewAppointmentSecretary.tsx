import react, { useState } from 'react'
import { IonPage, IonToolbar, IonButtons, IonBackButton, IonContent, IonHeader, useIonViewWillEnter, IonTitle, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonLabel, IonButton, IonModal } from '@ionic/react'
import React from 'react'
import moment from 'moment'
import * as firebase from 'firebase'
export const ViewAppointmentSecretary: React.FC = (()=>{
    const [appointmentDetailsSecretary, setDetails] = React.useState([])
    const [showModal, setShowModal] = useState(false);
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
                key: appointmentDetailsSecretary['key']
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
                key: appointmentDetailsSecretary['key']
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


    // customElements.define('modal-page', class extends HTMLElement {
    //     connectedCallback() {
    //       this.innerHTML = `
    //   <ion-header>
    //     <ion-toolbar>
    //       <ion-title>Modal Header</ion-title>
    //       <ion-buttons slot="primary">
    //         <ion-button onClick="dismissModal()">
    //           <ion-icon slot="icon-only" name="close"></ion-icon>
    //         </ion-button>
    //       </ion-buttons>
    //     </ion-toolbar>
    //   </ion-header>
    //   <ion-content class="ion-padding">
    //     Modal Content
    //   </ion-content>`;
    //     }
    // });

    // function presentModal() {
    //     // create the modal with the `modal-page` component
    //     const modalElement = document.createElement('ion-modal');
    //     modalElement.component = 'modal-page';
    //     modalElement.cssClass = 'my-custom-class';
      
    //     // present the modal
    //     document.body.appendChild(modalElement);
    //     return modalElement.present();
    //   }
    
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
               <IonButton onClick={() => setShowModal(true)} color="secondary" expand="block">Chat</IonButton>

               <IonModal isOpen={showModal} cssClass='my-custom-class'>
                <p>This is modal content</p>
                    <IonButton onClick={() => setShowModal(false)}>Close Modal</IonButton>
                </IonModal>
            </IonContent>
        </IonPage>
    )
})

export default ViewAppointmentSecretary