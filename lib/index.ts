const nativeHasher = require('../lib/binding/module.node');

export class HashHelper {
  hash = (type: string, value: string) => {
    return nativeHasher.hash(type, value);
  }

  MD2 = (value: string) => this.hash('md2', value);
  MD5 = (value: string) => this.hash('md5', value);
  SHA256 = (value: string) => this.hash('sha256', value);
  ADLER32 = (value: string) => this.hash('adler32', value);
}

const Hash = new HashHelper();

export {
  Hash
};
