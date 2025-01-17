//Q1
let shoppingList = [
    "Milk",
    "Eggs",
    "Bread",
    ["Apples", "Bananas", "Oranges"],
    ["Potatoes", "Tomatoes", "Onions"]
];

//T1
console.log(shoppingList[0]);

//T2
shoppingList.push("Carrots");
console.log(shoppingList);

//T3
shoppingList.pop();
console.log(shoppingList);

//T4
shoppingList[4].splice(1, 2, "Cucumbers", "Bell Peppers");
console.log(shoppingList);



//Q2
let student = {
    name: "Amit",
    age: 20,
    grade: "A",
    address: {
        street: "123 Main St",
        city: "Anytown",
        country: "India"
    }
};

//T1 T2 T3 T4
console.log(student.name);
student.phone = "123-456-7890";
delete student.grade;
student.age=21;


//Q3
let num = prompt("Enter a number");
num>0 ? console.log("Positive") : num<0 ? console.log("Negative") : console.log("Zero");

//Q4
let score = prompt("Enter your score");
score >= 90 && score<=100 ? console.log("A") : score >= 80 && score<=89 ? console.log("B") : score >= 70 && score<=79 ? console.log("C") : score >= 60 && score<=69 ? console.log("D") : score<60 ? console.log("F") : console.log("Invalid score");

//Q5
if("Hello"){
    console.log("Truthy");
}
else{
    console.log("Falsy");
}


