var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var line1 = lines[0].split(' ');
var line2 = lines[1].split(' ');





// tenta pgar cada umdeles
// e colocar em variaveis

var a1 = line1[0];
var b1 = line1[1];
var c1 = line1[2];

var a2 = line2[0];
var b2 = line2[1];
var c2 = line2[2];

const soma = c1 * b1 + c2 * b2;
console.log("VALOR A PAGAR: R$ " + (soma).toFixed(2));



