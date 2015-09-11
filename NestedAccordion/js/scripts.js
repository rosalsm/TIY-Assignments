// This is what I see:
//Differences between these two .html files.
//The one without JavaScript is not interactive. It doesn't have any
//movement or changing colors.
//The accordion is not working (opem/close), it is completely expanded.
//The arrows are not interactive in terms of moving or changing colors
//either.

//Like we just deleted and changed the <script> information,
//that gives me the idea of movement and changing colors are
//effects inside this part of the code.



// we get the code to open and close the first option h3 oat cake
//
//
var heading = document.querySelectorAll('h3.cbp-nttrigger');
var liHeading = document.querySelectorAll('li.cbp-ntopen');

heading[0].addEventListener('click', function(){
  //we are looking for the click on the mouse event to open and close the h3
  //oat cake tootsie roll
  if (document.querySelector("li").className !== "cbp-ntopen"){
  document.querySelector("li").className = "cbp-ntopen";
  return true;
  }
  //if className category is not there, we want to assign it in order to open
  //the text.
  if (document.querySelector("li").className === "cbp-ntopen"){
  document.querySelector("li").className = "";
  return true;
  }
  //if className is already there you want to remove it in order to close the
  // the text
});

//here we are opening and closing the second heading
heading[1].addEventListener('click', function(){
  //we are looking for the click on the mouse event to open and close the h3
  //oat cake tootsie roll
  if (document.querySelector("li").className !== "cbp-ntopen"){
  document.querySelector("li").className = "cbp-ntopen";
  return true;
  }
  //if className category is not there, we want to assign it in order to open
  //the text.
  if (document.querySelector("li").className === "cbp-ntopen"){
  document.querySelector("li").className = "";
  return true;
  }
  //if className is already there you want to remove it in order to close the
  // the text
});






















// var heading = document.querySelector('h3.cbp-nttrigger');
//
// heading[0].addEventListener('click', function(){
//
//   if (document.querySelector("li").className !== "cbp-ntopen"){
//   document.querySelector("li").className = "cbp-ntopen";
//   return true;
//   }
//   //if className category is not there, we want to assign it in order to open
//   //the text.
//   if (document.querySelector("li").className === "cbp-ntopen"){
//   document.querySelector("li").className = "";
//   return true;
//   }
//   //if className is already there you want to remove it in order to close the
//   // the text
// });
