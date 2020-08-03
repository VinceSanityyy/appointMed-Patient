import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: 'AIzaSyA-VE-uUlhQkrrYCKF6cz6BftmPxYahO1w',
    authDomain: 'appointmedweb.firebaseapp.com',
    databaseURL: 'https://appointmedweb.firebaseio.com',
    projectId: 'appointmedweb',
    storageBucket: 'appointmedweb.appspot.com',
    messagingSenderId: '1063993361955',
    appId: '1:1063993361955:web:2f869e9f80c1167a059396'
  }

firebase.initializeApp(firebaseConfig);

export async function loginUser(email:string, password:string){
  const loading = document.createElement('ion-loading');
  loading.message = 'Please Wait..';
  document.body.appendChild(loading);
  loading.present();
  const res = await firebase.auth().signInWithEmailAndPassword(email,password).then((res)=>{
    console.log(res.user.uid)
    console.log(res.user!.email)
    loading.dismiss();
    window.location.href = "/home";
    localStorage.setItem('email',res.user!.email)
    localStorage.setItem('uid',res.user!.uid)
    firebase.database().ref('users/patients/'+localStorage.getItem('uid')).once('value',snap =>{
      console.log(snap.val())
    })
  }).catch((err)=>{
    console.log(err)
    loading.dismiss();
    accountNotFoundAlert()
  })
}
// function getUserData(uid){
//   firebase.database().ref('users/patients')
// }
function accountNotFoundAlert() {
  const alert = document.createElement('ion-alert');
  alert.header = 'Alert';
  alert.message = 'Account Not Found';
  alert.buttons = ['OK'];
  document.body.appendChild(alert);
  return alert.present();
}

// export async function loginUser(email:string, password:string){
//   const res = await firebase.auth().signInWithEmailAndPassword(email,password).then((res)=>{
//     console.log(res)
//   }).catch((err)=>{
//     console.log(err)
//   })
//   if(email == '' && password == ''){
//     console.log('success')
//     window.location.href = "/home";
//   }
// }