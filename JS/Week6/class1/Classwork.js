//Starting with DOM

//Getting an button to be work
// Write a finction on the html file
//Write the functionality of the function

function btnclick() {

    //Targeting the Element
    let btn = document.getElementById('btn');         
    let head1 = document.getElementById('head1');
    let paragraph = document.getElementById('para');


    //What to be changed
    btn.style.display = 'none';                         // Vanishing Button
    head1.innerText = 'Thanks for Subscribing!!';     // changing the text
    paragraph.style.display = 'none';                   //  Vanishing paargraph

}


function welcome() {
    let name = document.getElementById('studentName')
    let nameSpan = document.getElementById('nameSpan')

    nameSpan.innerText = studentName.value;
    studentName.value = "";
}


function split(){
    let amount = document.getElementById('amount')
    let persons = document.getElementById('persons')
    let result = document.getElementById('result')

    result.innerText = (amount.value / persons.value).toFixed(2)
}



