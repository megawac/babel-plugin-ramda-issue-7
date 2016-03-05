'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.add = undefined;

var _curry = require('ramda/src/curry');

var _curry2 = _interopRequireDefault(_curry);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var add = exports.add = (0, _curry2.default)(function (x, y) {
  return x + y;
});