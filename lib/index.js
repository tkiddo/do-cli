#!/usr/bin/env node
'use strict';

var commander = require('commander');
var fs = require('fs');
var path = require('path');
var child_process = require('child_process');
var iconv = require('iconv-lite');
var chalk = require('chalk');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var fs__default = /*#__PURE__*/_interopDefaultLegacy(fs);
var path__default = /*#__PURE__*/_interopDefaultLegacy(path);
var iconv__default = /*#__PURE__*/_interopDefaultLegacy(iconv);
var chalk__default = /*#__PURE__*/_interopDefaultLegacy(chalk);

var name = "do";
var version = "1.0.0";
var description = "";

const copyToClipboard = (source) => {
    const buffer = fs__default["default"].readFileSync(path__default["default"].resolve(process.cwd(), source));
    const content = buffer.toString();
    child_process.exec('clip').stdin.end(iconv__default["default"].encode(content, 'gbk'));
    console.log(chalk__default["default"].green('copy to clipboard success'));
    return content;
};

const program = new commander.Command();
program.name(name).version(version).description(description);
program.command('welcome').action(() => {
    console.log('welcome to do-cli');
});
program
    .command('clip')
    .description('copy file to clipboard')
    .argument('<file>', 'file to copy')
    .action((file) => {
    copyToClipboard(file);
});
program.parse();
