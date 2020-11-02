import react from 'react'
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, useIonViewWillEnter, IonList, IonText, IonItem, IonLabel } from '@ionic/react'
import React from 'react'
import * as firebase from 'firebase'
const Chat: React.FC = () =>{
const[message, setMessage] = React.useState([])

   useIonViewWillEnter(()=>{
       firebase.database().ref('chats/').orderByChild('sender').equalTo(localStorage.getItem('uid')).on('value',(snapshot)=>{
           let key;
           let newArr = []
           snapshot.forEach((childSnap)=>{
               key = childSnap.key
               const snapVal = snapshot.val()
               newArr.push(snapVal[key])
           })
           setMessage(newArr)
           console.log(message)
       })
   })

   const saveDetails = ((e,elem)=>{
    localStorage.setItem('conversationDetails', JSON.stringify(elem))
    })
    return(
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>
                        Messages
                    </IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonList>
                {message.map((elem,index)=>{
                     return(
                       <IonItem onClick={(e)=> saveDetails(e,elem)} routerLink="/conversation" key={index}>
                            <IonLabel className="font-weight: bold;"><h2>{elem['reciever_name']}</h2>
                            <IonText><h4>Last Message: {elem['timestamp']}</h4></IonText>
                            </IonLabel>
                       </IonItem>
                     )
                  })}
                </IonList>
            </IonContent>
        </IonPage>
    )
}

export default Chat;