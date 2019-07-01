















                            5-Default Parameters





function makeShoppingList(item1='milk', item2='bread', item3='eggs'){
  console.log(`Remember to buy ${item1}`);
  console.log(`Remember to buy ${item2}`);
  console.log(`Remember to buy ${item3}`);
}

///----------------------------------------------------------------------

function greeting (name = 'stranger') {
  console.log(`Hello, ${name}!`)
}

greeting('Nick') // Output: Hello, Nick!
greeting() // Output: Hello, stranger!

//------------------------------------------------------------------------------



function funtionName
(parameter = 'Default Value', 
parameter2 = 100, 
parameter3  = true) {
 // Function body here
}





                            4-Parameters and Arguments


        
function sayThanks(name) {
  console.log('Thank you for your purchase '+ name + '! We appreciate your business.');
}
sayThanks('Miguel');

                            3-Calling a Function




function sayThanks () {
  console.log('Thank you for your purchase! We appreciate your business.');
}
sayThanks();
sayThanks();
sayThanks();


                            2-Function Declarations




function getReminder() {
  console.log('Water the plants.');
}

function greetInSpanish() {
  console.log('hello');
}
greetInSpanish();










