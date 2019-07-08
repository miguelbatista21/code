var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var nums = input.split(' ');

const cod = Number(nums[0]);


const months = ['January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'];

console.log(months[cod - 1]);
