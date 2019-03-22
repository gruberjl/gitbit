# web-server

## Setup

1. Install CouchDB
2. Add CORS to CouchDB: `npm run setup:cors`

## HTTP Error Codes

| status code | File | Description |
|-----------|----|-----------|
| 400 | api | There was an issue with executing the requested action |
| 404 | * | Express doesn't have a path |
| 520 | server/gitbit/api/lib/get-tenant.js | Error finding a doc in the hostnames database |
| 521 | server/gitbit/api/lib/get-tenant.js | Error finding a doc in the tenants database |

# Production Setup

## CouchDB

https://docs.couchdb.org/en/2.3.1/install/unix.html

```
sudo apt-get update && sudo apt-get build-dep curl && sudo apt-get install curl apt-transport-https

echo "deb https://apache.bintray.com/couchdb-deb stretch main" | sudo tee -a /etc/apt/sources.list

curl -L https://couchdb.apache.org/repo/bintray-pubkey.asc | sudo apt-key add -

sudo apt-get update && sudo apt-get install couchdb

Enable CORS at /_utils/#_config/couchdb@127.0.0.1/cors

Verify install at /_utils/#/verifyinstall

# Configure private IP address https://www.digitalocean.com/docs/networking/private-networking/how-to/enable/
```

## Nodejs

https://github.com/nodesource/distributions/blob/master/README.md

```
sudo apt-get update && sudo apt-get build-dep curl && sudo apt-get install curl

curl -sL https://deb.nodesource.com/setup_10.x | bash -
apt-get install -y nodejs

npm update -g
npm install -g pm2

# Configure private IP address https://www.digitalocean.com/docs/networking/private-networking/how-to/enable/

apt install git

git clone https://github.com/gruberjl/gitbit.git
cd gitbit
npm i

nano server/lib/env/secret.js
# Copy contents of secret to file and save.

pm2 start ecosystem.config.js --env production

pm2 startup
pm2 save
```
