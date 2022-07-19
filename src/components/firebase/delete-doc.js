import { doc, deleteDoc as DeleteDoc } from 'firebase/firestore'
import {getDb} from './get-db'

const deleteDoc = (path, id) => {
  return DeleteDoc(doc(getDb(), path, id))
}

export default deleteDoc
