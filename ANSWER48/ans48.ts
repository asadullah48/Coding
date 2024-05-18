let ratesA = [329, 359, 319];
let ratesB = [209, 239, 269];
let mergePrices = [...ratesA, ...ratesB].sort((y, z) => y - z);
console.log(mergePrices);
