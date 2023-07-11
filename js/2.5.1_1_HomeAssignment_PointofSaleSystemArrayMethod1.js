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
            inventory_index:0
        },
        {
            item: "Soap",
            quantity: 10,
            price_$: 2,
            inventory_index:1
        }, 
        {
            item: "Toothpaste",
            quantity: 10,
            price_$: 3,
            inventory_index:2 
        }
    ]    
}
//console.log(store_inventory);
//console.log(new_deliveries);

console.log("--------------------------------------");
let i = 0; 
do {   
  console.log(`${store_inventory.items[i].quantity} + ${new_deliveries.items[i].quantity}`
  + " = " + (store_inventory.items[i].quantity + new_deliveries.items[i].quantity));
  i++;
} while (i < store_inventory.items.length);
console.log("--------------------------------------");

function processDeliveries(items_obj){
    store_inventory.items[items_obj.inventory_index].quantity += items_obj.quantity;
    store_inventory.items[items_obj.inventory_index].price_$ = items_obj.price_$;
}

new_deliveries.forEach(processDeliveries);
console.log("delivered items have been added to the inventory.");
console.log("New Inventory Summary:");
console.log(store_inventory);