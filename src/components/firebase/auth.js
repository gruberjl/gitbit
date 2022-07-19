import { getAuth as GetAuth  } from 'firebase/auth'
import './app'

let auth

const getAuth = () => {
  if (!auth)
    auth = GetAuth()

  return auth
}

export {getAuth}
 
