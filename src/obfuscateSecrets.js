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

const a /* : X */ = {}; // лезет
const b /* : X */ = { x: 100 }; // не лезет
const c /* : X */ = { secret: "asdf" }; // лезет

function obfuscateSecrets(obj /* : X */) /* : Y */ {
    return obj;
}

module.exports = {
    obfuscateSecrets
};