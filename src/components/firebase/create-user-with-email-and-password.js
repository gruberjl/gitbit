import { createUserWithEmailAndPassword as CreateUserWithEmailAndPassword  } from 'firebase/auth'
import {getAuth} from './auth'

const createUserWithEmailAndPassword = (email, password) => {
  return CreateUserWithEmailAndPassword(getAuth(), email, password)
}

export default createUserWithEmailAndPassword
