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

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

const cwd = () => {
    return process.cwd();
};

const copyToClipboard = (content) => {
    return new Promise((resolve, reject) => {
        child_process.exec('clip').stdin.end(iconv__default["default"].encode(content, 'gbk'), () => {
            console.log(chalk__default["default"].green('copy success'));
            resolve(content);
        });
    });
};
const readFile = (source) => {
    const buffer = fs__default["default"].readFileSync(path__default["default"].resolve(cwd(), source));
    const content = buffer.toString();
    console.log(chalk__default["default"].green('read file success'));
    console.log(`content: ${content}`);
    return content;
};
const readAndCopy = (source) => __awaiter(void 0, void 0, void 0, function* () {
    const content = readFile(source);
    return yield copyToClipboard(content);
});
const copyCurrentPath = () => __awaiter(void 0, void 0, void 0, function* () {
    const url = path__default["default"].resolve(process.cwd());
    return yield copyToClipboard(url);
});

const program = new commander.Command();
program.name(name).version(version).description(description);
program.command('welcome').action(() => {
    console.log('welcome to do-cli');
});
// 读取文件内容
program
    .command('read')
    .description('read file content')
    .argument('<source>', 'source file')
    .action((source) => {
    readFile(source);
});
// 复制文件内容
program
    .command('rc')
    .description('read and clip file content to clipboard')
    .argument('<source>', 'source file')
    .action((source) => {
    readAndCopy(source);
});
// 复制当前路径
program
    .command('clip-path')
    .description('copy current path to clipboard')
    .action(() => {
    copyCurrentPath();
});
program.parse();
