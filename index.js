const axios = require('axios')
const jeus = {
  admin: {
    command (url, auth, params) {
      return axios.post(url, params, {
        auth: auth
      });
    }
  }
}

module.exports = jeus
