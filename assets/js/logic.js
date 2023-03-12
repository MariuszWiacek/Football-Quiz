var startButton = document.getElementById("start");
var timer = document.getElementById("time");
var startScreen = document.getElementById("start-screen");
var endScreen = document.getElementById("end-screen")
var questionTitle = document.getElementById("question-title");
var questionsContainer = document.getElementById("questions");
var answersContainer = document.getElementById("choices");
var statsContainer = document.getElementById("stats");
var feedbackContainer = document.getElementById("feedback");


var totalPoints = 0;
var pointsPerQuestion = 1;
var questionsCounter = 0;

var answerBtn;
var questionIndex = 0;
var secondsLeft = 100;

var finalScore = document.getElementById("final-score");
var submitBtn = document.getElementById('submit');
var initials = document.getElementById("initials");


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

function gameInit() {
    displayQuestions();
    displayAnswers();

}


function gameOver () {
        clearInterval(timerInterval)
        var result = totalPoints;
        answersContainer.innerHTML = "";
        questionsContainer.innerHTML = "";
        endScreen.classList.remove("hide");
        finalScore.textContent = result;

        //submit button to add scores to local storage
        submitBtn.addEventListener("click", function () {
           
            var myScore = initials.value + " - " + result
            highscoreArray = JSON.parse(localStorage.getItem("highscoreArray")) || []
            highscoreArray.push(myScore)
            localStorage.setItem("highscoreArray", JSON.stringify(highscoreArray));
            window.location.href = "highscores.html"
        })
       
    };


function displayQuestions() {
    startScreen.style.display = "none"; // unhide start screen
    document.body.appendChild(questionsContainer);
    questionsContainer.classList.remove('hide');
    questionsContainer.style = "display: flex; flex-direction: column; justify-content = flex-start";
    questionTitle.textContent = quizQuestions[0].question;
    questionsContainer.append(questionTitle);
    questionsCounter++;
};

function displayAnswers() {
    startScreen.style.display = "none";
    document.body.appendChild(answersContainer);

    for (var i = 0; i < 4; i++) {
        answerBtn = document.createElement('button');
        answersContainer.appendChild(answerBtn);
        answerBtn.textContent = quizQuestions[0].answers[i];
        answerBtn.addEventListener('click', function () {
            if (this.textContent === correct1) { correct(); }
            else {
                incorrect();
                
            }
            questions();
            answers();
        }

        )

    }
}


function questions() {
    questionTitle.textContent = quizQuestions[questionsCounter].question;
    questionsContainer.append(questionTitle);
    questionsCounter++
}

function answers() {
    answersContainer.innerHTML = '';  // clears answer container on next answers
    questionsContainer.append(answersContainer);  // adds another set of questions
    // creates new set of answers button in a loop
    for (var i = 0; i < 4; i++) {
        answerBtn = document.createElement("button");
        answersContainer.appendChild(answerBtn);
        answerBtn.textContent = quizQuestions[questionsCounter - 1].answers[i];
        answerBtn.addEventListener("click", function () {
            if (this.textContent === correct2 
                || this.textContent === correct3
                || this.textContent === correct3 
                || this.textContent === correct4 
                || this.textContent === correct5) {
                correct();
            }
            
            else {
                incorrect();
                
            }
            if (questionsCounter == 5) {
                gameOver();
            }
            else {
                questions();
                answers();
            }


        })
    }
}


function correct() {
    totalPoints++;
    console.log(totalPoints)
    feedback.classList.remove('hide');
    feedback.classList.add('wrapper');
    feedback.textContent = "Correct!";
    document.body.appendChild(feedback);
    var right = new Audio('./assets/sfx/correct.wav');
    right.play();
    setTimeout(function () {
        feedback.classList.add('hide');
    }, 1200);
};

function incorrect() {
    feedback.classList.remove('hide');
    feedback.classList.add('wrapper')
    feedback.textContent = "Wrong, try again";
    document.body.appendChild(feedback);
    var wrong = new Audio('./assets/sfx/incorrect.wav');
    wrong.play();
    setTimeout(function () {
        feedback.classList.add('hide');
    }, 1200);
};



// After start button pressed timer is on and game is starter - furst questions and answers appearing
startButton.addEventListener("click", function (event) {
    event.preventDefault();
    startTimer();
    gameInit();

})
