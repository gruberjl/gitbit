import { doc, deleteDoc as DeleteDoc } from 'firebase/firestore/lite'
import {getDb} from './get-db'

const deleteDoc = (path, id) => {
  return DeleteDoc(doc(getDb(), path, id))
}

export default deleteDoc
