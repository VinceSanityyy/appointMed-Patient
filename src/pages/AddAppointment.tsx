import React from "react";
import {
  IonPage,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardContent,
  IonLabel,
  IonItem,
  IonInput,
  IonRow,
  IonCol,
  IonButton,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonTitle,
  useIonViewWillEnter,
  IonCardSubtitle,
  IonCardTitle,
  IonAvatar,
  IonDatetime,
} from "@ionic/react";
export const AddAppointment: React.FC = () => {
  const [detail, setDetail] = React.useState([]);
  const [selectedDate, setSelectedDate] = React.useState('')

  useIonViewWillEnter(() => {
    console.log(JSON.parse(localStorage.getItem("details")));
    setDetail(JSON.parse(localStorage.getItem("details")));
  });

  function Try() {
    console.log(selectedDate);
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/tab1" />
          </IonButtons>
          <IonTitle>Add</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Dr. {detail["name"]}</IonCardTitle>
            <IonCardSubtitle>
              Speciality: {detail["speciality"]}
            </IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>Test
          <IonLabel>MM DD YY</IonLabel>
          <IonDatetime displayFormat="MM DD YY" placeholder="Select Date" value={selectedDate} onIonChange={e => setSelectedDate(e.detail.value!)}></IonDatetime>
          </IonCardContent>
        </IonCard>
        <IonButton expand="block" color="primary" onClick={Try}>
          Add
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default AddAppointment;
