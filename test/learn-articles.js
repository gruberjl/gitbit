const testLearnArticles = async (articles, db) => {
  for (let i = 0; i < articles.length; i++) {
    const article = articles[i]
    if (article.title === '' || article.title === null) {
      article.error = `Title is blank in ${article.id}`
      console.error(article.error)
    }

    if (article.description === '' || article.description === null) {
      article.error = `Description is blank in ${article.title}`
      console.error(article.error)
    }

    if (article.featuredImage === '' || article.featuredImage === null) {
      article.error = `featuredImage is blank in ${article.title}`
      console.error(article.error)
    }

    if (article.publish === '' || article.publish === null || article.publish === false) {
      article.error = `${article.title} is not published`
      console.error(article.error)
    } else {
      if (!article.datePublished) {
        const dateObj = new Date();
        const month = dateObj.getUTCMonth() + 1;
        const day = dateObj.getUTCDate();
        const year = dateObj.getUTCFullYear();

        article.datePublished = year + "/" + month + "/" + day
        console.log(`Setting datePublished for ${article.title}`)
        const res = await db.collection("courses").doc('MS-500').collection('contents').doc(article.id).set(article)
      }
    }

    const expectedSlug = encodeURI(article.slug).replace(/[^\w-]+/g, '').replace('-' + article.id, '') + '-' + article.id
    if (article.slug === '' || article.slug === null || article.slug !== expectedSlug) {
      article.error = `slug is blank or wrong in ${article.title}. Received: ${article.slug}. expected: ${encodeURI(article.slug).replace(/[^\w-]+/g, '') + '-' + article.id}`
      console.error(article.error)
    }
  }
}

export default testLearnArticles
