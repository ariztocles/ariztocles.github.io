var isLoggedIn = false;
var userID =null;

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
            Name: "tony",
            LastName: "stark",
            Gender: "Male",
            Address: "new york",
            Balance: 0,
            pin: 654321,
            userName:"ironman",
            password:"ironman69" 
        },    
        {
            Name: "bruce",
            LastName: "banner",
            Gender: "Male",
            Address: "new york",
            Balance: 0,
            pin: 111111,
            userName:"hulk",
            password:"hulk143" 
        }  
    ],
    checkBankBalance: function(){
        console.log("the bank balance is: ₱" + this.bankMoney);
    },
    depositBankMoney: function(amount){
        this.bankMoney += amount; //bank.bankMoney = amount +bank.bankMoney 
        console.log("Deposited: ₱"+ amount);
    },
    withdrawBankMoney: function(amount){
        if(amount <= this.bankMoney && amount > 0){
            this.bankMoney -= amount;
            console.log("deducted ₱" + amount.toFixed(2) + " To The Vault!" );
        }
        else{
            console.log("there is something wrong, Insufficient Bank Money!" );
        } 
    }
  
} 

function accountControl (){
        function loginUser(username,password ){
            
            bank.Accounts.forEach((element, index) => {
                //console.log(index); // 0 1
                if(element.userName == username && element.password == password){
                    isLoggedIn = true;
                    userID = index;
                    console.log("hi " + element.Name+ " " + element.LastName);
                }
                //else{"forEach will return true is one value is true"}
            });

            if(!isLoggedIn){
                userID = null;
                console.log("invalid credentials");
            }
        }

        function showError(msg){
            console.error(msg);
        }

        function depositMoney(amount){
            if(isLoggedIn){
                bank.Accounts[userID]. Balance += amount;
                bank.depositBankMoney(amount);
                console.log("Adds ₱" + amount.toFixed(2) + " to the vault")
            }
            else{
                showError("please log in!")
            }
        }

        function checkBalance(){
            if(isLoggedIn){
                console.log("your account balance is ₱" + bank.Accounts[userID].Balance.toFixed(2)+ ".")
            }
            else{
                showError("please log in!")
            }
        }

        function withdrawMoney(amount){
            if(isLoggedIn){
                if(bank.Accounts[userID].Balance >= amount && amount > 0){
                    bank.Accounts[userID].Balance -= amount;
                    bank.withdrawBankMoney(amount);
                    console.log("you withdraw ₱" + amount.toFixed(2) + "to to your account.");
                }
                else{
                    showError("some thing went wrong 1");
                }
            }
            else{
                showError("some thing went wrong 2");
            }

        }
        return {
            showError,
            withdrawMoney,
            checkBalance,
            depositMoney,
            loginUser         
        }
}

/*
loginUser("username", "password");
depositMoney(500);
depositMoney(800);
withdrawMoney(250);
checkBalance();
console.log("----------------------------------");
console.log("");

loginUser("ironman", "ironman69");
depositMoney(350000);
depositMoney(350000);
checkBalance();
console.log("----------------------------------");
bank.checkBankBalance();
console.log("");
*/

var aristocles = accountControl();
aristocles.loginUser("username", "password");
aristocles.depositMoney(500);
aristocles.depositMoney(800);
aristocles.withdrawMoney(250);
aristocles.checkBalance();
console.log("----------------------------------");
console.log("");

var tony = accountControl();
tony.loginUser("ironman", "ironman69");
tony.depositMoney(350000);
tony.depositMoney(350000);
tony.checkBalance();
console.log("----------------------------------");
bank.checkBankBalance();
console.log("");








function bankControl(callback, data){
    callback(data);
}

function addUser(info){
    bank.Accounts.push(info);
    console.log("=> ... "+ info.Name +" " + info.LastName + " has been added");
}

   

function removeUser(id){
    isLoggedIn = false;    
    console.log(bank.Accounts[id].Name + " " +  bank.Accounts[userID].LastName + " has been removed ");
    userID = null;
    bank.Accounts.splice(id, 1);
}

/*
addUser(
    {
        Name: "jason",
        LastName: "beggar",
        Gender: "Male",
        Address: "poorvile",
        Balance: 0,
        pin: 555000,
        userName:"123",
        password:"123" 
    }  
);
*/
bankControl(addUser,{
    Name: "jason",
    LastName: "beggar",
    Gender: "Male",
    Address: "poorvile",
    Balance: 0,
    pin: 555000,
    userName:"123",
    password:"123" 
});


/*
loginUser("123", "123");
depositMoney(70);
withdrawMoney(20);
console.log("----------------------------------");
*/

var jason = accountControl();
jason.loginUser("123", "123");
jason.depositMoney(70);
jason.withdrawMoney(20);
console.log("----------------------------------");

//removeUser(2);
bankControl(removeUser, 2);
//loginUser("hulk", "hulk143");
var bruce = accountControl();
bruce.loginUser("hulk", "hulk143");