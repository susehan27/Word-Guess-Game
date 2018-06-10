var words = ["winking", "smiling", "starstruck", "thinking", "neutral", "smirking", "sleeping", "drooling", "unamused", "confused", "crying", "fearful", "angry", "nauseated", "shushing", "nerd"];
var randomWord = "";
var letters = [];
var numBlanks = 0;
var output = [];
var letterGuessed = "";
var wrongGuesses = [];

var winCounter = 0;
var lossCounter = 0;
var attemptsLeft = 9;

function start() {
    attemptsLeft = 9;
    randomWord = words[Math.floor(Math.random()*words.length)];
    letters = randomWord.split("");
    numBlanks = letters.length;
    output = [];
    wrongGuesses = [];
    for (var i = 0; i < numBlanks; i++) {
        output.push("_");
    }
    
    $("#emojiPics").click( function() {
        if (randomWord === "winking") {
            $("#emojiPics").attr("src", "assets/images/winking.png");
        }
        else if (randomWord === "smiling") {
            $("#emojiPics").attr("src", "assets/images/smiling.png");
        }
        else if (randomWord === "starstruck") {
            $("#emojiPics").attr("src", "assets/images/starstruck.png");
        }
        else if (randomWord === "thinking") {
            $("#emojiPics").attr("src", "assets/images/thinking.png");
        }
        else if (randomWord === "neutral") {
            $("#emojiPics").attr("src", "assets/images/neutral.png");
        }
        else if (randomWord === "smirking") {
            $("#emojiPics").attr("src", "assets/images/smirking.png");
        }
        else if (randomWord === "sleeping") {
            $("#emojiPics").attr("src", "assets/images/sleeping.png");
        }
        else if (randomWord === "drooling") {
            $("#emojiPics").attr("src", "assets/images/drooling.png");
        }
        else if (randomWord === "unamused") {
            $("#emojiPics").attr("src", "assets/images/amused.png");
        }
        else if (randomWord === "confused") {
            $("#emojiPics").attr("src", "assets/images/confused.png");
        }
        else if (randomWord === "crying") {
            $("#emojiPics").attr("src", "assets/images/crying.png");
        }
        else if (randomWord === "fearful") {
            $("#emojiPics").attr("src", "assets/images/fearful.png");
        }
        else if (randomWord === "nauseated") {
            $("#emojiPics").attr("src", "assets/images/nauseated.png");
        }
        else if (randomWord === "shushing") {
            $("#emojiPics").attr("src", "assets/images/shushing.png");
        }
        else if (randomWord === "nerd") {
            $("#emojiPics").attr("src", "assets/images/nerd.png");
        } 
    });
    $('#attemptsLeft').text(attemptsLeft);
    $('#wordLine').text(output.join(" "));
    $('#letterGuessed').text(wrongGuesses.join(" "));
}

function checkLetters(letter) {
    var correctLetter = false;

    for (var i = 0; i < numBlanks; i++) {
        if (randomWord[i] === letter) {
            correctLetter = true;
        }
    }

    if (correctLetter) {
        for (var j = 0; j < numBlanks; j++) {
            if (randomWord[j] === letter) {
                output[j] = letter;
            }
        }
    }
    else {
        wrongGuesses.push(letter);
        attemptsLeft--;
    }
}

function endOfRound() {
    $('#attemptsLeft').text(attemptsLeft);
    $('#wordLine').text(output.join(" "));
    $('#letterGuessed').text(wrongGuesses.join(" "));

    if (letters.toString() === output.toString()) {
        winCounter++;
        $('#wins').text(winCounter);
        
        setTimeout(function () {
            alert("You Win!");
            start();
        }, 2000);
    }
    else if (attemptsLeft === 0) {
        lossCounter++;
        alert("You Lose!");
        $('#losses').text(lossCounter);
        start();
    }
}
$(document).ready(function(){
    start();

    $(document).keypress(function(event) {
        letterGuessed = String.fromCharCode(event.which).toLowerCase();
        checkLetters(letterGuessed);
        endOfRound();
    });
});