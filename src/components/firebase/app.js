import { initializeApp } from 'firebase/app'

const firebaseConfig = {
  apiKey: "AIzaSyBAnWR_MHwMJtAGtisRow9dFPJQ3vUy_Vw",
  authDomain: "web-server-9d634.firebaseapp.com",
  databaseURL: "https://web-server-9d634.firebaseio.com",
  projectId: "web-server-9d634",
  storageBucket: "web-server-9d634.appspot.com",
  messagingSenderId: "54819552991",
  appId: "1:54819552991:web:bf1a4246ed6c35a98ab36a"
}

const app = initializeApp(firebaseConfig)
 
export {app}
