import './app'
import {getAuth} from './auth'
import {signOut as signOut2} from 'firebase/auth'

const signOut = () => {
  const auth = getAuth()
  return signOut2(auth)
}

export {signOut}
