const { obfuscateSecrets } = require('../../src/obfuscateSecrets');

describe("obfuscate secrets", function() {
   it("asdf", function() {
       expect(obfuscateSecrets({
           secret: 'aksfhasfha',
           x: {
               secret: '284365892365'
           }
       })).toEqual({
            secret: '*****',
            x: {
                secret: '*****'
            }
       });
   });
});
