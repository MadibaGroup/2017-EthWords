var sha3 = require('./sha3');

console.log("\nThe payword (password to remember) is:");
var payword = '0xc0ffee';
console.log(payword);

console.log("\nThe paywords from 100 to 1 are:");
var hashScratch = payword;
for(var i = 0; i < 100; i++) {
  hashScratch = sha3(hashScratch, {encoding: 'hex'});
  console.log(100-i,hashScratch);
}

console.log("\nThe root (to put in contract) is:");
hashScratch = sha3(hashScratch, {encoding: 'hex'});
console.log(hashScratch);
