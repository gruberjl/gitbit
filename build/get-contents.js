const admin = require("firebase-admin")
const {getApps} = require("firebase-admin/app")
const serviceAccount = require("./firestore.json")
const debug = require('debug')('gitbit:get-contents')

if ( !getApps().length ) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://web-server-9d634.firebaseio.com"
  })
}

const db = admin.firestore()

const getContents = async (course) => {
  debug(`Getting contents`)
  if (!course)
    course = (await db.collection("courses").doc('MS-500').get()).data()

  const contents = []

  const querySnapshot = await db.collection("courses").doc('MS-500').collection('contents').where('type', '==', 'article').where('publish', '==', true).get()

  querySnapshot.forEach((doc) => {
    const content = doc.data()
    contents.push(content)
  })

  // Test the contents to verify all content is there
  for (let i = 0; i < contents.length; i++) {
    const content = contents[i]
    if (content.title === '' || content.title === null) {
      content.error = `Title is blank in ${content.id}`
      console.error(content.error)
    }

    if (content.description === '' || content.description === null) {
      content.error = `Description is blank in ${content.title}`
      console.error(content.error)
    }

    if (content.featuredImage === '' || content.featuredImage === null) {
      content.error = `featuredImage is blank in ${content.title}`
      console.error(content.error)
    }

    if (content.publish === '' || content.publish === null || content.publish === false) {
      content.error = `${content.title} is not published`
      console.error(content.error)
    } else {
      if (!content.datePublished) {
        const dateObj = new Date();
        const month = dateObj.getUTCMonth() + 1; //months from 1-12
        const day = dateObj.getUTCDate();
        const year = dateObj.getUTCFullYear();

        content.datePublished = year + "/" + month + "/" + day
        console.log(`Setting datePublished for ${content.title}`)
        const res = await db.collection("courses").doc('MS-500').collection('contents').doc(content.id).set(content)
      }
    }

    const expectedSlug = encodeURI(content.slug).replace(/[^\w-]+/g, '').replace('-' + content.id, '') + '-' + content.id
    if (content.slug === '' || content.slug === null || content.slug !== expectedSlug) {
      content.error = `slug is blank or wrong in ${content.title}. Received: ${content.slug}. expected: ${encodeURI(content.slug).replace(/[^\w-]+/g, '') + '-' + content.id}`
      console.error(content.error)
    }
  }

  const sortedContents = contents.sort((a, b) => course.contentOrder.indexOf(a.id) - course.contentOrder.indexOf(b.id))
  const cleanedContents = sortedContents.map(content => {
    return {
      id: content.id,
      sectionId: content.sectionId,
      slug: content.slug,
      title: content.title,
      featuredImage: content.featuredImage
    }
  })

  return cleanedContents
}

export default getContents
