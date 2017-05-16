//bronze: 5 questions displaying corect and incorrect
//silver: questions rotate one at a time
//gold: scores are tracked

//.ready prevents functions from running until after html loads
$(document).ready(function(){


var QuestionOne = $(".button").on("click", function(){
  var userInput = $(".input").val()
  var answer = "aa";
  if (userInput === answer) {
    console.log("Correct");
    $(".answer").html("Correct")
  } else {
    console.log("Please Try Again");
    $(".answer").html("Incorrect, Please try again")
  }


// for (i = 0; i < answer.length; i ++) {
//   console.log("Answer is " + answer[i])
// }

})

});
