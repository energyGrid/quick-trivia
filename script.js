//bronze: 5 questions displaying corect and incorrect
//silver: questions rotate one at a time
//gold: scores are tracked, css complete

/*Hard code questions worked. Need Object literal to
create dynamic questions. Use */

let QUIZ_QA;
let QUESTION_ANSWER;
var qQuestion;
var qAnswer;

// .ready prevents functions from running until after html loads
$(document).ready(function(){
// $(".qOne").hide();
// $(".qTwo").hide();
// $(".startButton").click(function(){
//   $(".qOne").show();
// })

// var QuestionOne = $(".buttonOne").on("click", function(){
//   var userInput = $(".inputOne").val()
//   var answer = "aa";
//   if (userInput === answer) {
//     console.log("Correct");
//     $(".answer").html("Correct")
//     $(".qTwo").show();
//   } else {
//     console.log("Please Try Again");
//     $(".answerOne").html("Incorrect, Please try again")
//   }
// })
//
// var QuestionTwo = $(".buttonTwo").on("click", function(){
//     var userInput = $(".inputTwo").val()
//     var answer = "bb";
//     if (userInput === answer) {
//       console.log("Correct");
//       $(".answerTwo").html("Correct")
//       $(".qTwo").show();
//     } else {
//       console.log("Please Try Again");
//       $(".answerTwo").html("Incorrect, Please try again")
//     }
// })

QUESTION_ANSWER = [
  {question: "What is a", answer: "a"},
  {question: "what is b", answer: "b"},
  {question: "what is c", answer: "c"},
  {question: "what is d", answer: "d"},
  {question: "what is e", answer: "e"},
  {question: "What is f", answer: "f"},
  {question: "what is g", answer: "g"},
  {question: "what is h", answer: "h"},
  {question: "what is i", answer: "i"},
  {question: "what is j", answer: "j"}
]
i = 4
$(".question").html(QUESTION_ANSWER[i].question)

QUIZ_QA = $(".button").on("click", function(){
  // for (i = 0; i < QUESTION_ANSWER.length; i ++) {

  // var userInput = $(".input").val()
  if ($(".input").val() === QUESTION_ANSWER[i].answer) {
    console.log("Correct");
    $(".answer").html("Correct")
  } else {
    console.log("Please Try Again");
    $(".answer").html("Incorrect, Please try again")
  }
// }
})
// let answer = QUIZ_QA.filter((answer))

// for (i = 0; i < QUESTION_ANSWER.length; i ++) {
//   console.log("Answer is " + answer[i])
// }



});
