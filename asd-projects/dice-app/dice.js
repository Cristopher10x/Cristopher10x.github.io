$(document).ready(function () {
  $("<div>")
    .css("height", 15)
    .css("width", 15)
    .css("background-color", "blue")
    .css("position", "absolute")
    .css("top", 50)
    .css("left", 50)
    .appendTo("#die"); // Your code goes here
});


function rollDie(dieId) {
  var randomNum = Math.ceil(Math.random() * 6);
  console.log(randomNum);
}

function handleClick() {
  rollDie("#die");
}

$("#die").on("click", handleClick);
