var buttons = document.getElementsByClassName("drum");

for (var i = 0 ; i < buttons.length; i++){
    buttons[i].addEventListener("click", () => {
        var trigger = event.target.innerHTML;
        playInstrument(trigger);
        btnAnimation(trigger);
    });
}

document.addEventListener("keydown", () => {
    var keyPressed = event.key;
    playInstrument(keyPressed);
    btnAnimation(keyPressed);
} );

function playInstrument(key) {
    switch(key) {
        case "w":
            var crash = new Audio("sounds/TECH INTERFACE Computer Terminal Beeps Negative 03.wav");
            crash.volume = 0.1;
            crash.play();
            break;
        case "a":
            var kick = new Audio("sounds/TECH WEAPON Gun Shot Phaser Down 02.wav");
            kick.volume = 0.1;
            kick.play();
            break;
        case "s":
            var snare = new Audio("sounds/VOCAL CUTE Call Affection 03.wav");
            snare.volume = 0.1;
            snare.play();
            break;
        case "d":
            var tom1 = new Audio("sounds/VOCAL EVIL Impact Hit Slash 04.wav");
            tom1.volume = 0.1;
            tom1.play();
            break;
        case "j":
            var tom2 = new Audio("sounds/WATER Bubbles 02.wav");
            tom2.volume = 0.1;
            tom2.play();
            break;
        case "k":
            var tom3 = new Audio("sounds/NEGATIVE Failure Descending Chime 05.wav");
            tom3.volume = 0.1;
            tom3.play();
            break;
        case "l":
            var tom4 = new Audio("sounds/SPLAT Crush 01.wav");
            tom4.volume = 0.1;
            tom4.play();
            break;
        default:
            console.log("default switch case");
            break;
    }
}

function btnAnimation(key) {
    var activeBtn = document.querySelector("." + key);
    activeBtn.classList.toggle("pressed");
    setTimeout(() => {
        activeBtn.classList.toggle("pressed");
    }, 100);
}
