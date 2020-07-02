import React, { useState } from 'react'
import { IonPage, IonContent, IonCard, IonCardHeader, IonCardContent, IonLabel, IonItem, IonInput, IonRow, IonCol, IonButton } from '@ionic/react';
import {loginUser} from '../firebase'
export const Login: React.FC = () =>{
    const [email, setEmail] = useState('');
    const [ password, setPassword ] = useState('');

    async function loginAuth(){
       const res = await loginUser(email,password)
       console.log(res)
    }

    return(
    <IonPage>
        <IonContent className="ion-padding">
         <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br>
          <IonCard class=" align-center">
          <IonCardHeader color="dark" class="ion-text-center">Login</IonCardHeader>
            <IonCardContent>
            <br></br>
              <IonLabel>Email</IonLabel>
            <IonItem>
              <IonInput value={email} required placeholder="Email" onIonChange={e => setEmail(e.detail.value!)}></IonInput>
            </IonItem>
             <br></br>
              <IonLabel>Password</IonLabel>
            <IonItem>
               <IonInput value={password}required type="password" placeholder="Password" onIonChange={e => setPassword(e.detail.value!)}></IonInput>
            </IonItem>
        </IonCardContent>
          </IonCard>
          <IonRow class="cardfooter">
            <IonCol>
            <IonButton color="success" expand="block" type="submit" onClick={loginAuth}>Login</IonButton>
            <IonButton color="danger" expand="block" routerLink='/register'>Register</IonButton>
            </IonCol>
            </IonRow> 
        </IonContent>
    </IonPage>
    )
}



export default Login;