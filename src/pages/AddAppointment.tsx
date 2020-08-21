import React from 'react'
import { IonPage, IonContent, IonCard, IonCardHeader, IonCardContent, IonLabel, IonItem, IonInput, IonRow, IonCol, IonButton, IonHeader, IonToolbar, IonButtons, IonBackButton, IonTitle, useIonViewWillEnter, IonCardSubtitle, IonCardTitle } from '@ionic/react';
export const AddAppointment:React.FC = () =>{

    const [detail, setDetail] = React.useState([])

    useIonViewWillEnter(()=>{
        console.log(JSON.parse(localStorage.getItem("details")))
        setDetail(JSON.parse(localStorage.getItem("details")))
    })
    
    function Try(){
        console.log(detail)
    }
   
    return(
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons  slot="start">
                        <IonBackButton defaultHref="/tab1" />
                    </IonButtons>
                    <IonTitle>Add</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
            <IonCard>
          <IonCardHeader>
            <IonCardTitle>{detail['name']}</IonCardTitle>
            <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
            
          </IonCardHeader>

          <IonCardContent>
                asdasdasdadasdasda
      </IonCardContent>
        </IonCard>
           
            </IonContent>
            <IonButton expand="block" color="primary" onClick={Try}>Add</IonButton>
        </IonPage>
    )
}

export default AddAppointment;