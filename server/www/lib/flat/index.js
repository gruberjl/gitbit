const flat = (...args) => {
  if (args[0] instanceof Promise)
    return args[0].catch(error => ({error}))

  return new Promise((res) => {
    const cbArgs = Array.prototype.slice.call(args).splice(1)

    cbArgs.push((error, value) => {
      if (error)
        res({error, value})
      else
        res(value)
    })

    args[0](...cbArgs)
  })
}

const flatCb = cb => (...args) => new Promise((res) => {
  cb(...args, (error, value) => {
    res({error, value})
  })
})

module.exports = {flat, flatCb}
