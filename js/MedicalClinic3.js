const birth_year = 1999;
let current_year = new Date().getFullYear();
let age = current_year - birth_year; 
console.log( `Patient’s Age: ${age}`);

const current_month =  new Date().getMonth();
let birth_month = 1;
  if (birth_month  <= current_month) {          
    age = age - 1;
  }
console.log( `Patient’s Acurate Age: ${age}`);





function btnToday(){
     var birthyear = document.getElementById("birthyear").value;
     var birthmonth = document.getElementById("birthmonth").value;
     var birthdate = document.getElementById("birthdate").value;
     var currentyear = new Date().getFullYear();
     var currentmonth =  1 + new Date().getMonth();
     var current_day =  new Date().getDate();

    let age2 = currentyear - birthyear;
    let agemonth = currentmonth - birthmonth;  
    let ageday = current_day - birthdate;   
    //  var month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31] ;

    if (current_day > birthdate) { 
      ageday = current_day - birthdate;    
    
     }
    if (currentmonth > birthmonth) {     
      agemonth = currentmonth - birthmonth;       
    }

    if (current_day < birthdate) { 
       ageday = 30.4375 + (current_day - birthdate);
           if (ageday => 30) {
              agemonth = agemonth - 1;
           } 
    }     
  
    if (currentmonth < birthmonth) {       
     agemonth = agemonth + ((currentyear - birthyear)*(12));
     
    }

    document.getElementById("age2").innerHTML =`<span class='underline'> ${age2}` + "</span>";    
     document.getElementById("agemonth").innerHTML =`<span class='underline'> ${agemonth}` + "</span>"; 
     document.getElementById("ageday").innerHTML =`<span class='underline'> ${ageday}` + "</span>"; 
     document.getElementById("currentmonth").innerHTML =`<span class='underline'> ${currentmonth}` + "</span>";
     document.getElementById("current_day").innerHTML =`<span class='underline'> ${current_day}` + "</span>";
     document.getElementById("currentyear").innerHTML =`<span class='underline'> ${currentyear}` + "</span>";
}

let btnClear =document.querySelector('#clear')
let inputs =document.querySelectorAll('input')

btnClear.addEventListener('click',()=>{
  inputs.forEach(input => input.value = '');
  document.getElementById("age2").innerHTML = " "; 

let btnClear =document.querySelector('#clear') 
});




