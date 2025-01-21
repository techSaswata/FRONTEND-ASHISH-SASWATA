function roll(){
    let dice = document.getElementById('dice');
    let random= Math.floor(Math.random()*6)+1;
    let audio = document.getElementById('diceAudio');
    audio.play();
    dice.classList.add('spin');

    // setTimeout(function, delay(is always in milli seconds))
    // setTimeout(function(){}, delay)
    setTimeout(function(){
        dice.classList.remove('spin');
        dice.innerText = random;
    }, 1000)
}

