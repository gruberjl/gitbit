const {join} = require('path')
const express = require('express')
const vhost = require('vhost')
const greenlock = require('greenlock-express')
const env = require('../lib/env')
const {portal} = require('../portal')
const {www} = require('../www')
const {logInfo} = require('../www/lib/log')

const proxy = express()

if (env.isProd) {
  proxy.use(vhost('portal.gitbit.org', portal))
  proxy.use(vhost('gitbit.org', www))
  proxy.use(vhost('www.gitbit.org', www))
  logInfo('Starting proxy server on 80 & 443')
  greenlock.create({
    server: 'https://acme-v02.api.letsencrypt.org/directory', // 'https://acme-staging-v02.api.letsencrypt.org/directory',
    version: 'draft-11',
    email: 'john.gruber@gitbit.org',
    approveDomains: ['gitbit.org', 'www.gitbit.org', 'portal.gitbit.org'],
    agreeTos: true,
    configDir: join(__dirname, '..', '..', '..', 'certs'),
    communityMember: false,
    telemetry: false,
    app: proxy
  }).listen(80, 443)
} else {
  proxy.use(vhost('portal.localhost', portal))
  proxy.use(vhost('localhost', www))
  proxy.use(vhost('127.0.0.1', www))
  logInfo('Starting dev proxy server on port 3000')
  proxy.listen(3000)
}
