var startButton = document.getElementById("start");
var timeLeft = document.getElementById("time");
var startScreen = document.getElementById("start-screen");
var endScreen = document.getElementById("end-screen")
var questionTitle = document.getElementById("question-title");
var questionContainer = document.getElementById("questions");
var multipleAnswers = document.getElementById("choices");
var intro = document.getElementById("intro");
var rules1 = document.getElementById("rules-1");
var statsContainer = document.getElementById("stats");
var feedbackContainer = document.getElementById("feedback");
var totalPoints = 0;
var pointsPerQuestion = 3;

var questionIndex = 0;
var timeQuestion = 30;

startButton.addEventListener ("click", function(event) {
    event.preventDefault();
    alert("clicked")

}
)