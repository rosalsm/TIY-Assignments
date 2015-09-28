//JQUERY
//we want to trigger the elements h2. Everytime we click on them
//the element li#first-acc will add attribute class='cbp-ntopen' to
//in conexion with the css file open the first accordion.

$('h2').on('click',function(e){
  $('li#first-acc').addClass('cbp-ntopen')

});





















//JAVASCRIPT
// function openfirstacc (clickTitle){
//
// // clickTitle.currentTarget
// liacc.className = "cbp-ntopen";
// }
// // for(var i=0; i < liacc.length; i++){
// //
// //   clickTitle.currentTarget
// //   liacc[i].className = "cbp-ntopen";
// //
// // }
// bigTitle.addEventListener('click',openfirstacc);

// var bigTitle = document.querySelectorAll("h2.cbp-nttrigger");
// var liacc = document.querySelector("#first-acc");
// for (var i=0; i < liacc.length; i++){
//   bigTitle[i].addEventListener('click',function (){
//     if (liacc.ClassName = "cbp-ntopen"){
//       liacc.ClassName = "";
//     }
