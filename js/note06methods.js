
var methods ={
  log: function(){ 
    console.log("hello I am a method");
  },
  key: function(myName){ 
    console.log("hello " + myName +" I am a method");
  },
  items: [
    "apple",
    "banana",
    "mango"
  ], 
  showItems: function(){
    console.log(this.items);
  },  
  showItems2: function(){
    console.log(this.items[2]);
    console.log(this.items[0]);
    console.log(this.items[1]);
  } 
}
methods.log();
methods.key("Aristocles");

console.log(methods.items);
methods.showItems();
methods.showItems2();
//hello I am a method
//hello Aristocles I am a method

//[ 'apple', 'banana', 'mango' ]
//[ 'apple', 'banana', 'mango' ]

var bank = {
  bankName: "Bank Bank", 
  Address: "Space",
  bankMoney: 0,
  Accounts: [
      {
          Name: "aristocles",
          LastName: "messene",
          Gender: "Male",
          Address: "Mars",
          Balance: 0,
          pin: 123456,
          userName:"username",
          password:"password" 
      },
      {
          Name: "aristocles",
          LastName: "messene",
          Gender: "Male",
          Address: "Mars",
          Balance: 0,
          pin: 123456,
          userName:"username",
          password:"password" 
      },     
  ],
  checkBankBalance: function(){
      console.log("the bank balance is: ₱" + this.bankMoney);
  },
  depositBankMoney: function(amount){
      this.bankMoney += amount; //bank.bankMoney = amount +bank.bankMoney 
      console.log("Deposited: ₱"+ amount);
  },
  withdrawBankMoney: function(amount){
      if(amount <= this.bankMoney && amount >0){
          this.bankMoney -= amount;
          console.log("Withdrawn: ₱" +amount );
      }
      else{
          console.log("there is something wrong, Insufficient Bank Money!" );
      } 
  }

}
//console.log(obj.item[1]);
//////////////////////////////////////////////////

//convert to method
//function checkBankBalance(){
//   console.log("the bank balance is: ₱" +bank.bankMoney); // windows + period
//}  
//function depositBankMoney(amount){
//     bank.bankMoney += amount; //bank.bankMoney = amount +bank.bankMoney 
//     console.log("Deposited: ₱"+bank.bankMoney);
//}


// function withdrawBankMoney(amount){
//     if(amount <= bank.bankMoney && amount >0){
//         bank.bankMoney -= amount;
//         console.log("Withdrawn: ₱" +amount );
//     }
//     else{
//         console.log("there is something wrong, Insufficient Bank Money!" );
//     }       
// }

bank.depositBankMoney(1000);
bank.depositBankMoney(375); 
bank.withdrawBankMoney(3000);
bank.checkBankBalance();

// let radius = 2;

// function areaOfCircle(r = 3){  //r is defaulted to 3
// const pi = 3.14
// var area = pi * (r * r);
// return area.toFixed(0);
// }

// var area = areaOfCircle();
// console.log(area);


//A function is declared with an input, 
//which is stated as parameters in the parentheses or is stored in global variables.
// Instructions are the function’s body. 
//An output is often created using the “return” keyword.

////////////////////////////////////////////////////




// var tweet =  "Lorem180 ipsum dolor amet consectetur adipisicing elit. riam facere? Esse porro optio voluptate illum quis, in enim ratione perspiciatis ea possimus magni iste aperiam rerum lorem!"

// console.log( `Tweet: ${tweet.length}`);

// if (tweet.length <=180) {
//     console.log("Tweeted: " + tweet); 
//     console.log("can tweet "); 
// }
// else {    
//     console.log( `limit is 180: you have ${tweet.length}`);
//     console.log("cant tweet "); 
// }


function checkTweet(tweet, limit = 180, ending ="..."){
  if(tweet.length > limit){
      return tweet.substring(0, limit - ending.length) + ending;
  }
  else{
      return tweet;
  }
}

var tweet = checkTweet("Lorem180 ipsum dolor amet consectetur adipisicing elit. riam facere? Esse porro optio voluptate illum quis, in enim ratione perspiciatis ea possimus magni iste aperiam rerum lorem!",50);
console.log(tweet);

