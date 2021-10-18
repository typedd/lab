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
const c1 /* : X */ = {secret: "asdf", a: 'b'}; // лезет
const c2 /* : X */ = {secret: "asdf", a: 2}; // лезет
const d /* : X */ = 'Hello'; // не лезет
const e /* : X */ = {['Hello']: {}} // лезет
const f /* : Y */ = {secret: '*****'} // лезет
const g /* : Y */ = {['Hello']: {}} // лезет
const h /* : Y */ = {secret: 'asdf'} // не лезет



function obfuscateSecrets(obj /* : X */) /* : Y */ {
    return obj;
}

module.exports = {
    obfuscateSecrets
};