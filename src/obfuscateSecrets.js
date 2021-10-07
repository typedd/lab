// @flow
'use strict';

/* ::
type X = { 
    secret: string, ... 
} 
type Y = {
    secret: '*****', ...
} | {
    [string]: Y
}
*/

function obfuscateSecrets(obj /* : X */) /* : Y */ {
    return obj;
}

module.exports = {
    obfuscateSecrets
};