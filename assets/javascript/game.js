


//array of words
 var wordList = ["hermione", "zelda", "link", "taco", "pizza", "boat", "truck",
     "record", "burrito", "elephant", "lion", "salad", "frisbee", "mario", "heart", "gymnastics", "hooray", "lava", "peaches", "flute", "trombone", "legos", "donkey", "ship", "pool", "championship"];



//chooses a word from list
var wordOnDeck = wordList[Math.floor(Math.random() * wordList.length)];

//renders word with blanks instead of letters
var answers = [];

for (var i = 0; i < wordOnDeck.length; i++) {
    answers[i] = "_";
}



var remainingLetters = wordOnDeck.length;

// score isn't working=================================================================
var scoreJS = 0;
var addScoreJS = document.getElementById("scoreCSS");




//array of guessable letters
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//  chosenLetter = letters
var letterChosen = [];
var wrongLetters = [];

//start message
var startMessageJS = true;


if (startMessageJS = true) {

} else {
    // This function is run whenever the user presses a key.
    document.onkeyup = function (event) {


        var blanks = document.getElementById("blankSpaces");
        blanks.textContent = answers.join(" ");

        // Determines which key was pressed.
        var userGuess = event.key;

        // if the userGuess is in the possible guesses "letters" array and not already chosen then...
        if (letters.indexOf(userGuess) > -1 && letterChosen.indexOf(userGuess) === -1) {
            // if userGuess in in the array of the single wordOnDeck then...
            if (wordOnDeck.indexOf(userGuess) > -1) {
                // console log "correct!"
                console.log("correct!")
                // scan the wordOnDeck
                for (var j = 0; j < wordOnDeck.length; j++) {
                    // if userGuess = single letter within wordOnDeck then...
                    if (userGuess === wordOnDeck[j]) {
                        // the blank word's matching letter is switched to the user's guess
                        answers[j] = userGuess;
                    };

                };

                var blanks = document.getElementById("blankSpaces");
                blanks.textContent = answers.join(" ");

                if (answers.join("") === wordOnDeck) {
                    var resultsJS = document.getElementById("results");
                    resultsJS.textContent = "YOU WON! (This page will reset in 5 seconds.)";

                    //I could not get the score to work============================================
                    scoreJS++
                

                    setTimeout(function () { location.reload(); }, 5000);
                };

            

            } else {
                console.log("incorrect")
                wrongLetters.push(userGuess)
                var displayWrongLetters = document.getElementById("wrongLettersCSS");
                displayWrongLetters.textContent = wrongLetters.join(", ");
                if (wrongLetters.length = wrongLetters.length) {
                    var strikesJS = document.getElementById("strikesCSS");
                    strikesJS.textContent = wrongLetters.length;
                };
                if (wrongLetters.length > 9) {
                    console.log("exceeded 9 wrong letters");
                    var losingResultsJS = document.getElementById("losingResults");
                    losingResultsJS.textContent = "Better luck next time! (This page will reset in 5 seconds.)";
                    strikesJS.textContent = "10";
                    setTimeout(function () { location.reload(); }, 5000);
                };
            };
            letterChosen.push(userGuess)

            // score not working===================================================================
            addScoreJS.textContent = scoreJS;
        };
        // };

    



    };
    
};


















































































// ================================v EXTRAS v================================================
/*
    alert(answers.join(" "));
    var guess = prompt("Guess a letter or click cancel to stop");

    if (guess == null) {
        break;
    } else if (guess.length !== 1) {
        alert("enter a single letter")
    } else {
        for (var j = 0; j < wordUp.length; j++) {
            if (wordUp[j] === guess) {
                answers[j] = guess;
                remainingLetters--;
            }
        }
    }

*/

//alert(answers.join("_"));
//alert("GREAT! The answer was " + wordUp + "!");