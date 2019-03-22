/* eslint no-console:0 */
const clone = require('clone-deep')
const generate = require('nanoid/generate')
const moment = require('moment')
const {create} = require('../db')

const save = async (doc) => {
  if (process.env.NODE_ENV === 'production') {
    const response = await create('logs', doc)
    if (response.error)
      return console.error(response)
  }
  return console.log(doc)
}

const log = async (level, obj) => {
  const now = moment()
  const doc = (typeof obj === 'string' || obj instanceof String) ? {message: obj} : clone(obj)

  doc._id = generate('1234567890abcdefghijklmnopqrstuvwxyz', 10)
  doc.pid = process.pid
  doc.process = 'web'
  doc.level = level
  doc.timeISO = now.toISOString()
  doc.timeMS = now.valueOf()

  return save(doc)
}

const logInfo = async obj => log('info', obj)

const logError = async obj => log('error', obj)

module.exports = {log, logInfo, logError}
