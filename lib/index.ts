const nativeHasher = require('../lib/binding/module.node');

export class HashHelper {
  private nativeHasher = require('../lib/binding/module.node');

  hash = (type: string, value: string) => {
    return nativeHasher.hash(type, value);
  }

  md2 = (value: string) => this.hash('md2', value);
  md5 = (value: string) => this.hash('md5', value);
  sha256 = (value: string) => this.hash('sha256', value);
  adler32 = (value: string) => this.hash('adler32', value);
  tiger192 = (value: string) => this.hash('tiger192', value);
  sha512 = (value: string) => this.hash('sha512', value);
}

const Hash = new HashHelper();

export {
  Hash
};
