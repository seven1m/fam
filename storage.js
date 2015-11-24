'use strict';

var React = require('react-native');

var Storage = {
  get(key, cb) {
    React.AsyncStorage.getItem(key, cb);
  },

  set(key, value, cb) {
    React.AsyncStorage.setItem(key, value, cb);
  }
};

module.exports = Storage;
