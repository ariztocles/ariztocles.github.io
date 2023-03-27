let firstName = "Aristocles";
let middleName = "of";
let lastName = "Messene";
const msg = (`Hello, ${firstName} ${middleName} ${lastName}! "How can we help you today?" `);
console.log(msg);

document.write("\"Hello, Aristocles of Messene!\"<br> \"How can we help you today?\"");


function getUserInput(){
     var firstName = document.getElementById("firstName").value;
     var LastName = document.getElementById("lastName").value;
    //  document.getElementById("patient").innerHTML = firstName + " " + LastName;
     document.getElementById("patient").innerHTML = "Hello," + "<span class='patient'>" + firstName + " " + LastName + "</span><br>" + "How can we help you today?";

}

let btnClear =document.querySelector('#clear')
let inputs =document.querySelectorAll('input')

btnClear.addEventListener('click',()=>{
    inputs.forEach(input => input.value = '');
    document.getElementById("patient").innerHTML = " "; 
});

function show(shown, hidden) {
    document.getElementById(shown).style.display = 'block';
    document.getElementById(hidden).style.display = 'none';
    return false;
}