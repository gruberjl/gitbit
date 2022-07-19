import { doc, getDoc as GetDoc } from 'firebase/firestore/lite'
import {getDb} from './get-db'

const getDoc = (path, id) => {
  return GetDoc(doc(getDb(), path, id))
    .then(docSnapshot => docSnapshot.data())
}

export {getDoc}
