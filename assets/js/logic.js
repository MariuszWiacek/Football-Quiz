var startButton = document.getElementById("start");
var timer = document.getElementById("time");
var startScreen = document.getElementById("start-screen");
var endScreen = document.getElementById("end-screen")
var questionTitle = document.getElementById("question-title");
var questionsContainer = document.getElementById("questions");
var answersContainer = document.getElementById("choices");
var intro = document.getElementById("intro");
var statsContainer = document.getElementById("stats");
var feedbackContainer = document.getElementById("feedback");
var totalPoints = 0;
var pointsPerQuestion = 1;
var questionsCounter = 0;

var answerBtn;
var questionIndex = 0;
var secondsLeft = 30;

function startTimer() {
    timerInterval = setInterval(function () {
        secondsLeft--;
        timer.textContent = secondsLeft;
        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            endGame();
        }
    }, 1000)
        
};

function gameInit () {
displayQuestions();
displayAnswers();

}

function displayQuestions () {
    startScreen.style.display = "none"; // unhide start screen
    document.body.appendChild(questionsContainer);
    questionsContainer.classList.remove('hide');
    questionsContainer.style = "display: flex; flex-direction: column; justify-content = flex-start";
    questionTitle.textContent = quizQuestions[0].question;
    questionsContainer.append(questionTitle);
    questionsCounter++;
};

function displayAnswers () {
    startScreen.style.display = "none";
    document.body.appendChild(answersContainer);

    for (var i=0; i < 4; i++ ) {
    answerBtn = document.createElement('button');
    answersContainer.appendChild(answerBtn);
    answerBtn.textContent = quizQuestions[0].answers[i];
    answerBtn.addEventListener('click', function() {
        if (this.textContent === correctAnswer1)
        {correct ();}
        else {
            incorrect();
            minusTime()
        }
        
    }
        
    )

    }}

// }
// After start button pressed timer is on and game is starter - furst questions and answers appearing
startButton.addEventListener ("click", function(event) {
    event.preventDefault();
    alert("clicked")
    startTimer();
    gameInit();

}
)