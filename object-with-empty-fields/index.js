const { filter } = require("lodash");
const _ = require("lodash");

const obj = {
    a: 1,
    b: 3,
    c: null,
    d: undefined,
}

function getFilteredArray(obj) {
    const asArray = _.toPairs(obj);
    const filtered = _.filter(asArray, function ([k, v]) {
        return typeof v !== "undefined" && typeof v !== "object"
    })
    const obj2 = _.fromPairs(filtered);
    return obj2;
}
console.log(getFilteredArray(obj));