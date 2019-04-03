

console.log('Hello');
/*

function sayHello(){
    console.log('Hi, Im on node');
}

sayHello();

*/

//returns the square root
var myMath = require('./mathlib');

function createProduct(){
    return {
        id: 23,
        name: 'random product',
        price: 42
    };
}

function init(){

    var res = myMath.sqrt(25);
    console.log('Sqr: ', res);

    var r1 = myMath.even(23);
    var r2 = myMath.even(824);
    console.log ('evens?:' , r1, r2);
    
    //try if 
    // 42 it is a valid int
    // 42 it is a valid float
    // Z it is a valid int

    var q1 = myMath.itsValidInt(42);
    var q2 = myMath.itsValidFloat(42);
    var q3 = myMath.itsValidInt('z');
    console.log(q1,q2,q3);

    var p1 = createProduct();
    var p2 = createProduct(); 
}

init();