//combine functions using closures
function bank(name){
    let balance = 0;

    console.log(name);

    function deposit(amount){
        balance += amount;

        console.log( "ADD MONEY " + amount);
    }

    function checkbalance(){
        console.log("balance is " + balance);        
    }
/*
    return { // return method
        dep: deposit,
        check: checkbalance
    }; 
*/
    return { // return method
        deposit, // deposit: deposit
        checkbalance // checkbalance: function(){}
    };  

}
/*
bank("ariztocles").dep(500);
bank("ariztocles").check();


ariztocles
ADD MONEY 500
ariztocles
balance is 0
*/

var bnk = bank("ARIZTOCLES !");

bnk.deposit(500);
bnk.deposit(800);
bnk.checkbalance();
/*
ARIZTOCLES !
ADD MONEY 500
ADD MONEY 800
balance is 1300
*/




