import admin from "firebase-admin"
const {getApps} = require("firebase-admin/app")
import serviceAccount from "./firestore.json"
const stringify = require('json-stable-stringify')
import getImageDimensions from './get-image-dimensions'
import draftToHtml from './draftjs-to-html'

if ( !getApps().length ) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://web-server-9d634.firebaseio.com"
  })
}

const db = admin.firestore()

const fixImages = async () => {
    const tests = []

    const querySnapshot = await db.collection("courses").doc('MS-500').collection('contents').where('type', '==', 'test').get()
  
    querySnapshot.forEach((doc) => {
      const test = doc.data()
      tests.push(test)
    })

    for (let i = 0; i < tests.length; i++) {
      let updatedTest = false
      for (let k = 0; k < Object.keys(tests[i].questions).length; k++) {
        const key = Object.keys(tests[i].questions)[k]
        let updatedQuestion = false
        for (let j = 0; j < Object.keys(tests[i].questions[key].question.entityMap).length; j++) {
          const map = Object.keys(tests[i].questions[key].question.entityMap)[j]
          if (tests[i].questions[key].question.entityMap[map].type == 'IMAGE') {
            const width = tests[i].questions[key].question.entityMap[map].data.width
            const height = tests[i].questions[key].question.entityMap[map].data.height
            if (!width || !height || width === 'auto' || height === 'auto') {
              updatedTest = true
              updatedQuestion = true
              const dimensions = await getImageDimensions(tests[i].questions[key].question.entityMap[map].data.src)
              tests[i].questions[key].question.entityMap[map].data.height = dimensions.height
              tests[i].questions[key].question.entityMap[map].data.width = dimensions.width
            }
          }
        }

        for (let k = 0; k < Object.keys(tests[i].questions[key].references.entityMap).length; k++) {
          const refMap = Object.keys(tests[i].questions[key].references.entityMap)[k]
          if (tests[i].questions[key].references.entityMap[refMap].type == 'IMAGE') {
            const width = tests[i].questions[key].references.entityMap[refMap].data.width
            const height = tests[i].questions[key].references.entityMap[refMap].data.height
            if (!width || !height || width === 'auto' || height === 'auto') {
              updatedTest = true
              updatedQuestion = true
              const dimensions = await getImageDimensions(tests[i].questions[key].references.entityMap[refMap].data.src)
              tests[i].questions[key].references.entityMap[refMap].data.height = dimensions.height
              tests[i].questions[key].references.entityMap[refMap].data.width = dimensions.width
            }
          }
        }

        tests[i].questions[key].questionHtml = draftToHtml(tests[i].questions[key].question)
        tests[i].questions[key].referencesHtml = draftToHtml(tests[i].questions[key].references).replace(/\\/g, '\\\\')
      }

      if (updatedTest) {
        console.log(JSON.stringify(tests[i], null, 2))
        await db.collection('courses').doc('MS-500').collection('contents').doc(tests[i].id).set(tests[i])
      }
    }
}

fixImages()