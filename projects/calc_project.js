//click event
var click = "click";

var plus = document.querySelector("#plus");
var minus = document.querySelector("#minus");
var divide = document.querySelector("#divide");
var multiply = document.querySelector("#multiply");
var answer = document.querySelector("#answer");

var plus_answer = function(){
  var num1 = parseInt(document.querySelector("#num1").value);
  var num2 = parseInt(document.querySelector("#num2").value);
  var total = num1 + num2;
  answer.value = total;
}

var minus_answer = function(){
  var num1 = parseInt(document.querySelector("#num1").value);
  var num2 = parseInt(document.querySelector("#num2").value);
  var total = num1 - num2;
  answer.value = total;
}

var divide_answer = function(){
  var num1 = parseInt(document.querySelector("#num1").value);
  var num2 = parseInt(document.querySelector("#num2").value);
  if(num2 === 0){
    alert("Why would you divide by zero?")
    answer.value = "You're stupid"
  }
  else{
    var total = num1 / num2;
    answer.value = total;
  }
}

var multiply_answer = function(){
  var num1 = parseInt(document.querySelector("#num1").value);
  var num2 = parseInt(document.querySelector("#num2").value);
  var total = num1 * num2;
  answer.value = total;
}


plus.addEventListener(click, plus_answer);
minus.addEventListener(click, minus_answer);
divide.addEventListener(click, divide_answer);
multiply.addEventListener(click, multiply_answer);
