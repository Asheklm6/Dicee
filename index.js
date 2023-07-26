// Create a variable called randomNumber1 and set its value to a random number between 1 and 6
var randomNumber1 = Math.floor(Math.random() * 6) + 1;

//dice1.png - dice6.png
var randomDiceImage - "dice" randomNumber1 + ".png"

//images/dice1.png-images/dice6.png
var randomImageSource = "images/" + randomDiceImage;

var image1 = document.querySelectorAll ("img")[0];

image1.setAttribute("src", randomImageSource);


var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "images/dice" + randomNumber2 + ".png"

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


//If player1 wins
if (randomNumber1 > randomNumber2) {
  document.querySelector ("h1").innerHTML "🚩 Player1 Wins! 🚩";
}

else if (randomNumber2 > randomNumber1) {
  document.querySelector ("h1").innerHTML "🚩 Player2 Wins! 🚩";
}

else {
  document.querySelector ("h1").innerHTML "Draw!";
}
