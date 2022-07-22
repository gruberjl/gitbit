import {collection, getDocs} from 'firebase/firestore/lite'
import {getDb} from './get-db'

const getAllDocs = (path) => {
  return getDocs(collection(getDb(), path)).then(snapshotToDocs)
}

const snapshotToDocs = (snapshot) => {
  const docs = []
  snapshot.forEach((doc) => {
    docs.push(doc.data())
  })
  return docs
}

export default getAllDocs
