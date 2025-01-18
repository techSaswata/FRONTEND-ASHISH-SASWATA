//function

function sqr(n){
    let res = n*n;
    return res;
}

console.log(sqr(5));


function add(a,b){
    return res = a+b;
}

console.log(add(5,6));


function calSalary(name, salary){
    let tds = salary*0.1;
    let netSalary = salary - tds;
    return netSalary;
}

let netSalary = calSalary("Rahul", 10000);
console.log(netSalary);

let netSalary1 = calSalary("Yash", 20000);
console.log(netSalary1);




//Normal Function
function functionName(){
    //code
}


//Arrow Function
functionName = () => {
    //code
}


demo = () => {
    console.log("dummy function");
}

demo();



cube = (n) => {
    let res = n*n*n;
    return res;
}

console.log(cube(5));



//loops => for, while, do-while, for-each, for-in, for-of



//for-each
Array.forEach (element => {
    //code
});


users.forEach(user => {
    console.log(user.name);
});

