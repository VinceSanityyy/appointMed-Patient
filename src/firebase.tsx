// import * as firebase from 'firebase';

// const firebaseConfig = {
//     apiKey: 'AIzaSyA-VE-uUlhQkrrYCKF6cz6BftmPxYahO1w',
//     authDomain: 'appointmedweb.firebaseapp.com',
//     databaseURL: 'https://appointmedweb.firebaseio.com',
//     projectId: 'appointmedweb',
//     storageBucket: 'appointmedweb.appspot.com',
//     messagingSenderId: '1063993361955',
//     appId: '1:1063993361955:web:2f869e9f80c1167a059396'
//   }

// firebase.initializeApp(firebaseConfig);

// export async function loginUser(email:string, password:string){
//   const res = await firebase.auth().signInWithEmailAndPassword(email,password).then((res)=>{
//     console.log(res)
//   }).catch((err)=>{
//     console.log(err)
//   })
// }

export async function loginUser(email:string, password:string){
  // const res = await firebase.auth().signInWithEmailAndPassword(email,password).then((res)=>{
  //   console.log(res)
  // }).catch((err)=>{
  //   console.log(err)
  // })
  if(email == '' && password == ''){
    console.log('success')
    window.location.href = "/home";
  }
}