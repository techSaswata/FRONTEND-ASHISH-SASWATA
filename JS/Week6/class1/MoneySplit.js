function split(){
    let amount = document.getElementById('amount')
    let persons = document.getElementById('persons')
    let result = document.getElementById('result')

    result.innerText = (amount.value / persons.value).toFixed(2)
}