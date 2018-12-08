//methods
var userText = document.getElementById("user-text");
var wins = 0;
var losses = 0;
var guessLeft = 9;
var lettersGuessed = "";

//Blinking text
var whitetime = 800;
var blacktime = 800;

//These can be as long as you desire in milliseconds
setTimeout(blackFunc,whitetime);
function blackFunc(){
document.getElementById("blink").style.color = "black";
setTimeout(whiteFunc,blacktime);
}
function whiteFunc(){
document.getElementById("blink").style.color = "white";
setTimeout(blackFunc,whitetime);
}


document.onkeyup = function(event) {

    userText.textContent = event.key;
    var int = getRandomInt(1, 26);
    var retrievedLetter = letterMapping[int];

    // Return early if not key between a-z. allows the input to only show letters on the screen, 
    //not characters. Code is called: reget
    var key = event.key;
    var alphaOnly = /^[a-zA-Z]$/; 
    if(!alphaOnly.test(key)) {
    return;
    }
    

    // Compare to see if guessed letter is equal to retrieved letter
    if (event.key == retrievedLetter) {
        wins = wins + 1;
        var winsAdded  = document.getElementById("winsAdded");
        winsAdded.textContent = wins;

        //Reset number of guesses after they win
        guessLeft = 9;
        var guessLeftSpan = document.getElementById("guessLeft");
        guessLeftSpan.textContent = guessLeft;


    }
    // Guessed wrong letter
    else {
        // Deduct remaining guesses
        guessLeft = guessLeft - 1;
        var guessLeftSpan = document.getElementById("guessLeft");
        guessLeftSpan.textContent = guessLeft;

        // Tally losses
        if (guessLeft == 0) {
            losses = losses + 1;
            var lossesAdded = document.getElementById("lossesAdded");
            lossesAdded.textContent = losses;

            //Reset number of guesses after they lose
            guessLeft = 9;
            var guessLeftSpan = document.getElementById("guessLeft");
            guessLeftSpan.textContent = guessLeft;
            
            //Resets to empty string after 9 tries
            var lettersGuessedSpan = document.getElementById("lettersGuessed");
            lettersGuessed = "";
            lettersGuessedSpan.textContent = lettersGuessed;

        }

        else {
            // Shows your typed letters
            var lettersGuessedSpan = document.getElementById("lettersGuessed");
            lettersGuessed = lettersGuessed + event.key + ", ";
            lettersGuessedSpan.textContent = lettersGuessed;

        }
    
    }
    

};

var letterMapping = {

        1: 'a', 
        2: 'b', 
        3: 'c',
        4: 'd',
        5: 'e',
        6: 'f',
        7: 'g',
        8: 'h',
        9: 'i',
        10: 'j',
        11: 'k',
        12: 'l',
        13: 'm',
        14: 'n',
        15: 'o',
        16: 'p',
        17: 'q',
        18: 'r',
        19: 's',
        20: 't',
        21: 'u',
        22: 'v',
        23: 'w',
        24: 'x',
        25: 'y',
        26: 'z',
};

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
