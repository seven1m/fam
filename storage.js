'use strict';

var AsyncStorage = require('react-native').AsyncStorage;

var Storage = {
  get(key, cb) {
    AsyncStorage.getItem(key, cb);
  },

  set(key, value, cb) {
    AsyncStorage.setItem(key, value, cb);
  },

  delete(key, cb) {
    AsyncStorage.removeItem(key, cb);
  }
};

module.exports = Storage;
