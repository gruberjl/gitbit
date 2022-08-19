import {doc, setDoc} from 'firebase/firestore/lite'
import {getDb} from './get-db'

const saveDoc = (path, data, merge=true) => {
  return setDoc(doc(getDb(), path, data.id), data, {merge})
}

export default saveDoc
