import './app'
import { signInWithEmailAndPassword as SignInWithEmailAndPassword } from 'firebase/auth'
import {getAuth} from './auth'

const signInWithEmailAndPassword = (email, password) => {
  return SignInWithEmailAndPassword(getAuth(), email, password)
}

export default signInWithEmailAndPassword
