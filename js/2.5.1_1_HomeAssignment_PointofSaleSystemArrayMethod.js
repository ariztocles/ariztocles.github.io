const store_inventory = {
    items: [
        {
            item: "Shampoo",
            quantity: 1,
            price_$: 3
        },
        {
            item: "Soap",
            quantity: 0,
            price_$: 2
        }, 
        {
            item: "Toothpaste",
            quantity: 2,
            price_$: 3
        }
    ]    
}

const new_deliveries= {
    items: [
        {
            item: "Shampoo",
            quantity: 5,
            price_$: 4,
            invertory_index:0
        },
        {
            item: "Soap",
            quantity: 10,
            price_$: 2,
            invertory_index:1
        }, 
        {
            item: "Toothpaste",
            quantity: 10,
            price_$: 3,
            invertory_index:2 
        }
    ]    
}
console.log(store_inventory);
console.log(new_deliveries);
console.log("--------------------------------------");

let i = 0; 
do {   
  console.log(`${store_inventory.items[i].quantity} + ${new_deliveries.items[i].quantity}`
  + " = " + (store_inventory.items[i].quantity + new_deliveries.items[i].quantity));
  i++;
} while (i < store_inventory.items.length);

console.log("--------------------------------------");
items_obj ={};

function processDeliveries(items_obj){
    store_inventory[items_obj.inventory_index].quantity += items_obj.quantity;
    store_inventory[items_obj.inventory_index].price_$ = items_obj.price_$;
    return store_inventory;
};


console.log(store_inventory);

// store_inventory.forEach((processDeliveries) => { 

//     console.log("--------------------------------------");
//     console.log(store_inventory);

//     });   













// store_inventory.forEach((element) => {    
//     let inv = element.items.map((ITEM) => {
//         return ITEM.quantity.reduce((prev,next) => prev.quantity+ next.quantity);
//     });     
    
// console.log(inv);

/*
processDeliveries ={};

store_inventory.forEach((items_obj) => {    
    store_inventory[items_obj.inventory_index].quantity += items_obj.quantity;
    store_inventory[items_obj.inventory_index].price_$ = items_obj.price_$;
});

console.log(processDeliveries);
*/





// processDeliveries.forEach(items_obj=> {
//     store_inventory[items_obj.inventory_index].quantity += items_obj.quantity;
//     store_inventory[items_obj.inventory_index].price_$ = items_obj.price_$;    
// });


// console.log(store_inventory);
























//console.log(store_inventory);
//console.log(new_deliveries);

/*
const process_Deliveries = { // merge arrays, last value will replace the first
    ...store_inventory, 
    ...new_deliveries
    //object.assign(store_inventory,new_deliveries)
}
console.log(process_Deliveries);
*/

// store_inventory.forEach(Item => {
//     //total = total + Item.price_$
//     total += Item.store_inventory.price_$ ;   
// });










// function processDeliveries(items_obj){
//     store_inventory[items_obj.inventory_index].quantity += items_obj.quantity;
//     store_inventory[items_obj.inventory_index].price_$ = items_obj.price_$;
// }















//let nums = [1 ,2, 3, 4, 5]
// nums.forEach((element)  => {
// //     console.log(element);
// // });

// //store_inventory
// store_inventory.forEach((n)  => {
//     console.log(n);
// // });

// // forEach() =  Performs a function for each 
// //              element in an array.

// let total = 0;
// let cart = [5, 6, 7, 8, 9];

// function checkOut(element, index, array){
    
//     total += element;
// }

// //let cart = [5, 6, 7, 8, 9];
// cart.forEach(checkOut);
