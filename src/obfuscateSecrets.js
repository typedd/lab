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

/*
foo: { secret: '123' } => { secret: '*****' }
bar: { a: { secret: 'asdf' } } => { a: { secret: '*****' } }
{ a: { secret: 'asdf' } } => { secret: 'asdf' }

{
    x: 100,
    xx: { secret: 'xxx' },
    xxx: {
        aaa: { 
            x: 200,
            xx: { secret: 'yyy' }
        }
    },
    secret: 'asdlhfas',
}
*/

// foo :: { secret: '123' } => { secret: '*****' }
function foo(obj) {
    return ({
        ...obj,
        secret: '*****',
    } /* : Y */);
}

// bar :: { a: { secret: 'asdf' } } => { a: { secret: '*****' } }
function bar(obj) {

    return {
        a: foo(obj.a) // obj.a({ secret: 'asdf' }) => { secret: '*****' }
    }
}

function obfuscateSecrets(obj /* : X */) /* : Y */ {
    
}

module.exports = {
    obfuscateSecrets
};