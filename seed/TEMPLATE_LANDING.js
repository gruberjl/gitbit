module.exports = {
  _id: 'templatelanding-page',
  name: 'landing-page',
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
    </body>
    </html>
  `
}
