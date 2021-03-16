#!/usr/bin/env node

const axios = require('axios')
const dotenv = require('dotenv')

const handleError = err => {
  console.error(err)

  process.exit(1)
}

const returnResponse = res => res.data

const readConfig = () => {
  return new Promise((resolve, reject) => {
    const result = dotenv.config()

    if (result.error) {
      reject(result.error)
    } else {
      resolve(result.parsed)
    }
  })
}

const updateDNS = config => {
  return axios.request({
    url: '/update',
    method: 'get',
    baseURL: 'https://dynamicdns.park-your-domain.com',
    params: {
      host: config.host,
      domain: config.domain,
      password: config.password
    }
  })
}

const update = () => {
  return readConfig()
    .then(updateDNS)
    .then(returnResponse)
}

setInterval(() => {
  update()
    .then(console.log)
    .catch(handleError)
}, 3600000)
