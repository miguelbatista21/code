var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');




var entrada = lines[0];

var anos = Math.floor(entrada / 365);

var mes = (Math.floor(entrada / 30) - (anos * 12));

var dias = (entrada - (anos * 365) - (mes * 30));// depois da virgula

anos = Math.abs(anos); // abs-transforma um numero negativo em positivo
mes = Math.abs(mes);
dias = Math.abs(dias);


console.log(anos + " ano(s)")
console.log(mes + " mes(es)")
console.log(dias + " dia(s)")


//process.s









