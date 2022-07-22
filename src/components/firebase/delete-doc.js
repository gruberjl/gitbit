import {doc, deleteDoc as deleteDoc2} from 'firebase/firestore/lite'
import {getDb} from './get-db'

const deleteDoc = (path, id) => {
  return deleteDoc2(doc(getDb(), path, id))
}

export default deleteDoc
