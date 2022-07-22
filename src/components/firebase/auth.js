import {getAuth as getAuth2} from 'firebase/auth'
import './app'

let auth

const getAuth = () => {
  if (!auth)
    auth = getAuth2()

  return auth
}

export {getAuth}
