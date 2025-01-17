//Arrays
let items = ['apple', 'bread', 'butter'];
console.log(items[0]); 
items[1]= 'milk'; //changing item in an array
console.log(items);
console.log(items.length);







//Array methods
//push() method: Push method adds an element to the end of an array
items.push('juice');
console.log(items);

//pop() method: Pop method removes the last element from an array
items.pop();

//shift() method: shift method removes the first element from an array
items.shift();

//splice
arr.splice(index, deleteCount, addItemsName)
items.splice(1, 1, 'orange', 'banana');
//Warning: arr starts from 0

let list = [['apple', 'kurkure'], ['banana', 'sandwich'], ['orange', 'burger']];
console.log(list[1][0]);
 








//objects (real structure of Arrays)
let user = {
    name: 'John',
    age: 30,
    email: 'john@gmail.com',
    isAdmin: true,
    hobbies: ['reading', 'music', 'sports'],  //array inside an object

}

console.log(user.name);
console.log(user.email);
console.log(user.hobbies[0]);

console.log(typeof user); //object

user.name = 'Mike'; //changing value of a property
user.phone = '123456789'; //adding a new property
delete user.email; //deleting a property








// array of objects
let users =[
    {name: 'John', age: 30},
    {name: 'Mike', age: 25},
    {name: 'Alice', age: 35}
]
console.log(users[1].name);








//choose a random item from an array
let random = Math.floor(Math.random() * users.length); // gives a random whole number between 0 and 1  //items.length = len of array
let random1 = Math.random() * users.length; //gives a random decimal number between 0 and 1

console.log(users[random].name);






//conditional statements
let age = 24;
if (age >= 18){
    console.log('You are an adult');
}
else{
    console.log('You are a minor');
}


//truthy and falsy values
//falsy values: 0, '', "", undefined, null, NaN
//truthy values: everything else




//ternary operator
let age = 24;
age >= 18 ? console.log('You are an adult') : console.log('You are a minor');




// === (strictly equal to) => compares value and datatypes
// == (equal to) => compares value only