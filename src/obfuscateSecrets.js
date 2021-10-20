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
    let asArray = Object.entries(obj);
    let newArray = asArray.map(function ([key, value]) {
        if (key === 'secret') {
            return [key, value = '*****']
        } else {
            return [key, value];
        }
    });
    let obj2 = Object.fromEntries(newArray);
    return obj2;
}

module.exports = {
    obfuscateSecrets
};