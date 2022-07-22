import './app'
import {signInWithEmailAndPassword as signInWithEmailAndPassword2} from 'firebase/auth'
import {getAuth} from './auth'

const signInWithEmailAndPassword = (email, password) => {
  return signInWithEmailAndPassword2(getAuth(), email, password)
}

export default signInWithEmailAndPassword
