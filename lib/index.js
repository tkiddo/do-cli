#!/usr/bin/env node
'use strict';

var path = require('path');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var path__default = /*#__PURE__*/_interopDefaultLegacy(path);

const pwd = () => {
    return path__default["default"].resolve(process.cwd());
};

console.log('Hello World', pwd());
