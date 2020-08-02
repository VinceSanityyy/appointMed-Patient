import React, { useState } from 'react'
import { IonPage, IonHeader, IonContent, IonToolbar, IonTitle, IonBackButton, IonButtons, IonLabel, IonItem, IonInput, IonCard, IonCardHeader, IonCardContent, IonDatetime, IonRow, IonCol, IonButton } from '@ionic/react';
import * as firebase from 'firebase';

export const Register: React.FC = () =>{
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [phone,setPhone] = useState('')
    const [selectedDate,setSelectedDate] = useState('')

    function Register(){
        const loading = document.createElement('ion-loading');
        loading.message = 'Please Wait..';
    
        document.body.appendChild(loading);
        loading.present();
        firebase.auth().createUserWithEmailAndPassword(email,password).then((res)=>{
          console.log(res.user!.uid)
          loading.dismiss();
          toast()
          firebase.database().ref('users/patients').push({
            name: name,
            email: email,
            birthday: selectedDate,
            phone: phone,
            type: 'patient',
            uid: res.user!.uid
          }).then((data)=>{
            
            window.location.href = "/";
          })
        }).catch((err)=>{
          console.log(err)
          loading.dismiss();
          error()
        })
    }
    function error() {
      const alert = document.createElement('ion-alert');
      alert.header = 'Alert';
      alert.message = 'Request cannot be processed';
      alert.buttons = ['OK'];
      document.body.appendChild(alert);
      return alert.present();
    }

    function toast(){
      const toast = document.createElement('ion-toast');
      toast.message = 'You can login now';
      toast.duration = 2000;
      toast.position = 'bottom';
      document.body.appendChild(toast);
      return toast.present();
    }

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
            <IonCard class=" align-center">
          <IonCardHeader color="dark" class="ion-text-center">Patient Account</IonCardHeader>
            <IonCardContent>
            <br></br>
              <IonLabel>Full Name</IonLabel>
            <IonItem>
              <IonInput value={name} required placeholder="Full Name" onIonChange={e => setName(e.detail.value!)}></IonInput>
            </IonItem>
            <br></br>
            <IonLabel >Birthday</IonLabel>
            <IonItem>
            <IonDatetime displayFormat="MM/DD/YYYY" min="1950-03-14" max="2012-12-09" value={selectedDate} onIonChange={e => setSelectedDate(e.detail.value!)}></IonDatetime>
            </IonItem>
            <br></br>
              <IonLabel>Phone Number</IonLabel>
            <IonItem>
              <IonInput value={phone} required placeholder="Phone" onIonChange={e => setPhone(e.detail.value!)}></IonInput>
            </IonItem>
             <br></br>
              <IonLabel>Email</IonLabel>
            <IonItem>
               <IonInput value={email}required type="email" placeholder="Email" onIonChange={e => setEmail(e.detail.value!)}></IonInput>
            </IonItem>
            <br></br>
              <IonLabel>Password</IonLabel>
            <IonItem>
               <IonInput value={password}required type="password" placeholder="Password" onIonChange={e => setPassword(e.detail.value!)}></IonInput>
            </IonItem>
        </IonCardContent>
          </IonCard>
          <IonRow>
              <IonCol>
                  <IonButton color="danger" expand="block" onClick = {Register}>Sign Up</IonButton>
              </IonCol>
          </IonRow>
        </IonContent>
        </IonPage>
    )
}



export default Register;