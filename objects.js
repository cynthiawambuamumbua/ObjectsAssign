// Given an array of objects, each object representing a person with a name and age property,
//  write a function that returns a new array containing the names 
// of all people who are 18 years old or older.
const people = [
  { name: 'Alice', age: 17 },
  { name: 'Eunice', age: 22 },
  { name: 'Charlie', age: 14 },
  { name: 'Max', age: 19 },
];
function adults(people){
  const nameAdults = [];
  for(let i = 0; i<people.length; i++){
      const names = people[i];
      if(names.age>=18){
          nameAdults.push(names.name);
      }
  }
  return nameAdults;
}
const nameAdults = adults(people)
console.log(nameAdults)


// Write a function that takes an array of objects, where each object 
// represents a product with a name, price, and category property.
//  The function should return an object that groups the products by their categories,
//  with the category names as keys and the arrays of products as values.
const products = [
  { name: 'Laptop', price: 1200, category: 'Electronics' },
  { name: 'Shirt', price: 25, category: 'Clothing' },
  { name: 'Headphones', price: 80, category: 'Electronics' },
  { name: 'Shoes', price: 60, category: 'Clothing' },
];
function arrayOfObjects(objects,category){
  let arrayOfObjects=[]
  const groupBy=(objects,category)=>{
    return products.reduce((objects,price)=>
    (objects[price[category]]=objects[price[category]]||[]).push(
      price
    ))
  }
  return objects
}
console.log(arrayOfObjects(products))

// Given an array of objects, where each object represents a student
//  with a name and an array of scores, write a function that returns a new array 
//  containing the names of all students whose average score is greater than or equal to 85.
const students = [
{ name: 'John', scores: [90, 80, 85] },
{ name: 'Jane', scores: [95, 92, 88] },
{ name: 'Jim', scores: [70, 80, 75] },
{ name: 'Jill', scores: [85, 90, 84] },
];
function newArray(names,scores){
  newArray=[]
  var averageScore=0
  for(var i=0; i<students.length;i++){
    averageScore+=students[i][1]
    var averageScore=(averageScore/students.length)
  
  }
  console.log("Average grade:"+(averageScore)/students.length)
  if(averageScore<60){
    console.log("Grade : E");
}
else if (averageScore < 70) {
console.log("Grade : D");
}
else if (averageScore < 80)
{
console.log("Grade : C");
} else if (averageScore< 90) {
console.log("Grade : B");
} else if (averageScore < 100) {
console.log("Grade : A");
}
return averageScore
    
  }
console.log(newArray(students))

// Given an object representing a car, with properties for the make, model, year, and 
// a method to display the car's information, write a function that takes the car object and adds 
// a new method to the object called age. The age method should return the
//  current age of the car based on the current year and the car's year property.
const car = {
  make: 'Ford',
  model: 'Ranger',
  year: 2023,
  displayInfo: function() {
    console.log(`Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`);
  },
};
function Carobjects(make,model,year,age){
  currentage=0
  this.make = make;
  this.model = model;
  this.year = year;
  this.age=age;
  const myCar = car("Eagle", "Talon TSi", 1993);
  return myCar
}
console.log(Carobjects(car))



