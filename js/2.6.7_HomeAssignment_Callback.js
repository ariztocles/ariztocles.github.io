function discount( percentage, amount ){
    discounted_amount = amount - (amount * (percentage / 100));
}

function age_checker(age){
    if (age >= 10){    
        console.log(`Ture!  ${age} years old`);        
        return true;   
    }
    else{  
       console.log(`Fase!  ${age} years old`);             
       return false;  
    }
}
// age_checker(9);
// age_checker(10);
// age_checker(11);
console.log("--------------------------------------------------");

function calculate (customer_group, discount_func){
    const group_count = customer_group.length;
    var sub_total = group_count * 299;
    
    if(group_count < 6){        
       return `Sorry, No Discount => ${group_count} customers => Bill: ${sub_total}`
    }

    const all_aged_10_and_above = customer_group.every(age_checker => age_checker >= 10);

    var discount =0;
    var grand_total =0;

    if(all_aged_10_and_above === true){        
        discount = 15;
        grand_total = (sub_total) - ( (discount/100)*(sub_total) ).toFixed(2);
        console.log(`sub_total ${sub_total} - ${((discount/100)*sub_total).toFixed(2)}(${discount}%)`);     
        return `${discount}% discount. => ${group_count} customers => Bill: ${grand_total}`;
    }
    else {
        discount = 10;  
        grand_total = (sub_total) - ( (discount/100)*(sub_total) ).toFixed(2);
        console.log(`sub_total ${sub_total} - ${((discount/100)*sub_total).toFixed(2)}(${discount}%)`);
        return `${discount}% discount. => ${group_count} customers => Bill: ${grand_total}`;
    }  
}
customer_group1 = [ 8,12,11,11,18,24,5,10];
console.log(calculate(customer_group1, discount));
console.log("--------------------------------------------------");

customer_group2 = [ 10,11,11,13,19,14];
console.log(calculate(customer_group2, discount));
console.log("--------------------------------------------------");

customer_group3 = [ 12,12,14];
console.log(calculate(customer_group3, discount));
console.log("--------------------------------------------------");
