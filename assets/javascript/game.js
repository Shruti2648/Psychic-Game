var computerChoices = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

var wins = 0;
var losses = 0;
var guessesLeft = 10;
var guessesSoFar = [];

var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesLeftText = document.getElementById("guesses-left-text");
var guessesSoFarText = document.getElementById("guesses-so-far-text");

winsText.textContent = "Wins: " + wins;
lossesText.textContent = "Losses: " + losses;
guessesLeftText.textContent = "Guesses Left: " + guessesLeft;
guessesSoFarText.textContent = "Guesses So Far: " + guessesSoFar;

var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

document.onkeyup = function(event) {
    var userGuess = event.key;
    guessesSoFar.push(userGuess);

    if (userGuess === computerGuess) {
        alert ("You won this round! I was thinking of the letter " + computerGuess + "!");
        wins++;
        guessesLeft = 10;
        guessesSoFar = [];
        computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    }
    else if (userGuess !== computerGuess) {
        alert ("That's not it! Keep trying!");
        guessesLeft--;
    }
    if (guessesLeft == 0) {
        alert ("You lost this round! I was thinking of the letter " + computerGuess + "!");
        losses++;
        guessesLeft = 10;
        guessesSoFar = [];
        computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    }
    
    winsText.textContent = "Wins: " + wins;
    lossesText.textContent = "Losses: " + losses;
    guessesLeftText.textContent = "Guesses Left: " + guessesLeft;
    guessesSoFarText.textContent = "Guesses So Far: " + guessesSoFar;
}