var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');


function acender(nome = 'fulano') {
    console.log(nome, "acendeu um cigarro");
}


function apagar(nome = 'cicrano') {


    console.log(nome, "apagou o cigarro")

}

function fumar() {

    acender();
    apagar();
}

acender('joao');



fumar();
apagar();



console.log('estou aqui');


















