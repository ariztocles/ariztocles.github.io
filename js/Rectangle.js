const width = 16;
const length = 20;
let perimeter =  2 * (length) + 2 * (width);
let area =  (length) * (width);

console.log(`Width: ${width}`);
console.log(`Length: ${length}`);
console.log(`Perimeter: ${perimeter}`);
console.log(`Area: ${area}`);

function getUserInput(){
     const wid = document.getElementById("wid").value;
     const hei = document.getElementById("hei").value;
     let perimiter = 2 * (hei) + 2 * (wid);
     let area =  (hei) * (wid);
     document.getElementById("perimiter").innerHTML =`Perimeter: <span class="underline"> ${perimiter} </span><br>`;
     document.getElementById("area").innerHTML =`Area: <span class="underline"> ${area} </span><br>`;
}

let btnClear =document.querySelector('#clear')
let inputs =document.querySelectorAll('input')

btnClear.addEventListener('click',()=>{
  inputs.forEach(input => input.value = '');
  document.getElementById("perimiter").innerHTML = " "; 
  document.getElementById("area").innerHTML = " "; 
});

