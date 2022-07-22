import {getFirestore} from 'firebase/firestore/lite'
import {app} from './app'
import {getAuth} from './auth'

let db

const getDb = () => {
  if (!db) {
    getAuth()
    db = getFirestore(app)
  }

  return db
}

export {getDb}
