require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess narrow flee skull guard render remain umbrella hockey knife bridge gate'; 
let testAccounts = [
"0xcbd79ae64b6eef4ade3bd8a29a484944fdf577948c1580658cc26e9a234c8bac",
"0x24749a23329eff2956d137f5a29f65f0d75c8952f7e3839bebb2c067dc7cc24b",
"0x93a633665bd1fa91f108b1e0a29984bdff496e249f53d69bd9fc47d37b2f6154",
"0xf34c3a319471617d20f7d8fa774afe5be5c12f01c6ef16f04c2b7a2129615565",
"0x203adb455200b3b5be50900465d961800efe00f293952fc8660cdaafcfa088ec",
"0x5cdbc6a71c032178768418e729afec86f95d54eae4bf4cbabd2a7627c51275d7",
"0xb09bfa4bdde0ed92a10e78d03016c2f138efeb3f5bc1a045437005e5229fd5d1",
"0x227e35f500018a3e05fefd31ec6c15d3e7e29d5d5a28176d015b8468ca097525",
"0x23fd41c4cbe20039a06a4a2a8a37d2d14c5466155853c83f6a56e5297223b0c4",
"0xe81808865a726655e0f1ecb5e7e75f2056856f90d76ee0954aba3503a0b20a4e"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

