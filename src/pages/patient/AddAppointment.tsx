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
import moment from 'moment'
import * as firebase from 'firebase'
export const AddAppointment: React.FC = () => {
  const [detail, setDetail] = React.useState([]);
  const [selectedDate, setSelectedDate] = React.useState('')
  const [selectedTime, setSelectedTime] = React.useState('')

  useIonViewWillEnter(() => {
    console.log(JSON.parse(localStorage.getItem("details")));
    setDetail(JSON.parse(localStorage.getItem("details")));
  });

  function Try() {
    const loading = document.createElement('ion-loading');
    loading.message = 'Please Wait..';
    document.body.appendChild(loading);
    loading.present();
    console.log(moment(selectedDate).format('YYYY-MM-DD'))
    console.log(moment(selectedTime).format('h:mm A'))
    firebase.database().ref('appointments').push({
      doctor: detail['name'],
      doctor_email: detail['email'],
      patient: localStorage.getItem('name'),
      date: moment(selectedDate).format('YYYY-MM-DD'),
      time: moment(selectedTime).format('h:mm A'),
      status: 'pending',
      patient_email: localStorage.getItem('email'),
      queueNo: 99
    })
    loading.dismiss()
    window.location.href = "/home/tab1"
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
          <IonCardContent>
          <IonLabel position="floating">Select Date</IonLabel>
          <IonDatetime displayFormat="MM/DD/YYYY" pickerFormat="MM/DD/YYYY" placeholder={moment().format('YYYY-MM-DD')} value={selectedDate} onIonChange={e => setSelectedDate(e.detail.value!)}></IonDatetime>
          <IonLabel>Time</IonLabel>
          <IonDatetime displayFormat="h:mm A" pickerFormat="h:mm A" placeholder={moment().format('h:mm A')} value={selectedTime} onIonChange={e => setSelectedTime(e.detail.value)}></IonDatetime>
          </IonCardContent>
        </IonCard>
        <IonButton expand="block" color="primary" onClick={Try}>
          Set Schedule
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default AddAppointment;
