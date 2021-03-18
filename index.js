const axios = require('axios')
const jeus = {
  admin: {
    getServerInfo (url, auth, params) {
      return axios.post(url, params, {
        auth: auth
      }).then(function(response) {
        console.log('Authenticated');
      }).catch(function(error) {
        console.log('Error on Authentication');
      });
    }
  },
  monitor: {
    /**  API */
    attach (auth, options = {}) {
      return Request.post(auth, '/post/attach', options)
    }
  }
}

module.exports = jeus
