//Js Basic Counter APP

let defaultValue=0;

function increment(){
    defaultValue = defaultValue+1
    let counter = document.getElementById('counter')
    counter.innerText = defaultValue
}

function decrement(){
    defaultValue = defaultValue-1
    let counter = document.getElementById('counter')
    counter.innerText = defaultValue
}