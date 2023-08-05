
const store_inventory=[
    {
        item: "shampoo",
        quantity: 1,
        price_$: 3
    },
    {
        item: "soap",
        quantity: 0,
        price_$: 2
    }, 
    {
        item: "toothpaste",
        quantity: 2,
        price_$: 3
    }
]    
  
const new_deliveries=[
    {
        item: "shampoo",
        quantity: 5,
        price_$: 4,
        inventory_index:0
    },
    {
        item: "soap",
        quantity: 10,
        price_$: 2,
        inventory_index:1
    }, 
    {
        item: "toothpaste",
        quantity: 10,
        price_$: 3,
        inventory_index:2 
    }
]   
  
/*
function processDeliveries(items_obj) {
store_inventory[items_obj.inventory_index].quantity += items_obj.quantity;
store_inventory[items_obj.inventory_index].price_$ = items_obj.price_$;
}
*/

const processDeliveries = function(items_obj){
    store_inventory[items_obj.inventory_index].quantity += items_obj.quantity;
    store_inventory[items_obj.inventory_index].price_$ = items_obj.price_$;     
}
new_deliveries.forEach(processDeliveries);

console.log("delivered items have been added to the inventory.");
console.log("new inventory summary:");
console.log(store_inventory);
console.log(" ");
/*
function productSummary(items_obj){
    const item_id = items_obj.item.slice(0,3).toLowerCase();
  
    var remarks ="good";
    if (items_obj.quantity < 10) {
      remarks ="low";          
    }
    var message = `itemID:${item_id} | ${items_obj.item} | stocks left: ${items_obj.quantity} | Remarks: `;
    return message.concat(remarks);  
  }
*/

const productSummary  = (items_obj) => {
    const item_id = items_obj.item.slice(0,3).toLowerCase();
  
    var remarks ="GOOD";
    if (items_obj.quantity < 10) {
      remarks ="LOW";          
    }
    var message = `ItemID:${item_id} | ${items_obj.item} | STOCKS LEFT: ${items_obj.quantity} | REMARKS: `;
    return message.concat(remarks);  
  }

const report_summary  = store_inventory.map(productSummary);
console.log(report_summary);
console.log(" ");


//fuction declaration
function greeting(message){
    console.log(message);
}
greeting("jello world");

//jello world

//function expression
const greeting2 = function (message){
    console.log(message);
}
greeting("jello world !!");

//jello world !!

const greeting3 = function (message){
    return message;
}
console.log("!!! " + greeting3("mellow world"));

//!!! mellow world

//arrow function

const greeting4 = (message) => message;

console.log("!V " + greeting4("hello refocus"));

//!V hello refocus

