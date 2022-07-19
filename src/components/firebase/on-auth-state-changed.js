import './app'
import { onAuthStateChanged as OnAuthStateChanged } from 'firebase/auth'
import {getAuth} from './auth'


const onAuthStateChanged = (callback) => {
  const auth = getAuth()

  return OnAuthStateChanged(auth, callback)
}

export {onAuthStateChanged}
 
