import React from 'react'
import { IonContent, IonHeader, IonItem, IonLabel, IonList, IonPage, IonText, IonTitle, IonToolbar, useIonViewWillEnter } from '@ionic/react';
import * as firebase from 'firebase'
const Messages: React.FC = ()=>{
  const[message, setMessage] = React.useState([])

   useIonViewWillEnter(()=>{
       firebase.database().ref('chats/').orderByChild('reciever').equalTo(localStorage.getItem('uid')).on('value',(snapshot)=>{
           let key;
           let newArr = []
           snapshot.forEach((childSnap)=>{
               key = childSnap.key
               const snapVal = snapshot.val()
               newArr.push(snapVal[key])
           })
           setMessage(newArr)
       })
   })

   const saveDetails = ((e,elem)=>{
    localStorage.setItem('conversationDetails', JSON.stringify(elem))
    console.log('XD')
    })

    return(
        <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Messages</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
        <IonList>
                {message.map((elem,index)=>{
                     return(
                       <IonItem onClick={(e)=> saveDetails(e,elem)} routerLink="/patientConversation" key={index}>
                            <IonLabel className="font-weight: bold;"><h2>{elem['sender_name']}</h2>
                            <IonText>Last Message:<h4>{elem['timestamp']}</h4></IonText>
                            </IonLabel>
                       </IonItem>
                     )
                  })}
                </IonList>
        </IonContent>
      </IonPage>
    )
}

export default Messages;