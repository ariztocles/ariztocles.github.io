const store_inventory = [
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

const new_deliveries=[
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

console.log(store_inventory);
console.log(new_deliveries);




console.log("--------------------------------------");
let i = 0; 
do {   
  console.log(`${store_inventory[i].quantity} + ${new_deliveries[i].quantity}`
  + " = " + (store_inventory[i].quantity + new_deliveries[i].quantity));
  i++;
} while (i < store_inventory.length);
console.log("--------------------------------------");





const processDeliveries = [...store_inventory, ...new_deliveries];

console.log(processDeliveries);



/*
function processDeliveries(items_obj){
    store_inventory[items_obj.inventory_index].quantity += items_obj.quantity;
    store_inventory[items_obj.inventory_index].price_$ = items_obj.price_$;
};
*/






























