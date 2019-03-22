const getImages = (delta) => {
  if (!delta || !delta.ops)
    return []
  const base64s = delta.ops
    .filter(op => Boolean(op.insert.image))
    .map(op => op.insert.image)

  return base64s
}

module.exports = {getImages}
