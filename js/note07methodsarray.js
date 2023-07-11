/*
Array Method
.concat("joins 2 arrays");
*/
const fruit =["apple" ,"banana", "mango", "orange"];
const vegetables =["carrot","celery","eggplant"];

console.log(fruit);
console.log(vegetables);

const fruit_vegetables =fruit.concat(vegetables);
console.log(fruit_vegetables);

//.forEach("loops array elements");

fruit.forEach(function(value){
    console.log(value);
    if(value == "banana"){
        console.log("found the 🍌");
    }
}
);

//.filter("creates an array with elements from the initial array");

const num = [1,2,3,4,5,6,7,8,9,10]

const greater_than_4 =num.filter(function(value){
    return value > 4;
});

console.log(greater_than_4);

//.some("test element if true or not");

const has_orange = fruit.some(function(value){
    return value === "orange";
});

console.log(has_orange);

//.every("test every element if true or not");

const has_all_orange = fruit.every(function(value){
    return value === "orange";
});

console.log(has_all_orange);

//.map("creates a new array trasforming the old one");
const inventors = [
    {firstname: "thomas", lastname: "edison"},
    {firstname: "benjamin", lastname: "franklin"},
    {firstname: "leonardo", lastname: "da vinci"}
];

const fullname = inventors.map(function(value){
    return [value.firstname , value.lastname].join(" ");
});

console.log(fullname);

//.reduce("returns a new state of an element");

const num2 = [2,4,6,8,10];

const sum =num2.reduce(function(previous,current){
    return previous + current;
});

console.log(sum);

const array = ['Web Developer','Refocus','Web Developer',
               'Web Developer','Refocus','Awesome'];
const count = {};
array.forEach(value => {
  count[value] = (count[value] || 0) + 1;
});
console.log(count);



var count2 = {};
array.forEach((value) => {
  count2 = { ...count2, [value]: (count2[value] || 0) + 1 };
});
console.log(count2);



const count3 = array.reduce((accumulator, value) => {
  return { ...accumulator, [value]: (accumulator[value] || 0) + 1 };
},
{}
);
console.log(count3);















