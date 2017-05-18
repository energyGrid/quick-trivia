//bronze: 5 questions displaying corect and incorrect
//silver: questions rotate one at a time
//gold: scores are tracked, css complete

/*Hard code questions worked. Need Object literal to
create dynamic questions. Use */

//Global variables
let QUIZ_QA;
let QUESTION_ANSWER;
var bestTime = localStorage.getItem("bestTime", bestTime)
var userName = localStorage.getItem("userName", userName)
var tickTock;
var userTime;

// .ready prevents functions from running until after html loads
$(document).ready(function(){
$(".quiz").hide();
if (userName != null) {
$(".bestTime").html(userName + " completed the quiz in " + bestTime + " seconds.")
};
//used to create the timer
tickTock = 0
var timeCounter = function(){
  tickTock++
  $(".scoreKeeper").html("Timer " + tickTock)
};

$(".startButton").click(function(){
  $(".quiz").show();
  userTime = setInterval(timeCounter, 1000)
});

//snake case
QUESTION_ANSWER = [
  {question: "Where is the largest wind turbine in the world? [USA or Denmark]", answer: "Denmark", hint: "The Vestas V164 has a rated capacity of 8 MW, has an overall height of 220 m (722 ft), a diameter of 164 m (538 ft), is for offshore use."},
  {question: "Which sector produces more CO2? a: Transportation or b: Electricity and Heat Production [a/b]", answer: "b", hint: "It's not cars"},
  {question: "Does the burning of fossil fuels produce CO2 and Acid Rain? [yes/no]", answer: "yes", hint: "It's the worst"},
  {question: "___ is heat from within the earth which can be used to heat buildings or generate electricity. [geothermal energy/nuclear energy]", answer: "geothermal energy", hint: "Think dirty"},
  {question: "The energy saved by recycling one aluminium drink can is enough to run a TV for how many minutes? [30, 60, 180, 200]", answer: "180", hint: "Not 1 or 2 hours, but... "},
  {question: "The amount of energy poured onto the Earth by the Sun every 15 minutes is equivalent to what? The entire world's enery for a ____. [hour,day, month, year]", answer: "year", hint: "A really long time"}
//additional questions can be added
  // {question: "what is g", answer: "g", hint: "alphabet g"},
  // {question: "what is h", answer: "h", hint: "alphabet h"},
  // {question: "what is i", answer: "i", hint: "alphabet i"},
  // {question: "what is j", answer: "j", hint: "alphabet j"}
]
i = 0
$(".question").html("<span>" + QUESTION_ANSWER[i].question + "</span>")
$(".questionNum").html("Question Number: " + (i + 1))
$(".nextQuestion").hide()

$(".hintButton").on("click", function(){
    $(".questionHint").html(QUESTION_ANSWER[i].hint)
});
$(".restartQuiz").on("click", function(){
  location.reload();
})

//e prevents page from refreshing
QUIZ_QA = $(".answerButton").on("click", function(e){
  e.preventDefault();
  if ($(".inputField").val() === QUESTION_ANSWER[i].answer) {
    $(".answer").html("Correct")
    $(".answerButton").hide()
    i += 1
    $(".nextQuestion").show()
    $(".scoreKeeper").html()
    if ($(".inputField").val() === QUESTION_ANSWER[QUESTION_ANSWER.length - 1].answer) {
//stores timer and user name in local storage
      bestTime = tickTock.toString()
      localStorage.setItem("bestTime", bestTime)
      clearInterval(userTime)
      userName = prompt("You're an Energy Champ! Please enter your name to show off your time.")
      localStorage.setItem("userName", userName)
    }
    $(".nextQuestion").on("click", function() {
        $(".question").html(QUESTION_ANSWER[i].question)
        $(".questionNum").html("Question Number: " + (i + 1))
        $(".inputField").val("")
        $(".answerButton").show()
        $(".nextQuestion").hide()
    })
  } else {
    $(".answer").html("Incorrect, Please try again")
  }
});

});

// FEEDBACK

// Really good and dry coding. Good way to put all questions, answers and hints together.
// Good DOM using, event listeners and functions.
// I also liked localStorage using. I want to add it to my game too :)
