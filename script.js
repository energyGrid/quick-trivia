//bronze: 5 questions displaying corect and incorrect
//silver: questions rotate one at a time
//gold: scores are tracked, css complete

/*Hard code questions worked. Need Object literal to
create dynamic questions. Use */

let QUIZ_QA;
let QUESTION_ANSWER;

// .ready prevents functions from running until after html loads
$(document).ready(function(){
$(".quiz").hide();

var tickTock = 0
var timeCounter = function(){
  tickTock++
  $(".scoreKeeper").html(tickTock)
}

$(".startButton").click(function(){
  $(".quiz").show();
var userTime = setInterval(timeCounter, 1000)
})

QUESTION_ANSWER = [
  {question: "What is a", answer: "a", hint: "alphabet a"},
  {question: "what is b", answer: "b", hint: "alphabet b"},
  {question: "what is c", answer: "c", hint: "alphabet c"},
  // {question: "what is d", answer: "d"},
  // {question: "what is e", answer: "e"},
  // {question: "What is f", answer: "f"},
  // {question: "what is g", answer: "g"},
  // {question: "what is h", answer: "h"},
  // {question: "what is i", answer: "i"},
  // {question: "what is j", answer: "j"}
]
i = 0
$(".question").html(QUESTION_ANSWER[i].question)
$(".questionNum").html("Question Number: " + (i + 1))
$(".nextQuestion").hide()

$(".hintButton").on("click", function(){
    $(".questionHint").html(QUESTION_ANSWER[i].hint)
})

QUIZ_QA = $(".answerButton").on("click", function(e){
  e.preventDefault();
  if ($(".inputField").val() === QUESTION_ANSWER[i].answer) {
    $(".answer").html("Correct")
    $(".answerButton").hide()
    i += 1
    $(".nextQuestion").show()
    $(".scoreKeeper").html()
    if ($(".inputField").val() === QUESTION_ANSWER[QUESTION_ANSWER.length - 1].answer) {
      alert("You Won!")
    }
    $(".nextQuestion").on("click", function() {
        $(".question").html(QUESTION_ANSWER[i].question)
        $(".questionNum").html("Question Number: " + (i + 1))
        $(".iputField").val("")
        $(".answerButton").show()
        $(".nextQuestion").hide()
    })
  } else {
    $(".answer").html("Incorrect, Please try again")
  }
  // return false;
})

});
