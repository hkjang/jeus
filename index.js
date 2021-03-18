const axios = require('axios')

const jeus = {
  admin: {
    command (url, auth, params) {
      return axios.post(url, params, {
        auth: auth
      });
    },
    api (url, auth, params) {
      let commands = {
        "jeusadmin": params
      }
      return axios.post(url, commands, {
        auth: auth
      });
    }
  }
}

module.exports = jeus
