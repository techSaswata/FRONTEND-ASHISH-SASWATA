# Array Operations

## Squaring Array Elements

### Using `for` Loop
```javascript
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i = 0; i < arr.length; i++){
    console.log(arr[i] * arr[i]);
}
```

### Using `forEach` Method
```javascript
arr.forEach((n) => {
    console.log(n * n);
});
```

### Using `for` Loop to Create a New Array
```javascript
let sqrArr = [];
for (let i = 0; i < arr.length; i++){
    let sqr = arr[i] * arr[i];
    sqrArr.push(sqr);
}
console.log(sqrArr);
```

## Array Mapping and Filters

### Array Mapping
```javascript
let results = arr.map((n) => {
    return n * n;
});
console.log(results);
// Array mapping is used to create a new array from an existing array
```

### Array Mapping Example
```javascript
const users = [
    {
        firstName: "Aarav",
        lastName: "Patel",
        email: "aarav.patel@example.com",
        gender: "Male",
        salary: 50000,
        age: 28
    },
    {
        firstName: "Neha",
        lastName: "Sharma",
        email: "neha.sharma@example.com",
        gender: "Female",
        salary: 55000,
        age: 32
    },
    {
        firstName: "Vikram",
        lastName: "Singh",
        email: "vikram.singh@example.com",
        gender: "Male",
        salary: 60000,
        age: 35
    },
    {
        firstName: "Priya",
        lastName: "Gupta",
        email: "priya.gupta@example.com",
        gender: "Female",
        salary: 48000,
        age: 25
    },
    {
        firstName: "Rahul",
        lastName: "Sharma",
        email: "rahul.sharma@example.com",
        gender: "Male",
        salary: 52000,
        age: 30
    },
    {
        firstName: "Ananya",
        lastName: "Das",
        email: "ananya.das@example.com",
        gender: "Female",
        salary: 51000,
        age: 29
    },
    {
        firstName: "Aditya",
        lastName: "Mishra",
        email: "aditya.mishra@example.com",
        gender: "Male",
        salary: 58000,
        age: 33
    },
    {
        firstName: "Shreya",
        lastName: "Patel",
        email: "shreya.patel@example.com",
        gender: "Female",
        salary: 49000,
        age: 27
    },
    {
        firstName: "Arjun",
        lastName: "Kumar",
        email: "arjun.kumar@example.com",
        gender: "Male",
        salary: 54000,
        age: 31
    },
    {
        firstName: "Isha",
        lastName: "Singh",
        email: "isha.singh@example.com",
        gender: "Female",
        salary: 57000,
        age: 34
    }
];

// Getting Full Names
let names = users.map(user => user.firstName + " " + user.lastName);
console.log(names);
```

### My Method

#### Filtering Male Users
```javascript
let male = users
    .filter(user => user.gender === 'Male')
    .map(user => user.firstName);

console.log(male);
```

#### Filtering Even Numbers
```javascript
let even = arr
    .filter(n => n % 2 === 0);

console.log(even);
```

#### Filtering Female Users with Salary > 50000
```javascript
let femaleSalary = users
    .filter(user => user.gender === 'Female')
    .filter(user => user.salary > 50000)
    .map(user => user.firstName);

console.log(femaleSalary);
```


# Referance Video
- Week5 Class4