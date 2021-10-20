const { obfuscateSecrets } = require('../../src/obfuscateSecrets');

describe("obfuscate secrets", function() {
   it("asdf", function() {
       expect(obfuscateSecrets({
           secret: 'aksfh',
           x: {
               secret: '28436'
           }
       })).toEqual({
            secret: '*****',
            x: { 
                secret: '*****'
            }
       });
   });
});
