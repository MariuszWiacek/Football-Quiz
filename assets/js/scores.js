// get scores from localstorage
// declared variables scores from storage  and highscores from html
var highscores = document.querySelector("#highscores");
var clear =  document.getElementById("clear")
var initials = document.getElementById("initials");


// function for each element of the array from the local storage to show it on the page



let highscoreArray = JSON.parse(localStorage.getItem("highscoreArray"));
for (i = 0; i < highscoreArray.length; i++) {
    liEl = document.createElement('li');
    liEl.textContent = highscoreArray[i];    
    highscores.append(liEl);
};
clear.addEventListener("click", function () {
    highscores.innerHTML = ""
    localStorage.clear();
})

// sort the highscore array in descending order by score
highscoreArray.sort((a, b) => b.score - a.score);
