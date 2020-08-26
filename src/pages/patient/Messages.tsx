import React from 'react'
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
const Messages: React.FC = ()=>{
    return(
        <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Tab 3</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonHeader collapse="condense">
            <IonToolbar>
              <IonTitle size="large">Tab 3</IonTitle>
            </IonToolbar>
          </IonHeader>
            <h1>Mesg</h1>
        </IonContent>
      </IonPage>
    )
}

export default Messages;