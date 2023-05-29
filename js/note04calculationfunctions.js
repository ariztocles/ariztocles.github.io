var obj = {
    num1: 100,
    num2: 50,
    sum: 150,
    difference: 50,
    product: 500,
    quotient: 2  
}

function showData(){    
    console.log("===========================");
    console.log(`First Number: ${obj.num1}`);
    console.log(`Second Number: ${obj.num2}`);
    console.log(`The Sum is: ${obj.sum}`);
    console.log(`The Difference is: ${obj.difference}`);
    console.log(`The Product is: ${obj.product}`);
    console.log(`The Quotient is: ${obj.quotient}`);  
}


function add(a,b){
    return a+b; 
}

function subtract(a,b){
    return a-b; 
}


function multiply(a,b){
    return a*b; 
}


function divide(a,b){
    return a/b; 
}
// console.log(add(obj.num1,obj.num2));
// console.log(subtract(obj.num1,obj.num2));
// console.log(multiply(obj.num1,obj.num2));
// console.log(divide(obj.num1,obj.num2));

function newSetOfNumbers(a,b){
    obj.num1 =a;
    obj.num2 =b;
    obj.sum = add(a,b);
    obj.difference = subtract(a,b);
    obj.product = multiply(a,b);
    obj.quotient = divide(a,b,);
}
showData();
newSetOfNumbers(200,10);
// console.log(obj.num1);
// console.log(obj.num2);
showData();
newSetOfNumbers(500,20);
showData();