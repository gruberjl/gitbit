import './app'
import {getAuth} from './auth'
import { signOut as SignOut  } from 'firebase/auth'

const signOut = () => {
  const auth = getAuth()
  return SignOut(auth)
}

export {signOut}
 
