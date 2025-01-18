# Functions

### Square Function

```javascript
function sqr(n){
    let res = n * n;
    return res;
}

console.log(sqr(5));
```

### Addition Function

```javascript
function add(a, b){
    return res = a + b;
}

console.log(add(5, 6));
```

### Calculate Salary Function

```javascript
function calSalary(name, salary){
    let tds = salary * 0.1;
    let netSalary = salary - tds;
    return netSalary;
}

let netSalary = calSalary("Rahul", 10000);
console.log(netSalary);

let netSalary1 = calSalary("Yash", 20000);
console.log(netSalary1);
```

# Function Types

### Normal Function

```javascript
function functionName(){
    //code
}
```

### Arrow Function

```javascript
functionName = () => {
    //code
};

demo = () => {
    console.log("dummy function");
};

demo();

cube = (n) => {
    let res = n * n * n;
    return res;
};

console.log(cube(5));
```

# Loops

### Types of Loops

- **for loop**
- **while loop**
- **do-while loop**
- **forEach loop**
- **for-in loop**
- **for-of loop**

### forEach Loop

```javascript
// for-each
Array.forEach(element => {
    //code
});

users.forEach(user => {
    console.log(user.name);
});
```


# Referance Video
- Week5 Class3