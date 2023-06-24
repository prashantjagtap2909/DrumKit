// alert("hello World");

/*
getElementsByClassName doesnt return an array, but a
HTMLCollection in most, or a NodeList is some browsers
(Mozilla ref). Both of these types are Array-Like,
(meaning that they have a length property and the
objects can be accessed via their index), but are not
strictly an Array or inherited from an Array. (meaning
other methods that can be performed on an Array cannot
be performed on these types)
*/

// var classButton = document.getElementsByClassName("drum");

/*

var classButton = document.querySelectorAll(".drum");

var clickButton = function() {

  alert("I got clicked!");

};

for (var i = 0; i < classButton.length; i++) {
    classButton[i].addEventListener('click', clickButton, false);
}

// audio = new Audio('./sounds/tom-1.mp3');
// audio.play();
// console.log(this);
// this.style.color = "blue";

*/

var classButton = document.querySelectorAll(".drum").length;

for (var i = 0; i < classButton; i++) {

  document.querySelectorAll(".drum")[i].addEventListener('click', function () {

    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);

  });

}

document.addEventListener("keypress", function(event) {

  makeSound(event.key);

  buttonAnimation(event.key);

});


function makeSound(key) {

  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;

    case "j":
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;

    case "k":
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;

    case "l":
      var kick = new Audio('sounds/kick-bass.mp3');
      kick.play();
      break;


    default: console.log(key);

  }
}


function buttonAnimation(currentKey) {

  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);

}