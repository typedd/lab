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
const d /* : X */ = 'Hello';
const e /* : X */ = { x: "Hello"} // это не лезет потому что ключ обязательно должен быть secret?

function obfuscateSecrets(obj /* : X */) /* : Y */ {
    return obj;
}

module.exports = {
    obfuscateSecrets
};