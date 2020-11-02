import React from 'react'
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, useIonViewWillEnter, IonButton, IonList, IonItem, IonLabel, IonText, IonRefresher, IonRefresherContent, IonBackButton, IonButtons, IonFooter, IonInput } from '@ionic/react';
import * as firebase from 'firebase'
import moment from 'moment';
import { RefresherEventDetail } from '@ionic/core';

export const Conversation: React.FC = () =>{
    const [conversationDetails, setDetails] = React.useState([])
    const [message, setMessage] = React.useState([])
    const [text, setText] = React.useState('');

    useIonViewWillEnter(()=>{
        console.log('enter')
        console.log(JSON.parse(localStorage.getItem('conversationDetails')))
        setDetails(JSON.parse(localStorage.getItem('conversationDetails')))
        console.log(conversationDetails)

        firebase.database().ref('messages/').orderByChild('sec').equalTo(localStorage.getItem('uid')).on('value',(snapshot)=>{
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
        
    function doRefresh(event: CustomEvent<RefresherEventDetail>){
        // console.log(conversationDetails)
        event.detail.complete();
        // console.log()
    }

   const sendMessage = ()=>{
        console.log('asdasd')
        firebase.database().ref('messages').push({
            sec:localStorage.getItem('uid'),
            pat:conversationDetails['reciever'],
            reciever_name: conversationDetails['reciever_name'],
            sender_name: localStorage.getItem('name'),
            sender: localStorage.getItem('uid'),
            reciever: conversationDetails['reciever'],
            lastMessageSent: text,
            timestamp: new Date().toLocaleString().replace(',','')
        })
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
                        Conversation
                    </IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
            <IonRefresher slot="fixed" onIonRefresh={doRefresh}>
            <IonRefresherContent>
                </IonRefresherContent>
            </IonRefresher>
                <IonList>
                {message.map((elem,index)=>{
                    if(elem['sender'] === localStorage.getItem('uid')){
                        return(
                            <IonItem key={index}>
                            <IonLabel>
                            <IonText className="ion-text-end"><h2>{elem['lastMessageSent']}</h2></IonText>
                            <IonText className="ion-text-end"><h4>{elem['timestamp']}</h4></IonText>
                            </IonLabel>
                       </IonItem>
                        )
                    }else{
                        return(
                            <IonItem key={index}>
                            <IonLabel>
                            <IonText className="ion-text-start"><h2>{elem['lastMessageSent']}</h2></IonText>
                            <IonText className="ion-text-start"><h4>{elem['timestamp']}</h4></IonText>
                            </IonLabel>
                       </IonItem>
                        )
                    }
                  })}
                </IonList>           
            </IonContent>
            <IonFooter>
               <IonItem>
                    <IonInput value={text} placeholder="Enter Message" onIonChange={e => setText(e.detail.value!)}></IonInput>
                    <IonButton  onClick={sendMessage} size="default">Send</IonButton>
                    </IonItem>
               </IonFooter>
        </IonPage>
    )
}

export default Conversation;