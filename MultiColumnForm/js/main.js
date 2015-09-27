

// In this case, we have a form element and has to be filled with first name,
// last name and other information.
// We can see an element <input> it has an attribute type 'text'

//If we store the value of all the elements that have input
//in their name, we get an array of these elements and their values



// var divInfo = document.querySelector('div.cbp-mc-colum');
// var inputFirstName = document.getElementById('first-name');
// console.log(divInfo);
//


// var inputsInfo = document.querySelectorAll('input');
//  console.log(inputsInfo);
//
//
// function information (){
//


//var firstName = document.getElementById('first_name');//.value;
//store the value of the element input in a variable

//function first(){
  //console.log(firstName.value);
// }
//
// firstName.addEventListener('input', first);



//1. Select the element node you want the script to respond to.
var infoInputs = document.querySelector('form');
console.log(infoInputs);
//store the form value. Get the entire form with all the elements
//first name, last name, email, country,etc.


var infoSubmit = document.querySelector('.cbp-mc-submit');
console.log(infoSubmit);
//store the value of the element to submit
//the Dom element to target is infoSubmit and the event is click
infoSubmit.addEventListener('clik', function(){
  console.log(infoInputs.item[0].nodevalue);
});
