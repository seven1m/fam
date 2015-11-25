'use strict';

var TOKEN_STORAGE_KEY = 'loginToken';

var Storage = require('./storage');

var Session = {
  getToken(cb) {
    Storage.get(TOKEN_STORAGE_KEY, cb);
  },

  login(email, password, cb) {
    fetch('http://localhost:4000/api/session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        password: password
      })
    })
    .then((response) => this.loginSuccess(response, cb))
    .catch(cb)
  },

  loginSuccess(response, cb) {
    response.json().then(function(json) {
      if (response.status == 201) {
        Storage.set(TOKEN_STORAGE_KEY, json.token, (err) => cb(err, json.token));
      } else {
        cb(json.errors)
      }
    });
  },

  logout(cb) {
    Storage.delete(TOKEN_STORAGE_KEY, cb);
  }
};

module.exports = Session;
