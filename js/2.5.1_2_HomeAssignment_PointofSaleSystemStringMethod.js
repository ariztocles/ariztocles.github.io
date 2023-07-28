
const store_inventory = [
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

const new_deliveries=[
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

function processDeliveries(items_obj) {
  store_inventory[items_obj.inventory_index].quantity += items_obj.quantity;
  store_inventory[items_obj.inventory_index].price_$ = items_obj.price_$;
}
new_deliveries.forEach(processDeliveries);

//console.log("Delivered items have been added to the inventory.");
//console.log("New inventory summary:");
//console.log(store_inventory);

function productSummary(items_obj){
  const item_id = items_obj.item.slice(0,3).toLowerCase();

  var remarks ="good";
  if (items_obj.quantity < 10) {
    remarks ="low";          
  }
  var message = `itemID:${item_id} | ${items_obj.item} | stocks left: ${items_obj.quantity} | Remarks: `;
  return message.concat(remarks);

}

const report_summary  = store_inventory.map(productSummary);
console.log(report_summary);











const totalProductCost = store_inventory.map(inventory => ({
  product_name: inventory.item, totalCost: inventory.price_$ * inventory.quantity
}));

console.log(totalProductCost);

[
  { product_name: 'SHAMPOO', totalCost: 24 },
  { product_name: 'SOAP', totalCost: 20 },
  { product_name: 'TOOTHPASTE', totalCost: 36 }
]