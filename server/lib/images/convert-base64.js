const convertBase64 = async (base64) => {
  const data = base64.replace(/^data:image\/png;base64,/, '')
  const buffer = Buffer.from(data, 'base64')

  return {data, buffer}
}

module.exports = {convertBase64}
