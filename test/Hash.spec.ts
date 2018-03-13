import { Hash } from '../lib/index';
import * as CryptoJS from 'crypto-js';

import { expect } from 'chai';

const N = 1000;

describe(`Check hash libraries`, () => {
  it('MD2 tests', () => {
    expect(Hash.MD2('testing')).to.equal('fc134df10d6ecafceb5c75861d01b41f');
    expect(Hash.hash('md2', 'testing')).to.equal('fc134df10d6ecafceb5c75861d01b41f');
  });
  it('MD5 tests', () => {
    expect(Hash.MD5('testing')).to.equal('ae2b1fca515949e5d54fb22b8ed95575');
  });
  it('SHA256 tests', () => {
    expect(Hash.SHA256('testing')).to.equal('cf80cd8aed482d5d1527d7dc72fceff84e6326592848447d2dc0b0e87dfc9a90');
  });
  it('adler32 tests', () => {
    expect(Hash.ADLER32('testing')).to.equal('0c1e02ff');
    expect(Hash.hash('adler32', 'testing')).to.equal('0c1e02ff');
  });

  it('Bench MD5 tests (native)', () => {
    for (let i = 0; i < N; i ++) {
      const res = Hash.hash('md2', `testing ${i}`);
    }
  });

  it('Bench MD5 tests (js)', () => {
    for (let i = 0; i < N; i ++) {
      const res = CryptoJS.MD5(`testing ${i}`);
    }
  });

  it('Bench SHA256 tests (native)', () => {
    for (let i = 0; i < N; i ++) {
      const res = Hash.hash('sha256', `testing ${i}`);
    }
  });

  it('Bench SHA256 tests (js)', () => {
    for (let i = 0; i < N; i ++) {
      const res = CryptoJS.SHA256(`testing ${i}`);
    }
  });
});
