import './app'
import {onAuthStateChanged as onAuthStateChanged2} from 'firebase/auth'
import {getAuth} from './auth'


const onAuthStateChanged = (callback) => {
  const auth = getAuth()

  return onAuthStateChanged2(auth, callback)
}

export {onAuthStateChanged}
