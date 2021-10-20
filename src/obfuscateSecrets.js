// @flow
'use strict';

/* ::
type X = {
    secret: string, ...
} | {
    [string]: X
}
type Y = {
    secret: '*****', ...
} | {
    [string]: Y
}
*/

function obfuscateSecrets(obj /* : X */) /* : Y */ {
<<<<<<< HEAD
   return {
        secret: '*****',
        x: { 
            secret: '*****'
        }
}
=======
    for (let key in obj) {
        if (key === 'secret') {
            obj[key] = '*****';
        }
    }
    return obj;
};
>>>>>>> e8a4b11b2ad4f287d4958e2792406dc0bdf3b3fd

module.exports = {
    obfuscateSecrets
};