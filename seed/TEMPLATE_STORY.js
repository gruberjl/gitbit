module.exports = {
  _id: 'templatestory',
  name: 'story',
  content: `
    <!DOCTYPE html>
    <html>
    <head>
        <title>{{title}}</title>
        <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet">
        <link rel="stylesheet" type="text/css" href="/assets/styles.css">
    </head>

    <body>
      <h1>{{title}}</h1>
      <div>{{{page.content}}}</div>
      <div>This is my story.</div>
    </body>
    </html>
  `
}
