var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
/*
61 Brasilia
71 Salvadr
11 Sao paulo
21 Rio de Janeiro
32 Juiz de Fora
19 Campinas
27 Vitoria
31 Belo Horizonte
*/
var num = Number(lines[0]);
var ddd = "DDD nao cadastrado";

if (num == 61) {
    ddd = "Brasilia";
} else if (num == 71) {
    ddd = "Salvador";
} else if (num == 11) {
    ddd = "Sao Paulo";
} else if (num == 21) {
    ddd = "Rio de Janeiro";
} else if (num == 32) {
    ddd = "Juiz de Fora";
} else if (num == 19) {
    ddd = "Campinas";
} else if (num == 27) {
    ddd = "Vitoria";
} else if (num == 31) {
    ddd = "Belo Horizonte";
}


console.log(ddd)
