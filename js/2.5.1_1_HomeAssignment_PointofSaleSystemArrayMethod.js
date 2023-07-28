
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
  
console.log("--------------------------------------");
let i = 0; 
do {   
    console.log(`${store_inventory[i].quantity} + ${new_deliveries[i].quantity}` + " = " 
    + (store_inventory[i].quantity + new_deliveries[i].quantity));
    i++;
} while (i < store_inventory.length);
console.log("--------------------------------------");
  
function processDeliveries(items_obj) {
store_inventory[items_obj.inventory_index].quantity += items_obj.quantity;
store_inventory[items_obj.inventory_index].price_$ = items_obj.price_$;
}
new_deliveries.forEach(processDeliveries);

console.log("delivered items have been added to the inventory.");
console.log("new inventory summary:");
console.log(store_inventory);

// --------------------------------------
// 1 + 5 = 6
// 0 + 10 = 10
// 2 + 10 = 12
// --------------------------------------
// delivered items have been added to the inventory.
// new inventory summary:
// [
//   { item: 'shampoo', quantity: 6, 'price_$': 4 },
//   { item: 'soap', quantity: 10, 'price_$': 2 },
//   { item: 'toothpaste', quantity: 12, 'price_$': 3 }
// ]








/*
const store_inventory = {   
    customer_name: "Ariztocles", 
    points: 666000,      
    items: [
        {
            item: "SHAMPOO",
            quantity: 1,
            price_$: 3
        },
        {
            item: "SOAP",
            quantity: 0,
            price_$: 2
        }, 
        {
            item: "TOOTHPASTE",
            quantity: 2,
            price_$: 3
        }
    ]    
}

const new_deliveries= {
    customer_name: "Ariztocles", 
    points: 666000,  
    items: [
        {
            item: "SHAMPOO",
            quantity: 5,
            price_$: 4,
            inventory_index:0
        },
        {
            item: "SOAP",
            quantity: 10,
            price_$: 2,
            inventory_index:1
        }, 
        {
            item: "TOOTHPASTE",
            quantity: 10,
            price_$: 3,
            inventory_index:2 
        }
    ]    
}

console.log("--------------------------------------");
let i = 0; 
do {   
    console.log(`${store_inventory.items[i].quantity} + ${new_deliveries.items[i].quantity}` + " = " 
    + (store_inventory.items[i].quantity + new_deliveries.items[i].quantity));
    i++;
} while (i < store_inventory.items.length);
console.log("--------------------------------------");
  

function processDeliveries(items_obj){
    store_inventory.items[items_obj.inventory_index].quantity += items_obj.quantity;
    store_inventory.items[items_obj.inventory_index].price_$ = items_obj.price_$;
    }
new_deliveries.items.forEach(processDeliveries);

console.log("DELIVERED ITEMS HAVE BEEN ADDED TO THE INVENTORY.");
console.log("NEW INVENTORY SUMMARY:");
console.log(store_inventory);
*/

// --------------------------------------
// 1 + 5 = 6
// 0 + 10 = 10
// 2 + 10 = 12
// --------------------------------------
// DELIVERED ITEMS HAVE BEEN ADDED TO THE INVENTORY.
// NEW INVENTORY SUMMARY:
// {
//   customer_name: 'Ariztocles',
//   points: 666000,
//   items: [
//     { item: 'SHAMPOO', quantity: 6, 'price_$': 4 },
//     { item: 'SOAP', quantity: 10, 'price_$': 2 },
//     { item: 'TOOTHPASTE', quantity: 12, 'price_$': 3 }
//   ]
// }

