var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var nums = input.split(' ');// <-----linhas pode ser na vertical ou horizontal com (" ").
/*
1 - cachorro quente R$ 4.00
2 - X-salada        R$ 4.50 
3 - X-bancon        R$ 5.00
4 - Torrada simples R$ 2.00
5 - Refrigerante    RS 1.50
3 2     Total: R$ 10.00

*/
var cod = Number(nums[0]);
var qnt = Number(nums[1]);
var preco = 0;

if (cod == 1) {
    preco = 4.00;
} else if (cod == 2) {
    preco = 4.50;

} else if (cod == 3) {
    preco = 5.00;

} else if (cod == 4) {
    preco = 2.00;

} else if (cod == 5) {
    preco = 1.50;
}



console.log('Total: R$ ' + (preco * qnt).toFixed(2))


/*
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var nums = input.split(' ');

const cod = Number(nums[0]);
const qnt = Number(nums[1]);

const lanches = [4.00, 4.50, 5.00, 2.00, 1.50];

console.log('Total: R$ ' + (lanches[cod - 1] * qnt).toFixed(2));

*/











/*
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var nums = input.split(' ');

const cod = Number(nums[0]);
const qnt = Number(nums[1]);

const lanches = {
  '1': 4.00,
  '2': 4.50,
  '3': 5.00,
  '4': 2.00,
  '5': 1.50,
};

console.log('Total: R$ ' + (lanches[cod] * qnt).toFixed(2));

*/


