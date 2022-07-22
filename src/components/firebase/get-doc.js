import {doc, getDoc as getDoc2} from 'firebase/firestore/lite'
import {getDb} from './get-db'

const getDoc = (path, id) => {
  return getDoc2(doc(getDb(), path, id))
      .then((docSnapshot) => docSnapshot.data())
}

export {getDoc}
