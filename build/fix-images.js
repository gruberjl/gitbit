import admin from "firebase-admin"
const {getApps} = require("firebase-admin/app")
import serviceAccount from "./firestore.json"
const stringify = require('json-stable-stringify')
import getImageDimensions from './get-image-dimensions'

if ( !getApps().length ) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://web-server-9d634.firebaseio.com"
  })
}

const db = admin.firestore()

const fixImages = async () => {
    const articles = []

    const querySnapshot = await db.collection("courses").doc('MS-500').collection('contents').where('type', '==', 'article').get()
  
    querySnapshot.forEach((doc) => {
      const article = doc.data()
      articles.push(article)
    })

    for (let i = 0; i < articles.length; i++) {
      let updatedArticle = false

      for (let j = 0; j < Object.keys(articles[i].article.entityMap).length; j++) {
        const map = Object.keys(articles[i].article.entityMap)[j]
        if (articles[i].article.entityMap[map].type == 'IMAGE') {
          if (!articles[i].article.entityMap[map].data.width || !articles[i].article.entityMap[map].data.height) {
            updatedArticle = true
            const dimensions = await getImageDimensions(articles[i].article.entityMap[map].data.src)
            articles[i].article.entityMap[map].data.height = dimensions.height
            articles[i].article.entityMap[map].data.width = dimensions.width
            
          }
        }
      }

      if (updatedArticle) {
        console.log(JSON.stringify(articles[i], null, 2))
        await db.collection('courses').doc('MS-500').collection('contents').doc(articles[i].id).set(articles[i])
      }
    }
}

fixImages()