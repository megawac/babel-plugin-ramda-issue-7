'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mathUtils = require('./mathUtils');

Object.keys(_mathUtils).forEach(function (key) {
  if (key === "default") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _mathUtils[key];
    }
  });
});

var _stringUtils = require('./stringUtils');

Object.keys(_stringUtils).forEach(function (key) {
  if (key === "default") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _stringUtils[key];
    }
  });
});