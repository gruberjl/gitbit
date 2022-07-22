import {createUserWithEmailAndPassword as createUserWithEmailAndPassword2} from 'firebase/auth'
import {getAuth} from './auth'

const createUserWithEmailAndPassword = (email, password) => {
  return createUserWithEmailAndPassword2(getAuth(), email, password)
}

export default createUserWithEmailAndPassword
