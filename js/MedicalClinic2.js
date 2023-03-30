const birth_year = 1999;
let current_year = new Date().getFullYear();
let age = current_year - birth_year; 
console.log( `Patient’s age: ${age}`);

function getUserInput(){
     var birthyear = document.getElementById("birthyear").value;
     var currentyear = document.getElementById("currentyear").value;
     let age2 = currentyear - birthyear; 
     document.getElementById("age2").innerHTML =`Patient’s age: <span class='underline'> ${age2}` + "</span><br>"
}

let btnClear =document.querySelector('#clear')
let inputs =document.querySelectorAll('input')

btnClear.addEventListener('click',()=>{
  inputs.forEach(input => input.value = '');
  document.getElementById("age2").innerHTML = " "; 
});

