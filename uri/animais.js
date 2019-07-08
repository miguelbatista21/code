var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');// <-----linhas pode ser na vertical ou horizontal com (" ").

const entrada1 = lines[0];
const entrada2 = lines[1];
const entrada3 = lines[2];

const animais = {
    vertebrado: {
        ave: {
            onivoro: 'pomba',
            carnivoro: 'aguia',
        },
        mamifero: {
            onivoro: 'homem',
            herbivoro: 'vaca',
        },
    },
    invertebrado: {
        inseto: {
            hematofago: 'pulga',
            herbivoro: 'lagarta',
        },
        anelideo: {
            hematofago: 'sanguessuga',
            onivoro: 'minhoca',
        },
    },
};

console.log(animais[entrada1][entrada2][entrada3]);
