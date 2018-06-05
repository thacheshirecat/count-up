$(document).ready(function(){

$("#number-form").submit(function(event){
  event.preventDefault();

  var firstInput = parseInt($("#first-number").val());
  var secondInput = parseInt($("#second-number").val());
  var secondInputTwo = parseInt($("#second-number").val());
  var doubleSecondInput = secondInput * 2;
  var numberArray = [];

    numberArray.push(secondInput);
  for (var index = doubleSecondInput; index <= firstInput; index += secondInputTwo) {
    secondInput += secondInputTwo;
    numberArray.push(secondInput);
  }

  var resultsPrint = numberArray.toString();
  $("#results").text(resultsPrint);



});


});
