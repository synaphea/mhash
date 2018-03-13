"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const nativeHasher = require('../lib/binding/module.node');
class HashHelper {
    constructor() {
        this.nativeHasher = require('../lib/binding/module.node');
        this.hash = (type, value) => {
            return nativeHasher.hash(type, value);
        };
        this.md2 = (value) => this.hash('md2', value);
        this.md5 = (value) => this.hash('md5', value);
        this.sha256 = (value) => this.hash('sha256', value);
        this.adler32 = (value) => this.hash('adler32', value);
        this.tiger192 = (value) => this.hash('tiger192', value);
        this.sha512 = (value) => this.hash('sha512', value);
    }
}
exports.HashHelper = HashHelper;
const Hash = new HashHelper();
exports.Hash = Hash;
