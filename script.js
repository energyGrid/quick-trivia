$(document).ready(function(){

$(".button").on("click", function(){
  var userInput = $(".input").val()
  var answer = ["aa", "bb", "cc"];
console.log(userInput)
  if (userInput === answer) {
    console.log("Correct");
  } else {
    return "Please Try Again";
  }


for (i = 0; i < answer.length; i ++) {
  console.log("Answer is " + answer[i])
}
console.log(userInput)
console.log(answer[i])
})

});
