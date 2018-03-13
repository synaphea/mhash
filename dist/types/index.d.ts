export declare class HashHelper {
    private nativeHasher;
    hash: (type: string, value: string) => any;
    md2: (value: string) => any;
    md5: (value: string) => any;
    sha256: (value: string) => any;
    adler32: (value: string) => any;
    tiger192: (value: string) => any;
    sha512: (value: string) => any;
}
declare const Hash: HashHelper;
export { Hash };
