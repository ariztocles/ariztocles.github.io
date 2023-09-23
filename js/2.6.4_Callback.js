
function showmessage(callback,name,yearborn){
    console.log(`hi ${name}`);
    callback(yearborn);    
}

function callbackfn(yr){
    const age = new Date().getFullYear()-yr;
    console.log(`your age is ${age}`);
}

showmessage(callbackfn,"ariztocles",1981);

// hi ariztocles
// your age is 42


//callback(function passed as an arguement);

function showmessage2(callback2,data = {}){
    var result = callback2(data);
    console.log(result / 10);
}

function ADD({num1,num2}){
    return num1 + num2;
}

function MINUS({num1,num2}){
    return num1 - num2;
}

showmessage2(ADD, {
    num1: 5,
    num2: 10,
    message:"Hello"
});

showmessage2(MINUS, {
    num1: 10,
    num2: 2,  
});





