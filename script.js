'use strict';
let answer = Math.trunc(Math.random()*21);
let ran = document.querySelector('.ran');
let inpVal = 0;
let result = document.querySelector('#result');
let score = document.querySelector('#score');
let scoreVal = 20;
let highscoreVal = 0;
let highscore = document.querySelector('#highscore');

document.querySelector('.check').addEventListener('click', function() {
    let inpVal = document.querySelector('.inp').value;
    document.querySelector('.inp').value = '';
    if(inpVal<=20 && inpVal>=0) {
        ran.textContent = inpVal;
        if(inpVal==answer) {
            result.textContent= "you are correct!!!"
            score.textContent='your score: ' + scoreVal
            if(scoreVal>highscoreVal) {highscoreVal= scoreVal};
            highscore.textContent= 'high score: ' + highscoreVal;
            document.querySelector('body').style.backgroundColor= 'green'
        }else {
            scoreVal-=1;
            inpVal<answer ? result.textContent="your guess is too low!":
            result.textContent="your guess is high!"
        }
    }else {
        ran.textContent ="X";
        result.textContent = "enter a number between 1 to 20"
    }
    });


document.querySelector('.some').addEventListener('click', function() {
    document.querySelector('body').style.backgroundColor="black";
    ran.textContent = "?";
    scoreVal = 20
    score.textContent= "your score: 0"
    result.textContent='take a guess!'
    answer = Math.trunc(Math.random()*21);


})

