import React, { useState } from 'react'
import { IonPage, IonHeader, IonContent, IonToolbar, IonTitle, IonBackButton, IonButtons, IonLabel, IonItem, IonInput, IonCard, IonCardHeader, IonCardContent, IonDatetime, IonRow, IonCol, IonButton } from '@ionic/react';

export const Register: React.FC = () =>{
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [phone,setPhone] = useState('')
    const [selectedDate,setSelectedDate] = useState('')

    function Register(){
        console.log('Hello')
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