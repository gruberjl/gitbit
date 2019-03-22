const error404 = (req, res) => {
  res.status(404).json({error: 'api route does not exist'})
}

module.exports = {error404}
