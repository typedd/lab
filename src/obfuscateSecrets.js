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
   return {
        secret: '*****',
        x: { 
            secret: '*****'
        }
}

module.exports = {
    obfuscateSecrets
};