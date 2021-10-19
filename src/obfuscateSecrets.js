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
    for (let key in obj) {
        if (key === 'secret') {
            obj[key] = '*****';
        }
    }
    return obj;
};

module.exports = {
    obfuscateSecrets
};