let customer = {
    customer_name: "Johnny Manggo", 
    points: 12300,
    cart: [
        {
            item: "Shampoo",
            quantity: 2,
            price_$: 3.00
        },
        {
            item: "Soap",
            quantity: 2,
            price_$: 2.00
        }, 
        {
            item: "Toothpaste",
            quantity: 1,
            price_$: 3.00
        }
    ]    
}

console.log("Hello,"+" "+ customer.customer_name +"! "+"We are happy to see you today.");
console.log("Your Current Poits are: "+ customer.points);
console.log(" ");
console.log("Purchased Items:");

let total_bill = 0;
let new_points  = 0;
let i = 0;
do {
  console.log(`${customer.cart[i].quantity} x ${customer.cart[i].item} ---- $ ${customer.cart[i].price_$.toFixed(2)}`);
  total_bill += customer.cart[i].quantity * customer.cart[i].price_$;
  new_points += customer.cart[i].quantity;
  i++;
} while (i < customer.cart.length);

console.log("------------------------------");
console.log(`total bill: $ ${total_bill.toFixed(2)}`);
console.log(`New current points: ${new_points+customer.points}`);

// let q1 = customer.cart[0].quantity; //2
// let p1 = customer.cart[0].price_$; //3
// let q2 = customer.cart[1].quantity; //2
// let p2 = customer.cart[1].price_$; //2
// let q3 = customer.cart[2].quantity; //1
// let p3 = customer.cart[2].price_$; //3
// let points = customer.points;

// do  {
//     sub1 = (q1)*(p1);    
//     //console.log(sub1);
// } while ( sub1 < 1);

// do  {
//     sub2 = (q2)*(p2);    
//     //console.log(sub2);
// } while ( sub2 < 1);

// do  {
//     sub3 = ((q3)*(p1));    
//     //console.log(sub3);
// } while ( sub3 < 1);

// do  {
//     currentpoints = points+q1+q2+q3;     
// } while ( currentpoints < 1);

// let total_bill = (sub1+sub2+sub3).toFixed(2);

// console.log( customer.cart[0].quantity + " x " + customer.cart[0].item + " ---- $ " + sub1.toFixed(2));
// console.log( customer.cart[1].quantity + " x " + customer.cart[1].item + " ---- $ " + sub2.toFixed(2));
// console.log( customer.cart[2].quantity + " x " + customer.cart[2].item + " ---- $ " + sub3.toFixed(2));
// console.log( "------------------------------");
// console.log( "Total Bill: $ "+total_bill);
// console.log( "New Current Points: " + currentpoints);

// // let i = 0;
// // do {
// //   console.log(`${customer.cart[i].quantity} x ${customer.cart[i].item} ---- $ ${customer.cart[i].price_$}`);
// //   total_bill += customer.cart[i].quantity * customer.cart[i].price_$;
// //   new_points += customer.cart[i].quantity;
// //   i++;
// //   //console.log(sub1);
// // } while (i < customer.cart.length);

// // console.log("------------------------------");
// // console.log(`total bill: ${total_bill}`);
// // console.log(`New current points: ${new_points+customer.points}`);