# Arrays

```javascript
let items = ['apple', 'bread', 'butter'];
console.log(items[0]); 
items[1]= 'milk'; //changing item in an array
console.log(items);
console.log(items.length);
```

### Array Methods

- **push() method**: Push method adds an element to the end of an array

```javascript
items.push('juice');
console.log(items);
```

- **pop() method**: Pop method removes the last element from an array

```javascript
items.pop();
```

- **shift() method**: Shift method removes the first element from an array

```javascript
items.shift();
```

- **splice() method**:

```javascript
arr.splice(index, deleteCount, addItemsName);
items.splice(1, 1, 'orange', 'banana');
// Warning: arr starts from 0
```

### Nested Arrays

```javascript
let list = [['apple', 'kurkure'], ['banana', 'sandwich'], ['orange', 'burger']];
console.log(list[1][0]);
```

# Objects

### Real Structure of Arrays

```javascript
let user = {
    name: 'John',
    age: 30,
    email: 'john@gmail.com',
    isAdmin: true,
    hobbies: ['reading', 'music', 'sports'],  // array inside an object
};

console.log(user.name);
console.log(user.email);
console.log(user.hobbies[0]);
console.log(typeof user); // object

user.name = 'Mike'; // changing value of a property
user.phone = '123456789'; // adding a new property
delete user.email; // deleting a property
```

### Array of Objects

```javascript
let users = [
    {name: 'John', age: 30},
    {name: 'Mike', age: 25},
    {name: 'Alice', age: 35},
];
console.log(users[1].name);
```

# Choosing a Random Item from an Array

```javascript
let random = Math.floor(Math.random() * users.length); // gives a random whole number between 0 and items.length
let random1 = Math.random() * users.length; // gives a random decimal number between 0 and items.length

console.log(users[random].name);
```

# Conditional Statements

```javascript
let age = 24;
if (age >= 18) {
    console.log('You are an adult');
} else {
    console.log('You are a minor');
}
```

### Truthy and Falsy Values
- **Falsy values**: `0`, `''`, `""`, `undefined`, `null`, `NaN`
- **Truthy values**: Everything else

# Ternary Operator

```javascript
let age1 = 24;
age >= 18 ? console.log('You are an adult') : console.log('You are a minor');
```

# Strict Equality vs Equality

- `===` (strictly equal to): Compares value and data types
- `==` (equal to): Compares value only


# Referance Video
- Week5 Class2