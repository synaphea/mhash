import { Hash } from '../lib/index';
import * as CryptoJS from 'crypto-js';

import { expect } from 'chai';

const N = 1000;

describe(`Check hash libraries`, () => {
  it('MD2 tests', () => {
    expect(Hash.md2('testing')).to.equal('fc134df10d6ecafceb5c75861d01b41f');
    expect(Hash.hash('md2', 'testing')).to.equal('fc134df10d6ecafceb5c75861d01b41f');
  });

  it('MD5 tests', () => {
    expect(Hash.md5('testing')).to.equal('ae2b1fca515949e5d54fb22b8ed95575');
    expect(Hash.hash('md5', 'testing')).to.equal('ae2b1fca515949e5d54fb22b8ed95575');
  });

  it('SHA256 tests', () => {
    expect(Hash.sha256('testing')).to.equal('cf80cd8aed482d5d1527d7dc72fceff84e6326592848447d2dc0b0e87dfc9a90');
    expect(Hash.hash('sha256', 'testing')).to.equal('cf80cd8aed482d5d1527d7dc72fceff84e6326592848447d2dc0b0e87dfc9a90');
  });

  it('sha512 tests', () => {
    expect(Hash.sha512('testing')).to.equal('521b9ccefbcd14d179e7a1bb877752870a6d620938b28a66a107eac6e6805b9d0989f45b5730508041aa5e710847d439ea74cd312c9355f1f2dae08d40e41d50');
    expect(Hash.hash('sha512', 'testing')).to.equal('521b9ccefbcd14d179e7a1bb877752870a6d620938b28a66a107eac6e6805b9d0989f45b5730508041aa5e710847d439ea74cd312c9355f1f2dae08d40e41d50');
  });

  it('adler32 tests', () => {
    expect(Hash.adler32('testing')).to.equal('0c1e02ff');
    expect(Hash.hash('adler32', 'testing')).to.equal('0c1e02ff');
  });

  it('tiger192 tests', () => {
    expect(Hash.tiger192('testing')).to.equal('e3db9373dfa55f1f72d22c27243e6fce1d31a543d8985224');
    expect(Hash.hash('tiger192', 'testing')).to.equal('e3db9373dfa55f1f72d22c27243e6fce1d31a543d8985224');
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
