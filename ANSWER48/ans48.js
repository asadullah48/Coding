var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var ratesA = [329, 359, 319];
var ratesB = [209, 239, 269];
var mergePrices = __spreadArray(__spreadArray([], ratesA, true), ratesB, true).sort(function (y, z) { return y - z; });
console.log(mergePrices);
