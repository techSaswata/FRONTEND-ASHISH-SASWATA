// BMI Calculator app from omni Cal
// BMI = weight/height^2

function calBmi(){
    let weight = document.getElementById('weight')
    let height = document.getElementById('height')
    let BMIdiv = document.getElementById('BMIdiv')
    let BMIprimediv = document.getElementById('BMIprimediv')
    let BMI = document.getElementById('BMI')
    let heightdropdown = document.getElementById('heightdropdown')

    BMIdiv.style.display = 'flex'
    BMIprimediv.style.display = 'flex'

    if (heightdropdown.value=='metre'){
        BMI.value = (weight.value/(height.value*height.value)).toFixed(2)
    }
    
    if (heightdropdown.value=='foot'){
        height.value = (height.value*0.3048)
        BMI.value = (weight.value/(height.value*height.value)).toFixed(2)
    }

    let BMIprime = document.getElementById('BMIprime')
    BMIprime.value = (BMI.value/25).toFixed(2)


    // BMI.value<18.5 ? remarks.innerText = ('Underweight') : BMI.value>=18.5 && BMI.value<=24.9 ? remarks.innerText = ('Normal Weight'): BMI.value>=25 && BMI.value<=29.9 ? remarks.innerText = ('OverWeight'): BMI.value>=30 && BMI.value<=35 ? remarks.innerText = ('Obesity'): BMI.value>35 ? remarks.innerText = ('Severe Obesity');
    let remarks = document.getElementById('remarks')
    if (BMI.value < 18.5) {
        remarks.innerText = 'Underweight';
    } else if (BMI.value >= 18.5 && BMI.value <= 24.9) {
        remarks.innerText = 'Normal Weight';
    } else if (BMI.value >= 25 && BMI.value <= 29.9) {
        remarks.innerText = 'Overweight';
    } else if (BMI.value >= 30 && BMI.value <= 35) {
        remarks.innerText = 'Obesity';
    } else if (BMI.value > 35) {
        remarks.innerText = 'Severe Obesity';
    } else {
        remarks.innerText = 'Invalid BMI';
    }
    
    height.value=""
    weight.value=""
}