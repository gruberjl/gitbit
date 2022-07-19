import { doc, setDoc } from 'firebase/firestore/lite'
import {getDb} from './get-db'

const saveDoc = (path, data) => {
  return setDoc(doc(getDb(), path, data.id), data, { merge: true })
}

export default saveDoc
